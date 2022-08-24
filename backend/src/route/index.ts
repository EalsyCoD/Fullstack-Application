import express from "express";
import NoteController from "../controller";

const router = express.Router();

router.post("/create", NoteController.create);

router.get("/read", NoteController.readPagination);

router.get("/read/:id", NoteController.readById);

router.put("/update/:id", NoteController.update);

router.delete("/delete/:id", NoteController.delete);

export default router;
