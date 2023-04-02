import React, { ReactNode, memo } from "react";

export const Layout: React.FC<{ children: ReactNode }> = memo(
  ({ children }) => {
    return (
      <main className="m-auto flex h-screen w-screen items-center justify-center bg-[#0F172A]">
        {children}
      </main>
    );
  }
);

Layout.displayName = "Layout";
