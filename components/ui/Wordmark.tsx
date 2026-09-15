type WordmarkProps = {
  className?: string;
} & React.HTMLAttributes<HTMLSpanElement>;

// "Undercheck" es la marca: va siempre en una sola línea, nunca partida
// en "Under" + salto de línea + "check". El bicolor (Under en verde,
// check en el color de texto) viene del logo/nav original.
export function Wordmark({ className, ...rest }: WordmarkProps) {
  return (
    <span
      className={`whitespace-nowrap font-display font-black uppercase tracking-tight ${className ?? ""}`}
      {...rest}
    >
      <span className="text-accent">Under</span>
      <span className="text-text">check</span>
    </span>
  );
}
