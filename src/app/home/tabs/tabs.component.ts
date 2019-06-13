import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'AppTabs',
  moduleId: module.id,
  templateUrl: './tabs.component.html',
  styleUrls: [ './tabs.component.scss' ]
})
export class TabsComponent implements OnInit {

  selectedIndex: number;

  constructor(
    @Inject('platform') public platform
  ) { }

  ngOnInit() {
    if (this.platform.isAndroid) {
      this.selectedIndex = 1;
    } else {
      this.selectedIndex = 3;
    }
  }

}
