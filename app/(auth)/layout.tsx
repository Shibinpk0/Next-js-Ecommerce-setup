import { NuqsAdapter } from "nuqs/adapters/react";
import type { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen w-full">
      <div className="flex flex-1 flex-col items-center justify-center bg-amber-100 p-7 font-sans text-5xl font-bold text-black">
        <span className="block">Move Fast when you</span>
        <span className="block">break things</span>
      </div>

      <div className="flex flex-1 items-center justify-center bg-gray-50 p-6">
        <NuqsAdapter>{children}</NuqsAdapter>
      </div>
    </div>
  );
}

export default AuthLayout;
