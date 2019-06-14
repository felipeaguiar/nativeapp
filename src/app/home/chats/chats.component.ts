import { Component, OnInit } from '@angular/core';
import { ChatService } from './chats.service';

@Component({
  selector: 'AppChats',
  templateUrl: './chats.component.html',
  styleUrls: [ './chats.component.scss' ]
})

export class ChatsComponent implements OnInit {

  chats = [];

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit() {
    this.chats = this.chatService.chats;
  }
}
