import { Model, DataTypes } from 'sequelize';
import { db } from '../../../database';

export class GeneraleC extends Model {
  id!: number;
  idrubrique!: number;
  idcategorie!: number;
  titre!: string | null;
  contenu!: string | null;
  titreen!: string | null;
  contenuen!: string | null;
  datecreation!: Date;
  datelimit!: Date;
  etat!: number;
  nomrubrique!: string | null;
  datecreationrubrique!: Date | null;
  nomcategorie!: string | null;
  datecreationcategorie!: Date | null;
}

GeneraleC.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idrubrique: {
      type: DataTypes.INTEGER,
    },
    idcategorie: {
      type: DataTypes.INTEGER,
    },
    titre: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    contenu: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    titreen: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    contenuen: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    datecreation: {
      type: DataTypes.DATE,
    },
    datelimit: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    etat: {
      type: DataTypes.INTEGER,
    },
    nomrubrique: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    datecreationrubrique: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    nomcategorie: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    datecreationcategorie: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: 'generalec',
    sequelize: db.sequelize,
    timestamps: false,
  },
);
