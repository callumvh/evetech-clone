import { Component, h } from "@stencil/core";

@Component({
  tag: "list-of-routes"
})
export class ListOfRoutes {
  closeModal() {
    // e.path[19].close();
    let IonMenu = document.querySelector("ion-menu");
    // console.log(IonMenu);
    IonMenu.close();

    // let currentPath = window.location.pathname.substring(1);
    // if (currentPath !== newRoute) {
    //   document
    //     .querySelector("ion-router")
    //     .componentOnReady()
    //     .then(router => {
    //       router.push("/" + newRoute);
    //     });
    // }
    // console.log(currentPath);
    // console.log(newRoute);
  }
  render() {
    return [
      // <ion-list>
      //   <ion-item>
      //     <ion-buttons slot="end">
      //       <ion-menu-button>
      //         <ion-button color="primary" href="/desktop-pcs">
      //           Desktop PCs
      //         </ion-button>
      //       </ion-menu-button>
      //     </ion-buttons>
      //   </ion-item>
      //   <ion-item>
      //     <ion-buttons slot="end">
      //       <ion-menu-button>
      //         <ion-button color="primary" href="/pc-components">
      //           Components
      //         </ion-button>
      //       </ion-menu-button>
      //     </ion-buttons>
      //   </ion-item>
      //   <ion-item>
      //     <ion-buttons slot="end">
      //       <ion-menu-button>
      //         <ion-button color="primary" href="/gaming-pcs">
      //           Gaming PCs
      //         </ion-button>
      //       </ion-menu-button>
      //     </ion-buttons>
      //   </ion-item>
      //   <ion-item>
      //     <ion-buttons slot="end">
      //       <ion-menu-button>
      //         <ion-button color="primary" href="/nvidia-pcs">
      //           NVIDIA PCs
      //         </ion-button>
      //       </ion-menu-button>
      //     </ion-buttons>
      //   </ion-item>
      //   <ion-item>
      //     <ion-buttons slot="end">
      //       <ion-menu-button>
      //         <ion-button color="primary" href="/intel-9th-gen">
      //           Intel 9th Gen
      //         </ion-button>
      //       </ion-menu-button>
      //     </ion-buttons>
      //   </ion-item>
      //   <ion-item>
      //     <ion-buttons slot="end">
      //       <ion-menu-button>
      //         <ion-button color="primary" href="/amd-ryzen">
      //           AMD RYZEN
      //         </ion-button>
      //       </ion-menu-button>
      //     </ion-buttons>
      //   </ion-item>
      //   <ion-item>
      //     <ion-buttons slot="end">
      //       <ion-menu-button>
      //         <ion-button color="primary" href="/intel-core-i9">
      //           Intel Core i9
      //         </ion-button>
      //       </ion-menu-button>
      //     </ion-buttons>
      //   </ion-item>
      //   <ion-item>
      //     <ion-buttons slot="end">
      //       <ion-menu-button>
      //         <ion-button color="primary" href="/laptop-deals">
      //           Laptop Deals
      //         </ion-button>
      //       </ion-menu-button>
      //     </ion-buttons>
      //   </ion-item>
      //   <ion-item>
      //     <ion-buttons slot="end">
      //       <ion-menu-button>
      //         <ion-button color="primary" href="/pc-workstations">
      //           Workstations
      //         </ion-button>
      //       </ion-menu-button>
      //     </ion-buttons>
      //   </ion-item>
      //   <ion-item>
      //     <ion-buttons slot="end">
      //       <ion-menu-button>
      //         <ion-button color="primary" href="/upgrade-kits">
      //           Upgrade Kits
      //         </ion-button>
      //       </ion-menu-button>
      //     </ion-buttons>
      //   </ion-item>
      // </ion-list>
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-grid fixed>
        <ion-list mode="md">
          <ion-item
            onClick={this.closeModal}
            color="tertiary"
            //@ts-ignore
            button="true"
            href="/desktop-pcs"
          >
            <ion-label>Desktop PCs</ion-label>
          </ion-item>
          <ion-item
            onClick={this.closeModal}
            color="tertiary"
            //@ts-ignore
            button="true"
            href="/pc-components"
          >
            <ion-label>Components</ion-label>
          </ion-item>

          {/* <ion-item
            onClick={e => this.closeModal("desktop-pcs", e)}
            color="tertiary"
            button="true"
          />
          <ion-item
            onClick={e => this.closeModal("desktop-pcs", e)}
            color="tertiary"
            button="true"
          />
          <ion-item
            onClick={e => this.closeModal("desktop-pcs", e)}
            color="tertiary"
            button="true"
          />
          <ion-item
            onClick={e => this.closeModal("desktop-pcs", e)}
            color="tertiary"
            button="true"
          />
          <ion-item
            onClick={e => this.closeModal("desktop-pcs", e)}
            color="tertiary"
            button="true"
          />
          <ion-item
            onClick={e => this.closeModal("desktop-pcs", e)}
            color="tertiary"
            button="true"
          />
          <ion-item
            onClick={e => this.closeModal("desktop-pcs", e)}
            color="tertiary"
            button="true"
          />
          <ion-item
            onClick={e => this.closeModal("desktop-pcs", e)}
            color="tertiary"
            button="true"
          />
          <ion-item
            onClick={e => this.closeModal("desktop-pcs", e)}
            color="tertiary"
            button="true"
          />
          <ion-item
            onClick={e => this.closeModal("desktop-pcs", e)}
            color="tertiary"
            button="true"
          />
          <ion-item
            onClick={e => this.closeModal("desktop-pcs", e)}
            color="tertiary"
            button="true"
          /> */}
        </ion-list>
      </ion-grid>
    ];
  }
}
