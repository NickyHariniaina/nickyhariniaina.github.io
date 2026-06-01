import { useState, useEffect } from "react";

const chars = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

export default function BrailleSpinner() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % chars.length), 80);
    return () => clearInterval(t);
  }, []);

  return <span className="text-[#f74c00] ml-1">{chars[i]}</span>;
}
