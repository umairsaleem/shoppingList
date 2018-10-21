import { Injectable} from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import {Item} from '../../models/items/item.model'
@Injectable()
export class ListService{

    private ListRef = this.db.list<Item>('Shoppping-list');
    constructor(private db:AngularFireDatabase ){}

    getshoppinglist(){
        return this.ListRef;
    }

    addItem(item:Item){
        return this.ListRef.push(item);
    }

    editItem(item:Item){
        return this.ListRef.update(item.key,item);
    }
    
    removeItem(item:Item){
        return this.ListRef.remove(item.key);
    }
} 