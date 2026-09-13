type MarqueeProps = {
  items: string[];
  className?: string;
};

export function Marquee({ items, className }: MarqueeProps) {
  const track = [...items, ...items];

  return (
    <div className={`group overflow-hidden ${className ?? ""}`}>
      <div className="flex w-max animate-marquee gap-12 py-2 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {track.map((item, index) => (
          <span key={index} className="whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
