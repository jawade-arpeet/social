import React from "react";
import cn from "../../lib/utils/cn";

function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full px-3 py-2 h-10 rounded-md font-medium text-black text-sm border border-zinc-400",
        className,
      )}
      {...props}
    />
  );
}

export default Input;
