import type { Metadata } from "next";
import AlumniLegacy from "@/components/alumni/AlumniLegacy";

export const metadata: Metadata = {
  title: "Alumni",
  description:
    "Over 750 Buraqians across cities and disciplines — where they are now, and how the alumni network supports one another.",
};

export default function AlumniPage() {
  return (
    <main className="min-h-screen">
      <AlumniLegacy />
    </main>
  );
}