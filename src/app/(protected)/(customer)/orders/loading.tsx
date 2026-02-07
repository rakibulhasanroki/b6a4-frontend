import { Card, CardContent } from "@/components/ui/card";

export default function LoadingOrders() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-10 space-y-6">
      <div className="h-6 w-32 bg-muted rounded" />

      {Array.from({ length: 3 }).map((_, i) => (
        <Card key={i}>
          <CardContent className="p-6 flex justify-between items-center">
            <div className="space-y-2">
              <div className="h-3 w-40 bg-muted rounded" />
              <div className="h-3 w-32 bg-muted rounded" />
              <div className="h-3 w-24 bg-muted rounded" />
            </div>
            <div className="space-y-2 text-right">
              <div className="h-4 w-20 bg-muted rounded" />
              <div className="h-3 w-24 bg-muted rounded" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
