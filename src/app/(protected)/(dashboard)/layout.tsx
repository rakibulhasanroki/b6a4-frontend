import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/modules/dashboard/DashboardSidebar";
import { getSessionUser } from "@/lib/getSessionUser";
import UserMenu from "@/components/layouts/UserMenu";
import { ModeToggle } from "@/components/layouts/ModeToggle";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getSessionUser();

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar role={user.role} />

        <div className="flex flex-1 flex-col">
          <header className="flex h-14 items-center justify-between border-b px-4">
            <div>
              <SidebarTrigger />
            </div>
            <div>
              <UserMenu user={user} />
              <ModeToggle />
            </div>
          </header>
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
