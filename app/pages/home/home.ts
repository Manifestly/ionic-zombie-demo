import { Component } from '@angular/core';
import { Loading, Modal, NavController, Popover } from 'ionic-angular';

import { MyPopover } from '../../components/my-popover/my-popover';
import { MyModal } from '../../components/my-modal/my-modal';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  private text: string = '';

  constructor(private nav: NavController) {
  }

  public showLoading(content: string): Loading {
    let loading: Loading = Loading.create({
      content: content,
    });

    this.nav.present(loading);

    return loading;
  }

  public load(): Promise<any> {
    return new Promise(resolve => {
      let now: Date = new Date();

      resolve({ now: now });
    });
  }

  public showModal(): void {
    let modal: Modal = Modal.create(MyModal);

    modal.onDismiss(() => {
      let loading: Loading = this.showLoading('Reloading...');

      this.load().then((data) => {
        this.text = data.now.toString();

        loading.dismiss();
      });

    });

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
