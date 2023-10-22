import { Model, DataTypes } from "sequelize";
import { db } from "../../database";
import { TEXT } from "sequelize";

export class IdeeRecu extends Model {
  id!: number;
  contenu!: string;
  descriptif!: string;
  datecreation!: Date;
}

IdeeRecu.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    contenu: {
      type: TEXT,
      allowNull: false,
    },
    descriptif: {
      type: TEXT,
      allowNull: true,
    },
    datecreation: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "ideerecus",
    sequelize: db.sequelize,
    timestamps: false,
  }
);