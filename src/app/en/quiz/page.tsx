import { Metadata } from "next";
import data from "@/utils/data";
import ClientPage from "@/components/Quiz/ClientPage";
import "@/styles/englishQuiz.css";
export const metadata: Metadata = data.en.Metadata;

export default function page() {
  return <ClientPage lang="en" />;
}
