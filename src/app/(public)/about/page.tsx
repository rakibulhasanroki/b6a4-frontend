import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <section className="container mx-auto max-w-6xl px-4 py-10 space-y-10">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">MediStore</h1>

        <p className="text-muted-foreground">
          Your Trusted Online Medicine Shop
        </p>
      </div>

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle>About MediStore</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
          <p>
            MediStore is a full-stack e-commerce platform for purchasing
            over-the-counter (OTC) medicines online. It connects customers with
            trusted sellers while giving administrators full oversight of the
            platform.
          </p>
          <p>
            The system is designed with role-based access to ensure security,
            reliability, and a smooth shopping experience for everyone.
          </p>
        </CardContent>
      </Card>

      {/* Roles */}
      <div className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight text-center">
          Roles & Permissions
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between text-base">
                Customer
                <Badge variant="secondary">Buyer</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <p>• Browse medicines</p>
              <p>• Add to cart & place orders</p>
              <p>• Track order status</p>
              <p>• Leave reviews</p>
              <p>• Manage profile</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between text-base">
                Seller
                <Badge variant="outline">Vendor</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <p>• Add & manage medicines</p>
              <p>• Control stock levels</p>
              <p>• View incoming orders</p>
              <p>• Update order status</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between text-base">
                Admin
                <Badge>Moderator</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <p>• Manage users & roles</p>
              <p>• Ban / unban accounts</p>
              <p>• Manage categories</p>
              <p>• Oversee all orders</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Features */}
      <Card>
        <CardHeader>
          <CardTitle>Core Features</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <div>
            <p className="font-medium text-foreground mb-1">Public</p>
            <p>• Browse medicines</p>
            <p>• Search & filter products</p>
            <p>• View detailed medicine info</p>
          </div>

          <Separator />

          <div>
            <p className="font-medium text-foreground mb-1">
              Secure & Scalable Platform
            </p>
            <p>
              Built with modern technologies to ensure performance, security,
              and future scalability.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
