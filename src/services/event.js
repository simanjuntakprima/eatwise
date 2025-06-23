import prisma from "@/utils/prisma";

export async function createEvent({ name, description, date, location, userId }) {
  return await prisma.event.create({
    data: {
      name,
      description,
      date,
      location,
      userId,
    },
  });
}

export async function getAllEvents() {
  return await prisma.event.findMany();
}

export async function getEvents(userId) {
  return await prisma.event.findMany({
    where: {
      userId,
    },
  });
}

export async function getEvent(id) {
  return await prisma.event.findUnique({
    where: {
      id,
    },
  });
}
