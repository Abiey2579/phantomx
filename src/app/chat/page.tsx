import ProtectedArea from '@/utils/ProtectedArea';
import ChatLayout from '@/components/layout/ChatLayout';

export default function Page() {
  return (
    <ProtectedArea>
      <ChatLayout />
    </ProtectedArea>
  );
}
