import { Model, DataTypes } from "sequelize";
import { db } from "../../../database";

export class Userc extends Model {
    public id!: number;
    public idrole!: number;
    public nomrole!: string;
    public email!: string;
    public mdp!: string;
    public datecreation!: Date;
    public etat!: number;
}
Userc.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    idrole: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    nomrole: {
        type: new DataTypes.STRING(150),
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
        tableName: "userc",
        sequelize: db.sequelize,
        timestamps: false,
    }
);