import { Link } from "react-router-dom";
import cn from "../lib/utils/cn";

interface InsigniaProps {
  className?: string;
}

function Insignia({ className }: InsigniaProps) {
  return (
    <Link
      to="/"
      className={cn("text-2xl font-semibold tracking-tighter", className)}
    >
      social
    </Link>
  );
}

export default Insignia;
