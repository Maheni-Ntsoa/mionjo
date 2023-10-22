import { DataTypes, Model } from "sequelize";
import { db } from "../../database";

export class Document extends Model {
  id!: number;
  idgenerale!: number;
  nomdocument!: string;
  typedocument!: string;
  datecreation!: Date;
}

Document.init(
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
    nomdocument: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    typedocument: {
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
    tableName: "documents",
    sequelize: db.sequelize,
    timestamps: false,
  }
);