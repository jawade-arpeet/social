import React from "react";

import cn from "../../lib/utils/cn";

function Button({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-block text-sm font-semibold tracking-tight rounded-full bg-primary px-4 py-2 h-10",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
