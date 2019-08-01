import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as application from 'tns-core-modules/application';
import * as platform from 'tns-core-modules/platform';

@Component({
  selector: 'AppTabs',
  moduleId: module.id,
  templateUrl: './tabs.component.html',
  styleUrls: [ './tabs.component.scss' ]
})
export class TabsComponent implements OnInit {

  selectedIndex: number;

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.selectedIndex = platform.isAndroid ? 1 : 3

    if (platform.isAndroid) {
      application.android.on(
        application.AndroidApplication.activityBackPressedEvent,
        (args) => {
          if (this.selectedIndex !== 1) {
            this.selectedIndex = 1;
            (args as any).cancel = true;

            this.changeDetectorRef.detectChanges();
          }
        }
      )
    }
  }

}
