import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { MessagesAreaComponent } from './messages-area/messages-area.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    ChatRoutingModule
  ],
  declarations: [
    ChatComponent,
    MessageBoxComponent,
    MessagesAreaComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class ChatModule { }
