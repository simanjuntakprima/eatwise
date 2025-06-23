import { getEvent } from "@/services/event";
import { PinIcon, Timer } from "lucide-react";
import moment from "moment";

export default async function Page({ params }) {
  const { id } = await params;
  const event = await getEvent(id);

  return (
    <main className="space-y-12 border p-2 bg-white rounded-xl pb-12">
      <section className="relative">
        {event.imageCoverUrl ? (
          <img src={event.imageCoverUrl} alt={event.name} className="w-full h-64 object-cover rounded-md shadow-lg" />
        ) : (
          <div className="w-full h-64 rounded-md border bg-indigo-500" />
        )}
        {event.logoUrl ? (
          <img src={event.logoUrl} alt={event.name} className="absolute -bottom-10 left-10 w-24 border-2 border-white h-24 object-cover rounded-md shadow-lg" />
        ) : (
          <div className="absolute -bottom-10 left-10 w-24 border-2 border-white h-24 bg-indigo-500 rounded-md shadow-lg" />
        )}
      </section>
      <div className="max-w-3xl m-auto space-y-12">
        <section className="space-y-2">
          <div className="text-3xl font-bold">{event.name}</div>
          <div className="flex items-center gap-1 font-medium tracking-tight">
            <Timer size={16} />
            <div>{moment(event.date).format("MMMM Do, YYYY")}</div>
            <div>-</div>
            <div>{moment(event.date).format("HH:mm")} WIB</div>
          </div>
          <div className="flex items-center gap-1 font-medium tracking-tight">
            <PinIcon size={16} />
            <div>{event.location}</div>
          </div>
        </section>
        <section className="space-y-2">
          <div className="text-2xl font-bold">Description</div>
          <div>{event.description}</div>
        </section>
      </div>
    </main>
  );
}
