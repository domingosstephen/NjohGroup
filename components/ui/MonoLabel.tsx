interface MonoLabelProps {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "p" | "div";
}

export function MonoLabel({
  children,
  className = "",
  as: Tag = "span",
}: MonoLabelProps) {
  return (
    <Tag
      className={`font-mono text-[0.6875rem] uppercase tracking-[0.08em] leading-none text-ash ${className}`}
    >
      {children}
    </Tag>
  );
}
