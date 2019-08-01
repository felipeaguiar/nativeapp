import { Component, OnInit, Input } from '@angular/core';
import { Message } from '~/app/core/model/message';
import { SentStatus } from '~/app/core/model/sent-status';

@Component({
  selector: 'AppMessagesArea',
  templateUrl: 'messages-area.component.html',
  styleUrls: [ 'messages-area.component.scss' ]
})

export class MessagesAreaComponent implements OnInit {
  @Input() public messages: Message[];

  ngOnInit() {
    this.messages = this.messages.slice(0,50);
  }

  ngAfterViewInit() {
  }

  isContinuation(idx: number) {
    return (!this.messages[idx].sender && this.messages[idx-1] &&
            !this.messages[idx-1].sender) ||
           (this.messages[idx].sender && this.messages[idx-1] &&
            this.messages[idx-1].sender);
  }

  getIcon(message: Message) {
    switch (message.sent) {
      case SentStatus.NOT_SENT:
        return 'mdi-access-time';
      case SentStatus.SENT:
        return 'mdi-done';
      default:
        return 'mdi-done-all';
    }
  }

  isViewed(message: Message) {
    return message.sent === SentStatus.VIEWED;
  }
}
