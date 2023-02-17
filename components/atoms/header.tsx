interface HeaderProps {
  type: "h1" | "h2" | "h3";
  children: React.ReactNode;
}

export default function Header({ type, children }: HeaderProps) {
  const types = {
    h1: "text-3xl font-bold",
    h2: "text-xl font-bold",
    h3: "text-lg",
  };
  return <span className={types[type]}>{children}</span>;
}
