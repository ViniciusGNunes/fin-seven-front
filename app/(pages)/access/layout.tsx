import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acessar FinSeven",
  description: "Acesse sua conta no FinSeven via OAuth.",
};

export default function AccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
