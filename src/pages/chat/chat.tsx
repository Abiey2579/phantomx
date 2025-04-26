'use client';

import { useState, useRef, useEffect } from 'react';
import { generateFromOllamaStream } from '@/services/api/mistral';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import 'highlight.js/styles/github.css';

import { removeThinkTags } from '@/utils/common';
import { tunePromptWithContext } from '@/services/api/tunePromptWithContext';
import ChatInput from '@/features/chat/chat-input';
import ActivityIndicator from './activity-indicator';

interface Message {
  id: number;
  sender: 'user' | 'ai';
  content: string;
  isLoading?: boolean;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: 'ai', content: 'Hi! How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSend = async () => {
    if (input.trim() === '' || isProcessing) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: 'user',
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsProcessing(true);

    const aiMessageId = Date.now() + 1;
    setMessages((prev) => [
      ...prev,
      { id: aiMessageId, sender: 'ai', content: '', isLoading: true },
    ]);

    try {
      const tunedPrompt = await tunePromptWithContext(userMessage.content);

      await generateFromOllamaStream(tunedPrompt, (token) => {
        setMessages((prevMessages) => {
          return prevMessages.map((msg) =>
            msg.id === aiMessageId
              ? {
                  ...msg,
                  content: removeThinkTags(msg.content + token),
                  isLoading: false,
                }
              : msg,
          );
        });
      });
    } catch (error) {
      console.error('Streaming error:', error);
      setMessages((prevMessages) => {
        return prevMessages.map((msg) =>
          msg.id === aiMessageId
            ? {
                ...msg,
                content: '⚠️ Failed to stream response from Ollama.',
                isLoading: false,
              }
            : msg,
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
        behavior: 'smooth',
      });
    }
  }, [messages]);

  return (
    <div className="relative mx-auto flex w-full flex-1 flex-col">
      <div
        className="h-[calc(100vh-220px)] space-y-4 overflow-y-auto p-4"
        ref={scrollRef}
      >
        <div className="mx-auto w-3/4">
          {messages.map((msg) => {
            return (
              <div
                key={msg.id}
                className={`rounded-3xl p-4 whitespace-pre-wrap ${
                  msg.sender === 'user'
                    ? 'bg-muted ml-auto w-fit max-w-[65%] self-end'
                    : 'w-full self-start'
                }`}
              >
                {msg.sender === 'ai' && msg.isLoading ? (
                  <ActivityIndicator />
                ) : msg.sender === 'ai' ? (
                  <div className="markdown-body">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm, remarkMath]}
                      rehypePlugins={[
                        rehypeRaw,
                        rehypeKatex,
                        rehypeHighlight,
                        rehypeSlug,
                        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                      ]}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                ) : (
                  msg.content
                )}
              </div>
            );
          })}
        </div>
      </div>

      <ChatInput
        handleSend={handleSend}
        input={input}
        isProcessing={isProcessing}
        setInput={setInput}
      />
    </div>
  );
};

export default Chat;
