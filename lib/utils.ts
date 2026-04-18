import { clsx, type ClassValue } from "clsx";

// Lightweight cn() — no tailwind-merge needed since we use Tailwind v4
// which handles class conflicts natively
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
