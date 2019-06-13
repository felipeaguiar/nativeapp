import { Component, OnInit, Inject } from "@angular/core";

@Component({
  selector: "Home",
  moduleId: module.id,
  templateUrl: "./home.component.html",
  styleUrls: [ "./home.component.scss" ]
})
export class HomeComponent implements OnInit {

  constructor(
    @Inject('platform') public platform
  ) { }

  ngOnInit(): void {
    // Init your component properties here.
  }

}
