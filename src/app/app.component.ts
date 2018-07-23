import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';  
import { SetupPage } from '../pages/setup/setup';
import { VestibularPage } from '../pages/vestibular/vestibular';
import { InfoPage } from '../pages/info/info';
import { EstudosPage } from '../pages/estudos/estudos';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    
    this.pages = [
      { title: 'Início', component: HomePage },  
      { title: 'ENEM', component: SetupPage },
      { title: 'Vestibular', component: VestibularPage },
      { title: 'Estudar', component: EstudosPage }, 
      { title: 'FIES', component: InfoPage },
      { title: 'SISU', component: InfoPage },
      { title: 'PROUNI', component: InfoPage }, 
      { title: 'Sobre', component: InfoPage } 
    ];

  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
