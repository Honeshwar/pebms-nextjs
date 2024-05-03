import { Metadata } from "next";
import data from "@/utils/data";
import ClientPage from "@/components/Quiz/ClientPage";
import "@/styles/hindiQuiz.css";

export const metadata: Metadata = data.hi.Metadata;

export default function page() {
  return <ClientPage lang="hi" />;
}
