"use client";

import { usePathname } from "next/navigation";
import Cursor from "@/components/ui/Cursor";

export default function CursorWrapper() {
  const pathname = usePathname();
  return <Cursor key={pathname} />;
}