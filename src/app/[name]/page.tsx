import { TriangleAlert } from "lucide-react";
import type { Metadata } from "next";
import { PROFILE } from "@/constants/routes";
import { Text as T } from "@/utils/text";

export async function generateMetadata({ params }: { params: Promise<{ name: string }> }): Promise<Metadata> {
  const { name } = await params;

  try {
    return {
      title: `${T.capitalizeEachWord(name)}'s Profile | Tapoin`,
      description: ``,
      openGraph: {
        title: `${T.capitalizeEachWord(name)}'s Profile | Tapoin`,
        description: ``,
      },
      twitter: {
        title: `${T.capitalizeEachWord(name)}'s Profile | Tapoin`,
        description: ``,
      },
    }
  } catch (err: unknown) {
    console.error(`❌ [metadata] Error GET ${PROFILE(name)}: ${err}`);
    return {
      title: "User Profile | Tapoin",
      description: "",
      openGraph: {
        title: "User Profile | Tapoin",
        description: "",
      },
      twitter: {
        title: "User Profile | Tapoin",
        description: "",
      },
    };
  }
}

export default async function Profile({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;

  try {
    return (
      <section className={`flex ml-20 h-screen flex-col`}>
        <h1>Profile {name}</h1>
      </section>
    );
  } catch (err: unknown) {
    console.error(`❌ [pages] Error GET ${PROFILE(name)}: ${err}`);
    return (
      <section className="flex h-screen flex-col items-center justify-center">
        <TriangleAlert className="text-yellow-500" size={40} />
        <p className="mt-2 text-sm font-semibold text-gray-600">
          Data tidak ditemukan.
        </p>
      </section>
    );
  }
}