export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.07]" />
      <div
        className="absolute -left-1/4 -top-1/3 h-[65vw] w-[65vw] animate-drift-a rounded-full opacity-70 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -right-1/4 top-1/4 h-[55vw] w-[55vw] animate-drift-b rounded-full opacity-60 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-line) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-1/3 left-1/4 h-[55vw] w-[55vw] animate-drift-c rounded-full opacity-50 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-bright) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute right-1/4 bottom-0 h-[35vw] w-[35vw] animate-drift-b rounded-full opacity-40 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-hover) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
