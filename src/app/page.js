import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col gap-6">
      <h1 className="text-3xl lg:text-6xl font-bold tracking-tight">Welcome to CookMate</h1>

      <Link href={'/recipes'}>
        <Button>Explore recipes</Button>
      </Link>
    </div>
  );
}
