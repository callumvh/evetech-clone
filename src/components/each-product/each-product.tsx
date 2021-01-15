import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "each-product"
})
export class EachProduct {
  @Prop() productURL: string;
  render() {
    return [
      
      <ion-card color="secondary">
        
        <ion-item padding>
          <ion-icon name="pin" slot="start" />
          <ion-label>ion-item in a card, icon left, button right</ion-label>
          <ion-button fill="outline" slot="end">
            View
          </ion-button>
        </ion-item>

        <ion-card-content>
        <ion-img src={this.productURL} >
          
        </ion-img>
          This is content, without any paragraph or header tags, within an
          ion-card-content element.
        </ion-card-content>
      </ion-card>
    ];
  }
}
