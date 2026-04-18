import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  ComponentPropsWithoutRef<"button"> & { href?: never };

type ButtonAsLink = ButtonBaseProps & { href: string; target?: string; rel?: string; onClick?: () => void };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-njoh-gold text-obsidian hover:bg-gold-light font-medium",
  secondary:
    "border border-njoh-gold text-njoh-gold hover:bg-njoh-gold/10 font-medium",
  ghost:
    "text-njoh-gold hover:text-gold-light font-medium",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    tracking-wide uppercase font-body
    transition-all duration-300 ease-out
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `.trim();

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={baseClasses} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...(props as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
