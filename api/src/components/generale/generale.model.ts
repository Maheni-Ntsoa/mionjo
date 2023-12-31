import { DataTypes, Model } from 'sequelize';
import { db } from '../../database';

export class Generale extends Model {
  id!: number;
  idrubrique!: number;
  idcategorie!: number;
  titre!: string | null;
  contenu!: string | null;
  titreen!: string | null;
  contenuen!: string | null;
  titremg!: string | null;
  contenumg!: string | null;
  datecreation!: Date;
  datelimit!: Date;
  etat!: number;
  etatannonce!: number;
  nbdownnational!: number | null;
  nbdowninter!: number | null;
  titulairemarche!: string | null;
  montantmarche!: string | null;
}

Generale.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idrubrique: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idcategorie: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    titremg: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    contenumg: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    datecreation: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    datelimit: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    etat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    etatannonce: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    nbdownnational: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    nbdowninter: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    titulairemarche: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    montantmarche: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
  },
  {
    tableName: 'generales',
    sequelize: db.sequelize,
    timestamps: false,
    indexes: [
      {
        unique: false,
        fields: ['titre', 'id'],
        name: 'idx_generales',
      },
    ],
  },
);
