import { Component, OnInit } from "@angular/core";
import * as platform from 'tns-core-modules/platform';

@Component({
  selector: "Home",
  moduleId: module.id,
  templateUrl: "./home.component.html",
  styleUrls: [ "./home.component.scss" ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  get platform() {
    return platform;
  }

}
