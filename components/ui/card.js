import { cn } from "@/lib/utils";

export function Card({ className, children, ...props }) {
  return (
    <div className={cn("rounded-lg border bg-white text-black shadow-sm", className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ className, children, ...props }) {
  return (
    <div className={cn("p-4", className)} {...props}>
      {children}
    </div>
  );
}
