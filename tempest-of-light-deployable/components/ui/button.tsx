import { ReactNode } from "react";

export function Button({ children, className = "", ...props }: { children: ReactNode; className?: string }) {
  return (
    <button className={`inline-flex items-center justify-center rounded-md font-medium transition ${className}`} {...props}>
      {children}
    </button>
  );
}
