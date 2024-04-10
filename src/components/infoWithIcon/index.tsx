import { ReactNode } from "react";

interface InfoWithIconProps {
  icon: ReactNode;
  text: string | ReactNode;
  className: string;
}

export function InfoWithIcon({ icon, text, className }: InfoWithIconProps) {
  return (
    <div className="flex items-center gap-2">
      <div className={className}>{icon}</div>
      {typeof text === "string" ? <p>{text}</p> : text}
    </div>
  );
}
