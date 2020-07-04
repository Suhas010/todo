import moment from "moment";
import { createUUID, getRandomArbitrary } from "../util/helper";

export const ACTION_TYPE = {
  "ADD_TASK": "ADD_TASK",
  "UPDATE_TASK": "UPDATE_TASK",
  "CHANGE_STATE": "CHANGE_STATE",
  "RESET_TASK": "RESET_TASK",
  "SHOW_MODAL": "SHOW_MODAL",
  "TOGGLE_MODAL": "TOGGLE_MODAL"
};

const DUMMY_TASKS = [
  {
    id: createUUID(),
    title: "Task Title",
    desc: "This is task descriptions...",
    dueDate: moment().add(getRandomArbitrary(), "days"),
    createdAt: moment().add(getRandomArbitrary(), "days"),
    priority: "HIGH",
    state: "Compleated"
  },
  {
    id: createUUID(),
    title: "Task Title",
    desc: "This is task descriptions...",
    dueDate: moment().add(getRandomArbitrary(), "days"),
    createdAt: moment().add(getRandomArbitrary(), "days"),
    priority: "HIGH",
    state: "Pending"
  },
  {
    id: createUUID(),
    title: "Task Title",
    desc: "This is task descriptions...",
    dueDate: moment().add(getRandomArbitrary(), "days"),
    createdAt: moment().add(getRandomArbitrary(), "days"),
    priority: "HIGH",
    state: "Pending"
  },
  {
    id: createUUID(),
    title: "Task Title",
    desc: "This is task descriptions...",
    dueDate: moment().add(getRandomArbitrary(), "days"),
    createdAt: moment().add(getRandomArbitrary(), "days"),
    priority: "HIGH",
    state: "Pending"
  },
  {
    id: createUUID(),
    title: "Task Title",
    desc: "This is task descriptions...",
    dueDate: moment().add(getRandomArbitrary(), "days"),
    createdAt: moment().add(getRandomArbitrary(), "days"),
    priority: "HIGH",
    state: "Pending"
  },
  {
    id: createUUID(),
    title: "Task Title",
    desc: "This is task descriptions...",
    dueDate: moment().add(getRandomArbitrary(), "days"),
    createdAt: moment().add(getRandomArbitrary(), "days"),
    priority: "HIGH",
    state: "Pending"
  },
  {
    id: createUUID(),
    title: "Task Title",
    desc: "This is task descriptions...",
    dueDate: moment().add(getRandomArbitrary(), "days"),
    createdAt: moment().add(getRandomArbitrary(), "days"),
    priority: "HIGH",
    state: "Pending"
  },
  {
    id: createUUID(),
    title: "Task Title",
    desc: "This is task descriptions...",
    dueDate: moment().add(getRandomArbitrary(), "days"),
    createdAt: moment().add(getRandomArbitrary(), "days"),
    priority: "HIGH",
    state: "Pending"
  },
  {
    id: createUUID(),
    title: "Task Title",
    desc: "This is task descriptions...",
    dueDate: moment().add(getRandomArbitrary(), "days"),
    createdAt: moment().add(getRandomArbitrary(), "days"),
    priority: "HIGH",
    state: "Pending"
  },
  {
    id: createUUID(),
    title: "Task Title",
    desc: "This is task descriptions...",
    dueDate: moment().add(getRandomArbitrary(), "days"),
    createdAt: moment().add(getRandomArbitrary(), "days"),
    priority: "HIGH",
    state: "Compleated"
  },
  {
    id: createUUID(),
    title: "Task Title",
    desc: "This is task descriptions...",
    dueDate: moment().add(getRandomArbitrary(), "days"),
    createdAt: moment().add(getRandomArbitrary(), "days"),
    priority: "HIGH",
    state: "Compleated"
  },
  {
    id: createUUID(),
    title: "Task Title",
    desc: "This is task descriptions...",
    dueDate: moment().add(getRandomArbitrary(), "days"),
    createdAt: moment().add(getRandomArbitrary(), "days"),
    priority: "HIGH",
    state: "Compleated"
  },
  {
    id: createUUID(),
    title: "Task Title",
    desc: "This is task descriptions...",
    dueDate: moment().add(getRandomArbitrary(), "days"),
    createdAt: moment().add(getRandomArbitrary(), "days"),
    priority: "HIGH",
    state: "Compleated"
  }
]

Object.freeze(DUMMY_TASKS);
export default DUMMY_TASKS;