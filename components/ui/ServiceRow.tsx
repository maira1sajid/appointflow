import Button from "@/components/ui/Button";
import { CloseIcon } from "@/components/ui/icons";

type ServiceRowProps = {
  name: string;
  duration: string;
  price: string;
  onRemove?: () => void;
};

export default function ServiceRow({ name, duration, price, onRemove }: ServiceRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
      <div>
        <p className="font-bold text-ink-900">{name}</p>
        <p className="text-sm text-ink-500">
          {duration} · {price}
        </p>
      </div>
      {onRemove ? (
        <button
          type="button"
          onClick={onRemove}
          aria-label={`Remove ${name}`}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ink-400 transition-colors hover:bg-red-50 hover:text-red-500"
        >
          <CloseIcon className="h-4 w-4" />
        </button>
      ) : (
        <Button href="/login" variant="primary" size="sm">
          Book
        </Button>
      )}
    </div>
  );
}
