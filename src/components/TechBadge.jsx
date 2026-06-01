const shields = {
  Java: { color: "ED8B00", logo: "openjdk" },
  Rust: { color: "f74c00", logo: "rust" },
  TypeScript: { color: "3178C6", logo: "typescript" },
  Lua: { color: "000080", logo: "lua" },
  "Next.js": { color: "000000", logo: "nextdotjs" },
  PostgreSQL: { color: "4169E1", logo: "postgresql" },
};

export default function TechBadge({ name }) {
  const s = shields[name] || { color: "888", logo: "" };
  const url = `https://img.shields.io/badge/${name}-${s.color}?style=for-the-badge&logo=${s.logo}&logoColor=white`;
  return <img src={url} alt={name} className="h-6" />;
}
