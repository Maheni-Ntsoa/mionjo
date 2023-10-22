import { Model, DataTypes } from "sequelize";
import { db } from "../../database";
import { User } from "../user/user.model";

export class Role extends Model {
  public id!: number;
  public nomrole!: string;
  public datecreation!: Date;
}
Role.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  nomrole: {
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
    tableName: "roles",
    sequelize: db.sequelize,
    timestamps: false,
  }
);