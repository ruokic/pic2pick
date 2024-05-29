import Link from "next/link";
import { Button } from "@/app/ui/common/Button";

export function Header() {
  return (
    <header className="w-full flex align-center justify-between p-4 shadow">
      <div className="text-2xl">
        <Link href="#">Pic2Pick</Link>
      </div>
      <div>
        <Button primary={true} label={"Nothing"} />
      </div>
    </header>
  );
}
