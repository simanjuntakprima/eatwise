"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useActionState } from "react";
import { createEventAction } from "./action";
import { AlertState } from "@/components/shared/alert-state";

export default function Page() {
  const [state, action, pending] = useActionState(createEventAction, null);

  return (
    <div className="max-w-2xl m-auto">
      <main className="space-y-4">
        <h1>Create Event</h1>
        <form action={action} className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="event-name">Name</Label>
            <Input name="name" id="event-name" placeholder="Event Name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="event-description">Description</Label>
            <Input name="description" id="event-description" placeholder="Event Description" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="event-date">Date</Label>
            <Input name="date" id="event-date" placeholder="Event Date" type="datetime-local" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="event-location">Location</Label>
            <Input name="location" id="event-location" placeholder="Event Location" />
          </div>
          <Button className="col-span-2" type="submit" disabled={pending}>
            {pending ? "Creating..." : "Create Event"}
          </Button>
          <AlertState state={state} />
        </form>
      </main>
    </div>
  );
}
