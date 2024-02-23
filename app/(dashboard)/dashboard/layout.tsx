import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "BOI Backend - Dashboard",
  description: "BOI Backend Admin dashboard.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <Suspense fallback={<Loading />}>
          <main className="w-full pt-16">{children}</main>
        </Suspense>
        
      </div>
    </>
  );
}
