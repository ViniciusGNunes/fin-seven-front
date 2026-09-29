import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acessar FinTrack",
  description: "Acesse sua conta no FinTrack via OAuth.",
};

export default function AccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
