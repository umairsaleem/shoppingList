import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddItemPage } from './add-item';
import { HomePage} from '../home/home';

@NgModule({
  declarations: [
    AddItemPage
    
  ],
  imports: [
    IonicPageModule.forChild(AddItemPage),
  ],
})
export class AddItemPageModule {}
