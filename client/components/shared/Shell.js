import { cn } from "lib/utils";
import React from "react";

function Shell({ title, subtitle, children, className }) {
  return (
    <div className={cn("border shadow rounded p-4 space-y-1", className)}>
      <div className="px-4">
        <h2 className="font-semibold text-xl text-slate-700">{title}</h2>
        <h4>{subtitle}</h4>
      </div>
      {children}
    </div>
  );
}

export default Shell;
