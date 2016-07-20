import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

@Component({
  selector: 'my-modal',
  templateUrl: 'build/components/my-modal/my-modal.html'
})
export class MyModal {
  constructor(private view: ViewController) {
  }

  public dismiss(): void {
    this.view.dismiss();
  }
}
