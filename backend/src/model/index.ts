import { Model, DataTypes } from "sequelize";
import db from "../config/database.config";

interface NotesTypes {
  id: string;
  title: string;
  description: number;
  date: string;
}

export class NotesInstance extends Model<NotesTypes> {}

NotesInstance.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "notes",
  }
);
