export default function DashboardClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1 p-6 bg-black text-white overflow-y-auto mt-16">
        {children}
      </main>
    </div>
  );
}
