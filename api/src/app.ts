import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import multer from 'multer';
import bodyParser from 'body-parser';

var path = require('path');

// router
import UserRouter from './components/user/user.routes';
import CategoryRouter from './components/category/category.routes';
import RoleRouter from './components/role/role.routes';
import BanniereRouter from './components/baniere/baniere.routes';
import VideoRouter from './components/video/video.routes';
import PhotoRouter from './components/photo/photo.routes';
import PhotoMoisRouter from './components/photoMois/photoMois.routes';
import DocumentRouter from './components/document/document.routes';
import RubriqueRouter from './components/rubrique/rubrique.routes';
import GeneraleRouter from './components/generale/generale.routes';
import IdeeRouter from './components/ideerecu/ideerecu.routes';
import MailRouter from './components/mailing/mail.routes';
import UserCRouter from './components/views/userc/userc.routes';
import GeneraleCRouter from './components/views/generalec/generalec.routes';

export class App {
  private app: Application;

  private corsOptions = {
    origin: ['*', 'http://localhost:3000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 200,
  };

  constructor(private port?: number | string) {
    this.app = express();
    this.setting();
    this.middlewares();
    this.routes();
  }

  setting() {
    this.app.set('port', this.port || process.env.PORT || 3000);
  }

  middlewares() {
    this.app.use(express.static(path.join(__dirname, '../public')));
    this.app.use(morgan('dev'));
    this.app.use(cors(this.corsOptions));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  async listen() {
    this.app.listen(this.app.get('port'));
    console.log('Server on port', this.app.get('port'));
  }

  routes() {
    this.app.use('/user', UserRouter);
    this.app.use('/role', RoleRouter);
    this.app.use('/baniere', BanniereRouter);
    this.app.use('/category', CategoryRouter);
    this.app.use('/video', VideoRouter);
    this.app.use('/photo', PhotoRouter);
    this.app.use('/photoMois', PhotoMoisRouter);
    this.app.use('/document', DocumentRouter);
    this.app.use('/rubrique', RubriqueRouter);
    this.app.use('/generale', GeneraleRouter);
    this.app.use('/idee', IdeeRouter);
    this.app.use('/mail', MailRouter);
    // Views for select
    this.app.use('/userc', UserCRouter);
    this.app.use('/generalec', GeneraleCRouter);
  }
}
