import UsersFilter from "@/components/modules/admin/UsersFilter";
import UsersTable from "@/components/modules/admin/UserTable";
import PaginationControls from "@/components/ui/pagination";
import { userService } from "@/services/user.services";

export default async function AdminUsersPage({
  searchParams,
}: {
  searchParams: {
    page?: string;
    role?: string;
    status?: string;
    search?: string;
  };
}) {
  const params = await searchParams;

  const data = await userService.getAllUsers({
    page: Number(params.page ?? 1),
    limit: 10,
    role: params.role,
    status: params.status,
    search: params.search,
  });

  const users = data.data?.data.data;
  const meta = data.data?.data.metaData;

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold tracking-tight">Users</h1>

      <UsersFilter />

      <UsersTable users={users} />

      <div className="flex justify-end">
        <PaginationControls meta={meta} />
      </div>
    </div>
  );
}
