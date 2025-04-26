import React, { useRef } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ArrowUp, GlobeIcon, LightbulbIcon, Mic, PlusIcon } from 'lucide-react';

interface TChatInput {
  setInput: (e: string) => void;
  isProcessing: boolean;
  handleSend: () => Promise<void>;
  input: string;
}

const ChatInput: React.FC<TChatInput> = ({
  setInput,
  isProcessing,
  handleSend,
  input,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  return (
    <div className="mx-auto flex w-3/4 flex-col gap-2 rounded-3xl border bg-white p-4 shadow-md">
      <Textarea
        ref={textareaRef}
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
        disabled={isProcessing}
        className="flex-1 resize-none border-0 shadow-none focus-visible:ring-0"
      />
      <div className="flex items-center justify-between">
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
            disabled={isProcessing || input.trim() === ''}
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
