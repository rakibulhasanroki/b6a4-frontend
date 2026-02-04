export const dynamic = "force-dynamic";
import { getSessionUser } from "@/lib/getSessionUser";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await getSessionUser({ requireAuth: true });

  return <>{children}</>;
}
