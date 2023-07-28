import { Metadata } from "next";

// import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Brice Suazo - CV 2023",
};

export default function Layout({ children }: React.PropsWithChildren) {
  // redirect("/Brice Suazo - CV 2023.pdf");
  return <>{children}</>;
}
