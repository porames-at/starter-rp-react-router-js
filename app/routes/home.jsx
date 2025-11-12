// import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import AppPdfViewer from "../components/AppPdfViewer";

export function meta() {
  // export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const pdfSrc =
    "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf";
  return (
    <>
      <h1>Starter RP + React router + JavaScript </h1>
      <AppPdfViewer pdfSrc={pdfSrc} />
    </>
  );
}
