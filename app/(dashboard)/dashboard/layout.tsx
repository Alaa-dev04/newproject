import Providers from "@/shared/providers/providers";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Providers>
        <div className="bg-black text-white min-h-screen flex flex-col">
          <main className="flex-1 flex flex-col mx-4 ">{children}</main>
        </div>
      </Providers>
    </>
  );
}
