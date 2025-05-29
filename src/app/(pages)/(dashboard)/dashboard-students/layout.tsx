import StudentSidebar from "@/components/dashboard/StudentSidebar";

export default function DashboardStudentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <StudentSidebar />
      <main className="flex-1 p-6 bg-black text-white overflow-y-auto mt-16">
        {children}
      </main>
    </div>
  );
}
