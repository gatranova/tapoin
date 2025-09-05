import type { Metadata } from "next";
import Page from "@/client/not-found";

export const metadata: Metadata = {
  title: "404 | Tapoin",
  description: "",
  openGraph: {
    title: "404 | Tapoin",
    description: "",
  },
  twitter: {
    title: "404 | Tapoin",
    description: "",
  },
};

export default function NotFound() {
  return <Page />;
}