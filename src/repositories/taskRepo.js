import prisma from '../config/db.js';

export async function findAll() {
  return prisma.task.findMany();
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}

//find a task by id
export async function findById(id) {
  return prisma.task.findUnique({
    where: { id: Number(id) }, 
  });
}