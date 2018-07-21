import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SetupPage } from './setup/setup';

/**
 * Generated class for the EnemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enem',
  templateUrl: 'enem.html',
})
export class EnemPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnemPage');
  }

  linkSetup(){
    this.navCtrl.push(SetupPage);
  }

}
