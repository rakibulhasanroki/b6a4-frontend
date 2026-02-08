import UsersTable from "@/components/modules/admin/UserTable";
import PaginationControls from "@/components/ui/pagination";
import { userService } from "@/services/user.services";
import { Role, User, UserStatus } from "@/types";

export default async function AdminUsersPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const params = await searchParams;

  const data = await userService.getAllUsers({
    page: Number(params.page ?? 1),
    limit: 10,
  });
  const users = data.data?.data.data;

  const meta = data.data?.data.metaData;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold tracking-tight">Users</h1>
        <p className="text-sm text-muted-foreground">
          Manage platform users and access
        </p>
      </div>

      <UsersTable users={users} />

      <div className="flex justify-end">
        <PaginationControls meta={meta} />
      </div>
    </div>
  );
}
