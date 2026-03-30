export function Footer() {
  return (
    <footer className="px-4 pb-10 pt-4 md:px-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 rounded-[1.75rem] border border-[var(--line)] bg-[var(--panel)] px-6 py-8 backdrop-blur md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono-ui text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Billyflin</p>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
            Portfolio personal de Billy Martínez, migrado a React con una dirección visual más moderna.
          </p>
        </div>
        <div className="text-sm leading-6 text-[var(--muted)] md:text-right">
          <p>&copy; {new Date().getFullYear()} Billy Martínez</p>
          <p>React + TypeScript + Tailwind + motion background.</p>
        </div>
      </div>
    </footer>
  );
}
