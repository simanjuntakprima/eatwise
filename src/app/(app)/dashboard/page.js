import { getCurrentSession } from "@/services/auth";
import { getEvents } from "@/services/event";
import { Pin } from "lucide-react";
import moment from "moment";

export default async function Page() {
  const session = await getCurrentSession();
  const events = await getEvents(session.user.id);

  return (
    <div>
      <main className="space-y-8">
        <h1>Events</h1>
        <div className="grid grid-cols-1 gap-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="p-4 min-h-48 hover:border-indigo-500 border transition-all hover:shadow-indigo-50 duration-150 hover:shadow-xl cursor-pointer bg-white rounded-xl border-gray-200 grid grid-cols-3 gap-4"
            >
              <div className="bg-indigo-100 w-full h-full rounded-md" />
              <section className="space-y-3">
                <section>
                  <div className="text-2xl font-bold">{event.name}</div>
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <div>{moment(event.date).format("DD/MM/YYYY")}</div>
                    <div>{moment(event.date).format("HH:mm")} WIB</div>
                  </div>
                </section>
                <div className="flex items-center gap-2">
                  <Pin size={16} />
                  <div>{event.location}</div>
                </div>
                <div>{event.description}</div>
              </section>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
