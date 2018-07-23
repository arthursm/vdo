import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {

  ciencia: any;
  eu: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ciencia = navParams.get('data');
    this.eu = navParams.get('adata');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizPage');
  }

  carro  = {
    "nome":"John",
    "age":30,
    "cars":[ "Ford", "BMW", "Fiat" ]
    }

    
}
