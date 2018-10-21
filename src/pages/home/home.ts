import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Item} from './../../app/models/items/item.model';
import { ListService} from '../../app/services/list/list.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {IonicPage} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    list$ : Observable<Item[]> ;
    

  constructor(public navCtrl: NavController , private shopping :ListService) {
    this.list$ = this.shopping.getshoppinglist().snapshotChanges().map(changes => 
    {
      return changes.map(
        c => ({
          key : c.payload.key,...c.payload.val()
        }))
    }
    )
  }

}
