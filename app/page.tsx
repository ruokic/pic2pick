import { redirect } from "next/navigation";

export default function Home() {
  redirect("/picture");
  return <main></main>;
}
