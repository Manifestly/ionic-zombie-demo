import { Component } from '@angular/core';
import { Modal, NavController, Popover } from 'ionic-angular';

import { MyPopover } from '../../components/my-popover/my-popover';
import { MyModal } from '../../components/my-modal/my-modal';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  private text: string = '';

  constructor(private nav: NavController) {
  }

  public showModal(): void {
    let modal: Modal = Modal.create(MyModal);

    // modal.onDismiss(() => {
    //   let loading: Loading = this.presentLoading('Reloading...');

    //   this.load().then(() => {
    //     loading.dismiss();
    //   });
    // });

    this.nav.present(modal);
  }

  public showPopover(event: Event): void {
    let data: any = {
      homePage: this,
    };

    let options: any = { enableBackdropDismiss: true };
    let popover: Popover = Popover.create(MyPopover, data, options);

    this.nav.present(popover, {
      ev: event,
    });
  }
}
