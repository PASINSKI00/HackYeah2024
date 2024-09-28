import { cn } from '@/lib/utils';

interface ChipsProps {
  label: string;
  inactive?: boolean;
  onClick?: () => void;
}

function Chips({ label, inactive, onClick }: ChipsProps) {
  return (
    <button
      className={cn('bg-blue text-xs font-bold text-white cursor-pointer rounded-3xl px-8 py-2', {
        'bg-blue-100 text-blue': inactive,
      })}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Chips;
