import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="absolute top-0 left-0 p-4 flex justify-between items-center w-full">
        <div className="font-bold">Logo</div>
        <Link href="/" className="font-medium text-sm flex items-center gap-2">
          <ArrowLeft size={14} />
          Back to Home
        </Link>
      </div>
      <main className="w-[300px]">{children}</main>
    </div>
  );
}
