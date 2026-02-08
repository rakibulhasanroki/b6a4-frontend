import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import UserStatusToggle from "./UserStatusToggle";
import { User, UserStatus } from "@/types";

export default function UsersTable({ users }: { users: User[] }) {
  return (
    <div className="rounded-lg border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phoneNumber}</TableCell>

              <TableCell>
                <Badge variant="secondary">{user.role}</Badge>
              </TableCell>

              <TableCell>
                <Badge
                  variant={
                    user.status === UserStatus.Active
                      ? "default"
                      : "destructive"
                  }
                >
                  {user.status}
                </Badge>
              </TableCell>

              <TableCell className="text-right">
                <UserStatusToggle
                  userId={user.id}
                  currentStatus={user.status}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
