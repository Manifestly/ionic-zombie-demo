import { Component } from '@angular/core';

import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'my-popover',
  templateUrl: 'build/components/my-popover/my-popover.html'
})
export class MyPopover {
  private homePage: any;

  constructor(private navParams: NavParams, private view: ViewController) {
    this.homePage = navParams.data.homePage;
  }

  public showModal(): void {
    this.view.dismiss();
    this.homePage.showModal();
  }
}
