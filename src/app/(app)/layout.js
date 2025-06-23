import { Button } from "@/components/ui/button";
import { getCurrentSession } from "@/services/auth";
import { CalendarIcon, HomeIcon, Plus, Sparkle } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default async function Layout({ children }) {
  const session = await getCurrentSession();

  return (
    <div className="w-full h-screen bg-gradient-to-b from-indigo-200 to-20% to-transparent space-y-12 pb-12">
      <header className="flex justify-between items-center p-4 ">
        <Link href="/" className="font-bold flex items-center gap-2">
          <Sparkle size={16} />
          <div>eventmakers</div>
        </Link>
        {session ? (
          <div className="flex items-center gap-2">
            <Link href="/dashboard/create-event">
              <Button size="sm" variant="ghost">
                <Plus size={16} />
                Create Event
              </Button>
            </Link>
            <div className="text-sm font-bold tracking-tight">{session.user.name}</div>
          </div>
        ) : (
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        )}
      </header>
      <div className="max-w-6xl m-auto">{children}</div>
    </div>
  );
}
