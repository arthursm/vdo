import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home'; 

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { EnemPage } from '../pages/enem/enem';
import { QuizPage } from '../pages/quiz/quiz';
import { SetupPage } from '../pages/setup/setup';
import { RankPage } from '../pages/rank/rank';
import { InfoPage } from '../pages/info/info';
import { VestibularPage } from '../pages/vestibular/vestibular';
import { EstudosPage } from '../pages/estudos/estudos';
import { ConteudoPage } from '../pages/conteudo/conteudo';
import { MateriasPage } from '../pages/materias/materias';

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    EnemPage,
    QuizPage,
    SetupPage,
    RankPage,
    InfoPage,
    VestibularPage,
    EstudosPage,
    ConteudoPage,
    MateriasPage
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
    RankPage,
    InfoPage,
    VestibularPage,
    EstudosPage,
    ConteudoPage,
    MateriasPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
