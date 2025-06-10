import { cn } from '@/lib/utils';

type Props = {
  className?: string;
  size?: number;
  colorClass?: string;
};

const Spinner = ({
  className,
  size = 20,
  colorClass = 'text-white',
}: Props) => {
  return (
    <div
      className={cn(
        'animate-spin rounded-full border-2 border-current border-r-transparent',
        colorClass,
        className,
      )}
      style={{ width: size, height: size }}
      role="status"
    />
  );
};

export { Spinner };
