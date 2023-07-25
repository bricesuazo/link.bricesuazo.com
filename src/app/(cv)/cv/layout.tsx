import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brice Suazo - CV 2023",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
