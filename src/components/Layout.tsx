import React, { ReactNode, memo } from "react";

export const Layout: React.FC<{ children: ReactNode }> = memo(
  ({ children }) => {
    return (
      <main className="m-auto flex min-h-screen w-screen items-center justify-center overflow-y-auto bg-slate-800">
        {children}
      </main>
    );
  }
);
