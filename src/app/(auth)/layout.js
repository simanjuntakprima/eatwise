import { ArrowLeft, LogIn, Sparkle } from "lucide-react";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="bg-gradient-to-b from-transparent to-indigo-400 relative flex justify-center items-center h-screen">
      <div className="absolute top-0 left-0 p-4 flex justify-between items-center w-full">
        <Link href="/" className="font-bold flex items-center gap-2">
          <Sparkle size={16} />
          <div>eventmakers</div>
        </Link>
        <Link href="/" className="font-medium text-sm flex items-center gap-2">
          <ArrowLeft size={14} />
          Back to Home
        </Link>
      </div>
      <main className="w-[380px] ">
        <div className="bg-white rounded-3xl p-12 shadow-xl shadow-indigo-500/10 space-y-6">
          <div className="flex justify-center bg-indigo-500 w-12 h-12 rounded-full items-center">
            <LogIn size={15} className="text-white" />
          </div>
          <div>{children}</div>
        </div>
      </main>
    </div>
  );
}
