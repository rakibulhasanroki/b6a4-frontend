export default function GlobalLoading() {
  return (
    <div className="min-h-screen bg-background flex items-start justify-center px-6 py-20">
      <div className="w-full max-w-3xl animate-pulse">
        <div className="rounded-2xl border border-border bg-card p-6 space-y-5">
          <div className="h-5 w-1/3 rounded bg-muted" />
          <div className="h-4 w-full rounded bg-muted" />
          <div className="h-4 w-5/6 rounded bg-muted" />

          <div className="h-44 w-full rounded-xl bg-muted" />

          <div className="h-4 w-2/3 rounded bg-muted" />
          <div className="h-4 w-1/2 rounded bg-muted" />
        </div>
      </div>
    </div>
  );
}
