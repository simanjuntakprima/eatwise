"use server";

import { getCurrentSession } from "@/services/auth";
import { createEvent } from "@/services/event";

export async function createEventAction(_, formData) {
  const name = formData.get("name");
  const description = formData.get("description");
  const date = formData.get("date");
  const location = formData.get("location");

  if (!name || !description || !date || !location) {
    return {
      error: "All fields are required",
    };
  }

  const session = await getCurrentSession();
  if (!session) {
    return {
      error: "Unauthorized",
    };
  }

  const eventDate = new Date(date);
  const event = await createEvent({ name, description, date: eventDate, location, userId: session.user.id });

  if (!event) {
    return {
      error: "Failed to create event",
    };
  }

  return {
    success: "Event created successfully",
  };
}
