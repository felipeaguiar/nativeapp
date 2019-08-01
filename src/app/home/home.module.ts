import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { TabsComponent } from "./tabs/tabs.component";
import { ChatsComponent } from "./chats/chats.component";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    TabsComponent,
    ChatsComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class HomeModule { }
