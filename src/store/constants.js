import { createUUID } from "../util/helper";

export const ACTION_TYPE = {
  "ADD_TASK": "ADD_TASK",
  "RESET_TASK": "RESET_TASK",
  "SHOW_MODAL": "SHOW_MODAL",
  "TOGGLE_MODAL": "TOGGLE_MODAL"
};

export const DUMMY_TASKS = [
  {
    id: createUUID(),
    title: "Task Title",
    desc: "I have scheduled interview with Maxtonn, I have to prepare for that",
    dueDate: new Date(),
    createdAt: new Date("2-02-2021"),
    priority: "HIGH",
    state: "Compleated"
  },
  {
    id: createUUID(),
    title: "Task Title",
    desc: "I have scheduled interview with Maxtonn, I have to prepare for that",
    dueDate: new Date(),
    createdAt: new Date(),
    priority: "HIGH",
    state: "Pending"
  },
  {
    id: createUUID(),
    title: "Task Title",
    desc: "I have scheduled interview with Maxtonn, I have to prepare for that",
    dueDate: new Date(),
    createdAt: new Date(),
    priority: "HIGH",
    state: "Pending"
  },
  {
    id: createUUID(),
    title: "Task Title",
    desc: "I have scheduled interview with Maxtonn, I have to prepare for that",
    dueDate: new Date(),
    createdAt: new Date(),
    priority: "HIGH",
    state: "Pending"
  },
  {
    id: createUUID(),
    title: "Task Title",
    desc: "I have scheduled interview with Maxtonn, I have to prepare for that",
    dueDate: new Date(),
    createdAt: new Date(),
    priority: "HIGH",
    state: "Pending"
  },
  {
    id: createUUID(),
    title: "Task Title",
    desc: "I have scheduled interview with Maxtonn, I have to prepare for that",
    dueDate: new Date(),
    createdAt: new Date(),
    priority: "HIGH",
    state: "Pending"
  },
  {
    id: createUUID(),
    title: "Task Title",
    desc: "I have scheduled interview with Maxtonn, I have to prepare for that",
    dueDate: new Date(),
    createdAt: new Date(),
    priority: "HIGH",
    state: "Pending"
  },
  {
    id: createUUID(),
    title: "Task Title",
    desc: "I have scheduled interview with Maxtonn, I have to prepare for that",
    dueDate: new Date(),
    createdAt: new Date(),
    priority: "HIGH",
    state: "Pending"
  },
  {
    id: createUUID(),
    title: "Task Title",
    desc: "I have scheduled interview with Maxtonn, I have to prepare for that",
    dueDate: new Date(),
    createdAt: new Date(),
    priority: "HIGH",
    state: "Pending"
  },
  {
    id: createUUID(),
    title: "Task Title",
    desc: "I have scheduled interview with Maxtonn, I have to prepare for that",
    dueDate: new Date(),
    createdAt: new Date(),
    priority: "HIGH",
    state: "Compleated"
  },
  {
    id: createUUID(),
    title: "Task Title",
    desc: "I have scheduled interview with Maxtonn, I have to prepare for that",
    dueDate: new Date(),
    createdAt: new Date(),
    priority: "HIGH",
    state: "Compleated"
  },
  {
    id: createUUID(),
    title: "Task Title",
    desc: "I have scheduled interview with Maxtonn, I have to prepare for that",
    dueDate: new Date(),
    createdAt: new Date(),
    priority: "HIGH",
    state: "Compleated"
  },
  {
    id: createUUID(),
    title: "Task Title",
    desc: "I have scheduled interview with Maxtonn, I have to prepare for that",
    dueDate: new Date(),
    createdAt: new Date(),
    priority: "HIGH",
    state: "Compleated"
  }
]