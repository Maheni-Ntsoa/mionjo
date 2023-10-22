import { DataTypes, Model } from "sequelize";
import { db } from "../../database";
import { TEXT } from "sequelize";

export class Rubrique extends Model {
  id!: number;
  nomrubrique!: string;
  datecreation!: Date;
  resume!: string;
}

Rubrique.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nomrubrique: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    datecreation: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    resume: {
      type: TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "rubriques",
    sequelize: db.sequelize,
    timestamps: false,
  }
);