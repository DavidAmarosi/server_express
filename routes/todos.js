import express from "express";
import { createTodo, deleteTodo, getTodo, getTodos, updateTodo } from "../controllers/todos.js";

const router = express.Router()

router.delete("/:id", deleteTodo)
router.get("/:id", getTodo)
router.get("/", getTodos)
router.put("/:id", updateTodo)
router.post("/", createTodo)
export default router

