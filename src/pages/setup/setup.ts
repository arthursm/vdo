import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuizPage } from '../quiz/quiz';
/**
 * Generated class for the SetupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html',
})
export class SetupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  dados: any = {
    ano: { a2018: true, a2017: true, a2016: true, a2000: false },
    conhecimento: { lc: true, ch: true, ce: true, cn: true }
  }

  linkQuiz() {
    this.navCtrl.push(QuizPage)
    console.log(this.dados)
  }
  

}
