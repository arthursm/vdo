import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home'; 

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { EnemPage } from '../pages/enem/enem';
import { QuizPage } from '../pages/enem/quiz/quiz';
import { SetupPage } from '../pages/enem/setup/setup';
import { RankPage } from '../pages/enem/rank/rank';

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    EnemPage,
    QuizPage,
    SetupPage,
    RankPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    EnemPage,
    QuizPage,
    SetupPage,
    RankPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
