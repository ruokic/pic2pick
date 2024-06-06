import Link from "next/link";
import { Button } from "@/app/ui/common/Button";
import { Text } from "@/app/ui/common/Text";

export function Header() {
  return (
    <header className="w-full flex align-center justify-between p-4 shadow">
      <Link href="/" className="text-2xl">
        Pic2Pick
      </Link>
      <div>
        <Button primary={true} label={"Nothing"} />
      </div>
    </header>
  );
}
