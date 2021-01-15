import { Component, h } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css"
})
export class AppRoot {
  deskTopPcRoutes: any = {
    firstProp: {
      name: "Professional PCs",
      urlName: "/product-cards/Professional-PCs",
      hasChildProp: false
    },
    secondProp: {
      name: "Home & Office PCs",
      urlName: "/product-cards/Home-&-Office-PCs",
      hasChildProp: false
    },
    thirdProp: {
      name: "Workstation PCs",
      urlName: "/product-cards/Workstation-PCs",
      hasChildProp: false
    },
    fourthProp: {
      name: "Mini PCs (PC Sticks)",
      urlName: "/product-cards/mini-pcs",
      hasChildProp: false
    },
    fifthProp: {
      name: "Browse By Price",
      urlName: "/desktop-pcs/browse-by-price",
      hasChildProp: true
    },
    sixthProp: {
      name: "Custom Quote Request",
      urlName: "/product-cards/Custom-Quote-Request",
      hasChildProp: false
    },
    categoryName: {
      name: "Desktop PCs"
    },
    proPCs: {
      firstProp: {
        name: "PCs Under R5,000",
        urlName: "/product-cards/PCs-Under-R5000",
        hasChildProp: false
      },
      secondProp: {
        name: "Between R5,000 to R10,000",
        urlName: "/product-cards/Between-R5000-to-R10000",
        hasChildProp: false
      },
      thirdProp: {
        name: "Between R10,000 to R15,000",
        urlName: "/product-cards/Between-R10000-to-R15000",
        hasChildProp: false
      },
      fourthProp: {
        name: "Between R15,000 to R20,000",
        urlName: "/product-cards/Between-R15000-to-R20000",
        hasChildProp: false
      },
      fifthProp: {
        name: "Above R20,000+",
        urlName: "/product-cards/Above-R20000",
        hasChildProp: false
      },

      categoryName: {
        name: "Browse by price"
      }
    }
  };

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          {/* home route */}
          <ion-route url="/" component="app-home" />
          {/* Desktop PCs tab */}
          <ion-route
            url="/desktop-pcs"
            component="parts-first"
            componentProps={this.deskTopPcRoutes}
          />
          <ion-route url="/desktop-pcs/" component="" />
          <ion-route
            url="/desktop-pcs/browse-by-price"
            component="parts-first"
            componentProps={this.deskTopPcRoutes.proPCs}
          />
          {/* components */}
          <ion-route
            url="/pc-components"
            component="parts-first"
            componentProps={{
              categoryName: {
                name: "Components"
              }
            }}
          />

          {/* gaming pcs tab */}
          <ion-route url="/gaming-pcs" component="parts-first" />
          <ion-route url="/nvidia-pcs" component="parts-first" />
          <ion-route url="/intel-9th-gen" component="parts-first" />
          <ion-route url="/amd-ryzen" component="parts-first" />
          <ion-route url="/intel-core-i9" component="parts-first" />
          <ion-route url="/laptop-deals" component="parts-first" />
          <ion-route url="/pc-workstations" component="parts-first" />
          <ion-route url="/upgrade-kits" component="parts-first" />
          <ion-route url="/profile/:name" component="parts-first" />

          <ion-route url="/product-cards/:category" component="product-cards" />
          {/* <ion-route url="each-product/:product" component="each-product" /> */}
        </ion-router>

        <ion-nav />
      </ion-app>
    );
  }
}
