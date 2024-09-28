import { cn } from '@/lib/utils';

interface ChipsProps {
  label: string;
  className?: string;
  inactive?: boolean;
  onClick?: () => void;
}

function Chips({ label, className, inactive, onClick }: ChipsProps) {
  return (
    <button
      className={cn(
        'cursor-pointer rounded-3xl bg-blue px-8 py-2 text-xs font-bold text-white',
        {
          'bg-blue-100 text-blue': inactive,
        },
        className,
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Chips;
