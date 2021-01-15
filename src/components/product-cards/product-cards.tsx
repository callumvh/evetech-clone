import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "product-cards"
})
export class ProductCards {
  @Prop() category: "string";

  render() {
    return [
      
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
            <ion-title class="evetech">{this.category}</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-grid fixed>
          <ion-row>
            <ion-col>
              <each-product productURL="https://www.dsi-keyboards.com/wp-content/uploads/2015/03/KA-US-20874.jpg" />
            </ion-col>
            <ion-col>
              <each-product productURL="https://www.dsi-keyboards.com/wp-content/uploads/2015/03/KA-US-20874.jpg" />
            </ion-col>
            <ion-col>
              <each-product productURL="https://www.dsi-keyboards.com/wp-content/uploads/2015/03/KA-US-20874.jpg" />
            </ion-col>
            <ion-col>
              <each-product />
            </ion-col>
            <ion-col>
              <each-product />
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    ];
  }
}






































