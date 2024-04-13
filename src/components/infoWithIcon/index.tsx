import { ReactNode } from "react";

interface InfoWithIconProps {
  icon: ReactNode;
  text?: string | ReactNode;
  children?: string | ReactNode;
  subtext?: string | ReactNode;
  className: string;
}

export function InfoWithIcon({
  icon,
  text,
  subtext,
  className,
  children,
}: InfoWithIconProps) {
  return (
    <div className="flex items-center gap-2">
      <div className={className}>{icon}</div>
      <div className="flex flex-col text-base">
        <div className="flex items-center gap-2">
          {typeof text === "string" ? <p>{text}</p> : text}
          <span>{children}</span>
        </div>
        <span>{subtext}</span>
      </div>
    </div>
  );
}
