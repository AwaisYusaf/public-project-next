import Header from "@/components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col items-center">
      <div className="w-10/12">
        <Header />
        {children}
      </div>
    </main>
  );
}
