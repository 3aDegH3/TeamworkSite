// src/app/(routes)/team/layout.tsx
import React from 'react';

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="team-layout">
      {/* محتوای اختصاصی برای لایه تیم */}
      {children}
    </div>
  );
}