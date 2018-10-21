import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';

import { MyApp } from './app.component';

import { AddItemPage } from '../pages/add-item/add-item';
import { ListService} from '../app/services/list/list.service'

export const firebase_config = {
  apiKey: "AIzaSyCPyDeXn23bjgJJ7o5KnlwE1fa3NUSORo8",
  authDomain: "shopping-list-cfd1b.firebaseapp.com",
  databaseURL: "https://shopping-list-cfd1b.firebaseio.com",
  projectId: "shopping-list-cfd1b",
  storageBucket: "",
  messagingSenderId: "832830942140"
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebase_config),
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
