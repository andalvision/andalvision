import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  top_item_array = ["Item A", "Item B", "Item C","Item A1", "Item B1", "Item C1"]
    bottom_item_array = ["Item D", "Item E", "Item F","Item D1", "Item E1", "Item F1"]

    constructor(){
    }

    move_from_top_to_bottom(idx){
      this.bottom_item_array.push(this.top_item_array[idx])
      this.top_item_array.splice(idx, 1)
    }

    move_from_bottom_to_top(idx){
      this.top_item_array.push(this.bottom_item_array[idx])
      this.bottom_item_array.splice(idx, 1)
    }
}


