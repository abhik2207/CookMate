import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="w-full h-screen bg-slate-100 flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl font-semibold text-zinc-800">{"OOPS! :( You are lost"}</h1>
            <Link href='/'>
                <Button>Go back to homepage</Button>
            </Link>
        </div>
    )
}
