export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.04]" />
      <div className="absolute -left-1/4 -top-1/4 h-[55vw] w-[55vw] animate-drift-a rounded-full bg-accent/10 blur-[140px]" />
      <div className="absolute -right-1/4 top-1/4 h-[45vw] w-[45vw] animate-drift-b rounded-full bg-accent-line/8 blur-[150px]" />
      <div className="absolute -bottom-1/4 left-1/3 h-[40vw] w-[40vw] animate-drift-c rounded-full bg-accent-bright/6 blur-[150px]" />
    </div>
  );
}
