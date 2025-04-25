"use client";

import { useState, useRef, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowUp, GlobeIcon, LightbulbIcon, Mic, PlusIcon } from "lucide-react";
// import { generateFromOllamaStream } from "@/services/api/chat";
import { generateFromOllamaStream } from "@/services/api/mistral";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import "katex/dist/katex.min.css"; // for math rendering
import "highlight.js/styles/github.css"; // for code syntax

import { removeThinkTags } from "@/utils/common";
import { checkPromptClarity } from "@/services/api/checkPromptClarity";
import { tunePromptWithContext } from "@/services/api/tunePromptWithContext";

interface Message {
  id: number;
  sender: "user" | "ai";
  content: string;
  isLoading?: boolean;
}

const ChatRoom = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "ai", content: "Hi! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSend = async () => {
    if (input.trim() === "" || isProcessing) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsProcessing(true);

    const aiMessageId = Date.now() + 1;
    setMessages((prev) => [
      ...prev,
      { id: aiMessageId, sender: "ai", content: "", isLoading: true },
    ]);

    try {
      const { isClear, followUpQuestion } = await checkPromptClarity(
        userMessage.content
      );

      if (!isClear) {
        // setMessages((prevMessages) =>
        //   prevMessages.map((msg) =>
        //     msg.id === aiMessageId
        //       ? {
        //           ...msg,
        //           content:
        //             followUpQuestion ||
        //             "Can you clarify your question or add more context?",
        //           isLoading: false,
        //         }
        //       : msg
        //   )
        // );
        await generateFromOllamaStream(userMessage.content, (token) => {
          setMessages((prevMessages) => {
            return prevMessages.map((msg) =>
              msg.id === aiMessageId
                ? {
                    ...msg,
                    content: removeThinkTags(msg.content + token),
                    isLoading: false,
                  }
                : msg
            );
          });
        });
        return;
      }

      const tunedPrompt = await tunePromptWithContext(userMessage.content);

      // If clear, continue with streaming
      await generateFromOllamaStream(tunedPrompt, (token) => {
        setMessages((prevMessages) => {
          return prevMessages.map((msg) =>
            msg.id === aiMessageId
              ? {
                  ...msg,
                  content: removeThinkTags(msg.content + token),
                  isLoading: false,
                }
              : msg
          );
        });
      });
    } catch (error) {
      console.error("Streaming error:", error);
      setMessages((prevMessages) => {
        return prevMessages.map((msg) =>
          msg.id === aiMessageId
            ? {
                ...msg,
                content: "⚠️ Failed to stream response from Ollama.",
                isLoading: false,
              }
            : msg
        );
      });
    } finally {
      setIsProcessing(false);
      // Focus textarea after processing completes
      console.log(messages);

      setTimeout(() => textareaRef.current?.focus(), 0);
    }
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div className="flex-1 w-full flex flex-col mx-auto relative">
      {/* Message List Container */}
      <div
        className="h-[calc(100vh-220px)] overflow-y-auto p-4 space-y-4"
        ref={scrollRef}
      >
        <div className="w-3/4 mx-auto">
          {messages.map((msg) => {
            return (
              <div
                key={msg.id}
                className={`p-4 rounded-3xl whitespace-pre-wrap ${
                  msg.sender === "user"
                    ? "bg-muted self-end ml-auto w-fit max-w-[65%]"
                    : "self-start w-full"
                }`}
              >
                {msg.sender === "ai" && msg.isLoading ? (
                  <div className="flex items-center gap-1">
                    <div className="animate-bounce h-2 w-2 bg-slate-500 rounded-full"></div>
                    <div className="animate-bounce h-2 w-2 bg-slate-500 rounded-full delay-200"></div>
                    <div className="animate-bounce h-2 w-2 bg-slate-500 rounded-full delay-400"></div>
                  </div>
                ) : msg.sender === "ai" ? (
                  <div className="markdown-body">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm, remarkMath]}
                      rehypePlugins={[
                        rehypeRaw,
                        rehypeKatex,
                        rehypeHighlight,
                        rehypeSlug,
                        [rehypeAutolinkHeadings, { behavior: "wrap" }],
                      ]}
                    >
                      {msg.content}
                    </ReactMarkdown>
                    {/* {msg.content || " "} */}
                  </div>
                ) : (
                  msg.content
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Input Area */}
      <div className=" w-3/4 mx-auto bg-white border rounded-3xl p-4 flex flex-col gap-2 shadow-md">
        <Textarea
          ref={textareaRef}
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          disabled={isProcessing}
          className="flex-1 resize-none border-0 shadow-none focus-visible:ring-0"
        />
        <div className="flex justify-between items-center">
          <div className="space-x-4">
            <Button
              size="icon"
              className="rounded-full"
              variant="outline"
              disabled={isProcessing}
            >
              <PlusIcon className="h-5 w-5" />
            </Button>
            <Button
              className="rounded-full"
              variant="outline"
              disabled={isProcessing}
            >
              <GlobeIcon className="h-5 w-5" />
              Search Web
            </Button>
            <Button
              className="rounded-full"
              variant="outline"
              disabled={isProcessing}
            >
              <LightbulbIcon className="h-5 w-5" />
              Reason
            </Button>
          </div>
          <div className="space-x-4">
            <Button
              size="icon"
              className="rounded-full"
              variant="outline"
              disabled={isProcessing}
            >
              <Mic className="h-5 w-5" />
            </Button>
            <Button
              onClick={handleSend}
              size="icon"
              className="rounded-full"
              disabled={isProcessing || input.trim() === ""}
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
