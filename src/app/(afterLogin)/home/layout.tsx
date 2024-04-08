export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>홈 레이아웃</header>
      {children}
    </div>
  );
}
