import { Model, DataTypes } from "sequelize";
import { db } from "../../database";
import { User } from "../user/user.model";

export class Video extends Model {
  id!: number;
  idgenerale!: number;
  nomvideo!: string;
  datecreation!: Date;
}

Video.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idgenerale: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    nomvideo: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    datecreation: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "videos",
    sequelize: db.sequelize,
    timestamps: false,
  }
);