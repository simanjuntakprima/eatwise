import { Pin } from "lucide-react";
import Link from "next/link";
import React from "react";
import moment from "moment";

export const EventCard = ({ event }) => {
  return (
    <Link
      href={`/e/${event.id}`}
      key={event.id}
      className="p-4 h-fit items-start hover:border-indigo-500 border transition-all hover:shadow-indigo-50 duration-150 hover:shadow-xl cursor-pointer bg-white rounded-xl border-gray-200 grid grid-cols-3 gap-8"
    >
      {event.logoUrl ? (
        <img src={event.logoUrl} alt={event.name} className="w-full h-32 object-cover rounded-md" />
      ) : (
        <div className="w-full h-32 rounded-md border bg-indigo-500" />
      )}
      <section className="flex flex-col justify-center gap-4 h-full col-span-2">
        <section className="space-y-1">
          <div className="text-xl font-bold">{event.name}</div>
          <div className="flex items-center gap-2 text-sm font-bold">
            <div>{moment(event.date).format("DD/MM/YYYY")}</div>
            <div>{moment(event.date).format("HH:mm")} WIB</div>
          </div>
        </section>
        <div className="flex items-center gap-2">
          <Pin size={16} />
          <div>{event.location}</div>
        </div>
      </section>
    </Link>
  );
};
