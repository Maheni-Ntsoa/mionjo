import { Model, DataTypes } from "sequelize";
import { db } from "../../database";

export class Baniere extends Model {
  public id!: number;
  public nomBaniere!: string;
  public datecreation!: Date;
}
Baniere.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  nomBaniere: {
    type: new DataTypes.STRING(150),
    allowNull: false,
  },
  datecreation: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
},
  {
    tableName: "bannieres",
    sequelize: db.sequelize,
    timestamps: false,
  }
);