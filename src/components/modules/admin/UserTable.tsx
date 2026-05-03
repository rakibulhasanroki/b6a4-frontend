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
    <>
      {/* Desktop */}
      <div className="hidden lg:block rounded-lg border bg-background shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
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
              <TableRow key={user.id} className="hover:bg-muted/40">
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phoneNumber}</TableCell>

                <TableCell>
                  <Badge variant="secondary" className="whitespace-nowrap">
                    {user.role}
                  </Badge>
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

      {/* Mobile + Tablet */}
      <div className="lg:hidden space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="rounded-xl border bg-background p-4 shadow-sm space-y-4"
          >
            {/* Top */}
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="font-semibold text-foreground truncate">
                  {user.name}
                </p>
                <p className="text-sm text-muted-foreground truncate">
                  {user.email}
                </p>
              </div>

              <Badge
                variant={
                  user.status === UserStatus.Active ? "default" : "destructive"
                }
                className="shrink-0"
              >
                {user.status}
              </Badge>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="font-medium truncate">
                  {user.phoneNumber || "-"}
                </p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">Role</p>
                <Badge variant="secondary" className="mt-1">
                  {user.role}
                </Badge>
              </div>
            </div>

            {/* Action */}
            <div className="flex justify-end border-t pt-3">
              <UserStatusToggle userId={user.id} currentStatus={user.status} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
