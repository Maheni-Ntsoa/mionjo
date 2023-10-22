import { Model, DataTypes } from "sequelize";
import { db } from "../../database";

export class PhotoMois extends Model {
  id!: number;
  nomphoto!: string;
  datecreation!: Date;
}

PhotoMois.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nomphoto: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    datecreation: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "photomois",
    sequelize: db.sequelize,
    timestamps: false,
  }
);