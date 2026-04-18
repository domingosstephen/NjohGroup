import Link from "next/link";

interface CTACardProps {
  title: string;
  description?: string;
  href: string;
  className?: string;
}

export function CTACard({
  title,
  description,
  href,
  className = "",
}: CTACardProps) {
  return (
    <Link
      href={href}
      className={`
        group relative block border border-graphite p-8
        transition-all duration-300 ease-out
        hover:border-njoh-gold/40 hover:bg-graphite/30
        ${className}
      `}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-display text-lg text-ivory group-hover:text-njoh-gold transition-colors duration-300">
            {title}
          </h3>
          {description && (
            <p className="mt-2 text-sm text-ash leading-relaxed">
              {description}
            </p>
          )}
        </div>
        <span
          className="text-njoh-gold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
          aria-hidden="true"
        >
          &rarr;
        </span>
      </div>
    </Link>
  );
}
