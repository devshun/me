import React, { ReactNode, memo } from "react";

export const Layout: React.FC<{ children: ReactNode }> = memo(
  ({ children }) => {
    return (
      <main
        className="m-auto flex h-screen w-screen items-center justify-center bg-slate-800
      "
      >
        {children}
      </main>
    );
  }
);
