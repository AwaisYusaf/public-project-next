import Header from "@/components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <div className="lg:w-10/12 w-11/12 lg:mt-16">{children}</div>
    </main>
  );
}
