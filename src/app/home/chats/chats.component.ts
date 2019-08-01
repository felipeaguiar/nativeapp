import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../core/chats.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'AppChats',
  templateUrl: './chats.component.html',
  styleUrls: [ './chats.component.scss' ]
})

export class ChatsComponent implements OnInit {

  chats = [];

  constructor(
    private chatService: ChatService,
    private router: RouterExtensions
  ) { }

  ngOnInit() {
    this.chats = this.chatService.chats;
  }

  onItemTap(event) {
    const extras: NavigationExtras = {
      queryParams: {
        unread: 2
      }
    }

    this.router.navigate(['/chat', event.index], extras);
  }
}
