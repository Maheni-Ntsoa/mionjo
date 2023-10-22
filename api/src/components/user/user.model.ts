import { Model, DataTypes } from "sequelize";
import { db } from "../../database";
import bcrypt from "bcrypt";
import { Role } from "../role/role.model";

export class User extends Model {
  public id!: number;
  public idrole!: number;
  public email!: string;
  public mdp!: string;
  public datecreation!: Date;
  public etat!: number;
}
User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  idrole: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  email: {
    type: new DataTypes.STRING(150),
    allowNull: false,
    unique: true,
  },
  mdp: {
    type: new DataTypes.STRING(150),
    allowNull: false,
  },
  datecreation: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  etat: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0
  }
},
  {
    tableName: "users",
    sequelize: db.sequelize,
    timestamps: false,
  }
);

User.beforeCreate(async (user) => {
  user.mdp = await bcrypt.hash(user.mdp, 10);
});

User.beforeUpdate(async (user) => {
  user.mdp = await bcrypt.hash(user.mdp, 10);
});