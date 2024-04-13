import { ReactNode } from "react";

interface SectionTitleProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  className: string;
  children: ReactNode;
}

export function SectionTitle({
  icon,
  title,
  subtitle,
  children,
  ...rest
}: SectionTitleProps) {
  return (
    <div {...rest}>
      <div className="flex items-center gap-2">
        {icon}
        <h1>{title}</h1>
      </div>
      <h2>{subtitle}</h2>
      {children}
    </div>
  );
}
