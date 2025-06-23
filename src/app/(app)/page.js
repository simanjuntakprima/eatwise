import { getAllEvents } from "@/services/event";
import { Pin } from "lucide-react";
import moment from "moment";
import Link from "next/link";
import { EventCard } from "./event-card";

export default async function Page() {
  const events = await getAllEvents();

  return (
    <div>
      <main className="space-y-8">
        <h1>Events</h1>
        <div className="grid grid-cols-2 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </main>
    </div>
  );
}
