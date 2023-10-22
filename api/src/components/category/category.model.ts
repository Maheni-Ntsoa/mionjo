import { Model, DataTypes } from "sequelize";
import { db } from "../../database";

export class Category extends Model {
  id!: number;
  nomcategorie!: string;
  datecreation!: Date;
}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nomcategorie: {
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
    tableName: "categories",
    sequelize: db.sequelize,
    timestamps: false,
  }
);