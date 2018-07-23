import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { QuizPage } from '../quiz/quiz';

/**
 * Generated class for the VestibularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vestibular',
  templateUrl: 'vestibular.html',
})
export class VestibularPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  dados: any = {  
     lc: true, 
     ch: true, 
     ce: true, 
     cn: true 
  }
/*
  linkQuiz() {
    this.navCtrl.push(QuizPage)
    console.log(this.dados)
  }
  */
}
