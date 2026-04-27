"use client";

import dynamic from "next/dynamic";

const DottedSurface = dynamic(() => import("@/components/DottedSurface"), {
  ssr: false,
});

export default function PageBackground() {
  return <DottedSurface />;
}
