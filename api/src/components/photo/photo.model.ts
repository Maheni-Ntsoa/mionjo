import { Model, DataTypes } from "sequelize";
import { db } from "../../database";
import { User } from "../user/user.model";

export class Photo extends Model {
  id!: number;
  idgenerale!: number;
  nomphoto!: string;
  datecreation!: Date;
}

Photo.init(
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
    nomphoto: {
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
    tableName: "photos",
    sequelize: db.sequelize,
    timestamps: false,
  }
);