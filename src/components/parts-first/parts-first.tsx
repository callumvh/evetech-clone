import { Component, h, Prop } from "@stencil/core";
export interface shapeCategory {
  name: string;
  urlName: string;
  hasChildProp: boolean;
  child: object;
}
@Component({
  tag: "parts-first"
})
export class AppProfile {
  @Prop() firstProp: shapeCategory;
  @Prop() secondProp: shapeCategory;
  @Prop() thirdProp: shapeCategory;
  @Prop() fourthProp: shapeCategory;
  @Prop() fifthProp: shapeCategory;
  @Prop() sixthProp: shapeCategory;
  @Prop() categoryName: shapeCategory;
  @Prop() nonExistant: string;
 
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
            <ion-title class="evetech">{this.categoryName.name}</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-grid fixed>
          <ion-list>
            {this.firstProp ? (
              <ion-item
                href={this.firstProp.urlName}
                color="secondary"
                button="true"
                detail="true"
              >
                {this.firstProp.name}
              </ion-item>
            ) : (
              undefined
            )}
            {this.secondProp ? (
              <ion-item
                href={this.secondProp.urlName}
                color="secondary"
                button="true"
                detail="true"
              >
                {this.secondProp.name}
              </ion-item>
            ) : (
              undefined
            )}
            {this.thirdProp ? (
              <ion-item
                href={this.thirdProp.urlName}
                color="secondary"
                button="true"
                detail="true"
              >
                {this.thirdProp.name}
              </ion-item>
            ) : (
              undefined
            )}
            {this.fourthProp ? (
              <ion-item
                href={this.fourthProp.urlName}
                color="secondary"
                button="true"
                detail="true"
              >
                {this.fourthProp.name}
              </ion-item>
            ) : (
              undefined
            )}
            {this.fifthProp ? (
              <ion-item
                href={this.fifthProp.urlName}
                color="secondary"
                button="true"
                detail="true"
              >
                {this.fifthProp.name}
              </ion-item>
            ) : (
              undefined
            )}
            {this.sixthProp ? (
              <ion-item
                href={this.sixthProp.urlName}
                color="secondary"
                button="true"
                detail="true"
              >
                {this.sixthProp.name}
              </ion-item>
            ) : (
              undefined
            )}
          </ion-list>
        </ion-grid>
      </ion-content>
    ];
  }
}
