import Link from "next/link";
import { Button, Text } from "@/app/ui/components";

export function Header() {
  return (
    <header className="w-full flex align-center justify-between p-4 shadow">
      <Link href="/" className="text-2xl">
        Pic2Pick
      </Link>
      <div>
        <Button primary label={"Nothing"} />
      </div>
    </header>
  );
}
