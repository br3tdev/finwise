import Header from "@/components/header";

export interface IDashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: IDashboardLayoutProps) {
  return (
    <>
      <Header />
      <main className="px-3 lg:px-14">{children}</main>
    </>
  );
}
