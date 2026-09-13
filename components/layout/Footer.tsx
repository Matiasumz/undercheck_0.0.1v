export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 sm:px-10">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-xl font-black tracking-tight text-text">
            UNDERCHECK
          </p>
          <p className="text-sm text-text-muted">“ Keep it Under ”</p>
        </div>
        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} Undercheck. Agencia de desarrollo web,
          automatizaciones, publicidad y datos.
        </p>
      </div>
    </footer>
  );
}
