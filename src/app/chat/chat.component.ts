import { Component, OnInit, inject, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../core/chats.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { Chat } from '../core/model/chat.model';
import * as platform from 'tns-core-modules/platform';
import { Message } from '../core/model/message';

@Component({
  selector: 'AppChat',
  moduleId: module.id,
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  index?: number;
  chat?: Chat;
  unread?: number;
  messages: Message[]

  constructor(
    private chatService: ChatService,
    private route: ActivatedRoute,
    private router: RouterExtensions,
  ) { }

  ngOnInit(): void {
    const index = this.route.snapshot.paramMap.get('index');
    if (index) {
      this.index = +index;
      this.chat = this.chatService.chats[this.index];
    }

    const unread = this.route.snapshot.queryParamMap.get('unread');
    if (unread) {
      this.unread = +unread;
    }

    this.messages = this.chatService.getMessages(this.chat);
  }

  get platform() {
    return platform;
  }

  goBack() {
    this.router.back();
  }
}
