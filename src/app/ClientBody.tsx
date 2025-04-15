"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "font-lato bg-white text-sya-blue";
  }, []);

  return (
    <body className="font-lato bg-white text-sya-blue" suppressHydrationWarning>
      {children}
    </body>
  );
}
