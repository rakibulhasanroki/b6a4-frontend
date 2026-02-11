export default function LogoLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        {/* Logo Loader */}
        <div className="relative flex h-20 w-20 items-center justify-center">
          {/* Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-spin" />

          {/* Logo */}
          <span className="text-4xl font-extrabold text-primary">M</span>
        </div>

        {/* Text */}
        <p className="text-sm font-medium text-muted-foreground">
          Loading MediStore…
        </p>
      </div>
    </div>
  );
}
