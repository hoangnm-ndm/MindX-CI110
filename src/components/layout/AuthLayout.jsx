import TopNav from "./TopNav";
import BackgroundDecor from "./BackgroundDecor";

export default function AuthLayout({ children }) {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4">
      <TopNav />
      {children}
      <BackgroundDecor />
    </div>
  );
}
