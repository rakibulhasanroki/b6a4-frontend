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
      {/* Desktop*/}
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

      {/*  Tablet */}
      <div className="hidden sm:grid lg:hidden gap-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="grid grid-cols-6 items-center gap-3 rounded-lg border bg-background p-3 shadow-sm"
          >
            <div className="col-span-2">
              <p className="font-medium truncate">{user.name}</p>
              <p className="text-xs text-muted-foreground truncate">
                {user.email}
              </p>
            </div>

            <div className="text-sm truncate">{user.phoneNumber}</div>

            <div>
              <Badge variant="secondary" className="whitespace-nowrap">
                {user.role}
              </Badge>
            </div>

            <div>
              <Badge
                variant={
                  user.status === UserStatus.Active ? "default" : "destructive"
                }
              >
                {user.status}
              </Badge>
            </div>

            <div className="flex justify-end">
              <UserStatusToggle userId={user.id} currentStatus={user.status} />
            </div>
          </div>
        ))}
      </div>

      {/*  Mobile  */}
      <div className="sm:hidden space-y-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="rounded-lg border bg-background p-4 shadow-sm space-y-3"
          >
            <div className="flex justify-between gap-2">
              <div className="min-w-0">
                <p className="font-medium truncate">{user.name}</p>
                <p className="text-xs text-muted-foreground truncate">
                  {user.email}
                </p>
              </div>

              <Badge
                variant={
                  user.status === UserStatus.Active ? "default" : "destructive"
                }
              >
                {user.status}
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="truncate">{user.phoneNumber}</p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">Role</p>
                <Badge variant="secondary" className="whitespace-nowrap">
                  {user.role}
                </Badge>
              </div>
            </div>

            <div className="flex justify-end border-t pt-3">
              <UserStatusToggle userId={user.id} currentStatus={user.status} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
