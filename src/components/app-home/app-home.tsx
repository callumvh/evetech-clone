import { Component, h } from "@stencil/core";

@Component({
  tag: "app-home"
})
export class AppHome {
  render() {
    return (
      <ion-content>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-buttons slot="end">
              <ion-menu-button />
            </ion-buttons>
            <ion-buttons slot="start">
              <ion-button>
                <ion-icon name="cart" />
              </ion-button>
            </ion-buttons>
            <ion-title class="evetech">Home</ion-title>
          </ion-toolbar>
        </ion-header>
      </ion-content>
    );
  }
}
