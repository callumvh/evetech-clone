import { Component, h } from "@stencil/core";

@Component({
  tag: "side-nav",
  styleUrl: "side-nav.css"
})
export class SideNav {
  render() {
    return [
      <ion-app>
        <ion-split-pane disabled="false" contentId="menu-content">
          <ion-menu
            // maxEdgeStart="200"
            side="end"
            type="push"
            contentId="menu-content"
            swipeGesture="false"
          >
            <ion-content>
              <list-of-routes />
            </ion-content>
          </ion-menu>

          <ion-content id="menu-content">
            <app-root />
          </ion-content>
        </ion-split-pane>
      </ion-app>
    ];
  }
}
