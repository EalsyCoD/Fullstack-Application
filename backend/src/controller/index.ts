import express, { Request, Response } from "express";
import { matchSorter } from "match-sorter";
import { WhereOptions } from "sequelize/types";
import { v4 as uuidv4 } from "uuid";
import { Notes, NotesInstance } from "../model";

class NoteController {
  async create(req: Request, res: Response) {
    const id = uuidv4();
    console.log(req.body);
    try {
      const record = await NotesInstance.create({ ...req.body, id });
      return res.json({ record, msg: "Succesfully create note" });
    } catch (err) {
      return res.json({
        msg: "faile to create",
        status: 500,
        route: "/create",
      });
    }
  }
  async readPagination(req: Request, res: Response) {
    try {
      const limit = req.query?.limit as number | undefined;
      const offset = req.query?.offset as number | undefined;

      const records = await NotesInstance.findAll({
        where: {} as WhereOptions,
        limit,
        offset,
      });
      return res.json(records);
    } catch (err) {
      return res.json({ msg: "faile to read", status: 500, route: "/read" });
    }
  }
  async getSort(req: Request, res: Response) {
    try {
      const order = req.query.order as any;
      const records = await NotesInstance.findAll({
        where: {} as WhereOptions,
      });
      if (order === "asc") {
        const arr = records.sort((a: any, b: any) =>
          a.createdAt > b.createdAt ? 1 : -1
        );
        return res.json(arr);
      } else if (order === "dsc") {
        const arr = records.sort((a: any, b: any) =>
          a.createdAt < b.createdAt ? 1 : -1
        );
        return res.json(arr);
      }
    } catch (err) {
      return res.json({ msg: "faile to read", status: 500, route: "/getsort" });
    }
  }
  async readById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await NotesInstance.findOne({
        where: { id } as WhereOptions,
      });
      return res.json(result);
    } catch (err) {
      return res.json({
        msg: "faile to read",
        status: 500,
        route: "/read/:id",
      });
    }
  }
  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await NotesInstance.findOne({
        where: { id } as WhereOptions,
      });
      if (!result) {
        return res.json({ msg: "Can not find existing record" });
      }

      const updatedRecord = await result.update({
        date: result.getDataValue("date"),
      });
      return res.json({ updatedRecord });
    } catch (err) {
      return res.json({
        msg: "faile to read",
        status: 500,
        route: "/update/:id",
      });
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const record = await NotesInstance.findOne({
        where: { id } as WhereOptions,
      });
      if (!record) {
        return res.json({ msg: "Can not find existing record" });
      }

      const deleteRecord = await record.destroy();
      return res.json({ record: deleteRecord });
    } catch (err) {
      return res.json({
        msg: "faile to read",
        status: 500,
        route: "/delete/:id",
      });
    }
  }
}

export default new NoteController();
