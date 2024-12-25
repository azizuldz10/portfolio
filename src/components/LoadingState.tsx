export default function LoadingState() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="bg-foreground/5 rounded-xl overflow-hidden">
          <div className="relative aspect-video bg-foreground/10 animate-pulse" />
          <div className="p-6 space-y-4">
            <div className="h-4 bg-foreground/10 rounded animate-pulse" />
            <div className="h-4 bg-foreground/10 rounded w-2/3 animate-pulse" />
            <div className="flex gap-2">
              {[1, 2, 3].map((j) => (
                <div
                  key={j}
                  className="h-6 w-16 bg-foreground/10 rounded-full animate-pulse"
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 