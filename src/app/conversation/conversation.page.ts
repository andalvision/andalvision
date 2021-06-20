import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.scss'],
})
export class ConversationPage implements OnInit {

  constructor(public afDB: AngularFireDatabase) {}
  add() {
    this.afDB.list('User/').push({
      pseudo: 'MOKOKO'
    });
  }

  ngOnInit() {
  }

}
