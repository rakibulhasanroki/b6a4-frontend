import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "@/types";

export default function ProfileInfoCard({ user }: { user: User }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        <div>
          <p className="text-muted-foreground">Full Name</p>
          <p className="font-medium">{user.name}</p>
        </div>

        <div>
          <p className="text-muted-foreground">Email</p>
          <p className="font-medium">{user.email}</p>
        </div>

        <div>
          <p className="text-muted-foreground">Phone Number</p>
          <p className="font-medium">{user.phoneNumber || "Not provided"}</p>
        </div>

        <div>
          <p className="text-muted-foreground">Role</p>
          <p className="font-medium">{user.role}</p>
        </div>
      </CardContent>
    </Card>
  );
}
