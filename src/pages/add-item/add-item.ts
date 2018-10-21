import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Item} from './../../app/models/items/item.model';
import { ListService} from '../../app/services/list/list.service';

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  item : Item =  {
    name : '',
    quantity : undefined,
    price :undefined
  };
  constructor(public navCtrl: NavController, public navParams: NavParams , private shopping:ListService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }

  addItem(item:Item){
    this.shopping.addItem(item).then(()=>
    {
      this.navCtrl.setRoot('HomePage');
    });
  }

}
