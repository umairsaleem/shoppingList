import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Item} from './../../app/models/items/item.model';
import { ListService} from '../../app/services/list/list.service';
/**
 * Generated class for the EditListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-list',
  templateUrl: 'edit-list.html',
})
export class EditListPage {

  item :Item;

  constructor(public navCtrl: NavController, public navParams: NavParams,private shopping:ListService) {
  }

  ionViewDidLoad() {
    this.item = this.navParams.get('item');
  }

  saveItem(item:Item){
    this.shopping.editItem(item).then(()=>
  {
    this.navCtrl.setRoot('HomePage');
  });
  }

  removeItem(item:Item){
    this.shopping.removeItem(item).then(()=>
  {
    this.navCtrl.setRoot('HomePage');
  });
  }

}
