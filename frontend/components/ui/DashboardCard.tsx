// components/DashboardCard.tsx
import { ReactNode } from "react";

export interface DashboardCardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function DashboardCard({ title, children, className }: DashboardCardProps) {
  return (
    <div className={`p-4 rounded-2xl shadow-md bg-white ${className || ""}`}>
      {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}
      {children}
    </div>
  );
}
