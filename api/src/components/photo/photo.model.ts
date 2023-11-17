import { DataTypes, Model } from 'sequelize';
import { db } from '../../database';

export class Photo extends Model {
  id!: number;
  idgenerale!: number;
  nomphoto!: string;
  datecreation!: Date;
  evenement!: string;
  etat!: number;
}

Photo.init(
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
    nomphoto: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    datecreation: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    evenement: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    etat: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
  },
  {
    tableName: 'photos',
    sequelize: db.sequelize,
    timestamps: false,
  },
);
