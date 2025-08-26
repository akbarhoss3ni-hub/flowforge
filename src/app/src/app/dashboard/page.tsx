import { currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const user = await currentUser();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p>Welcome, {user?.firstName ?? user?.username ?? "there"}.</p>
    </div>
  );
}
