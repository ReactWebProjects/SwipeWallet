import { useEffect } from 'react';
import ShopifyBuy from '@shopify/buy-button-js';

const shopifyClient = ShopifyBuy.buildClient({
      domain: 'c442212.myshopify.com',
      storefrontAccessToken: 'b1b1984d7a821da4830a754cdb3bf09a',
});

const ui = ShopifyBuy.UI.init(shopifyClient);

export default function BuyButton({ idNum }) {
    ui.onReady(client).then(function (ui) {
        ui.createComponent('product', {
          id: '7970174533932',
            variantId: '43660243730732',
          node: document.getElementById('product-component-1670716665295'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
    "product": {
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "calc(25% - 20px)",
            "margin-left": "20px",
            "margin-bottom": "50px"
          }
        },
        "button": {
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px",
          ":hover": {
            "background-color": "#3575dd"
          },
          "background-color": "#3b82f6",
          ":focus": {
            "background-color": "#3575dd"
          },
          "border-radius": "13px",
          "padding-left": "32px",
          "padding-right": "32px"
        },
        "quantityInput": {
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px"
        }
      },
      "contents": {
        "img": false,
        "title": false,
        "price": false,
        "options": false
      },
      "text": {
        "button": "Buy"
      },
      "variantId": "43660243730732"
    },
    "productSet": {
      "styles": {
        "products": {
          "@media (min-width: 601px)": {
            "margin-left": "-20px"
          }
        }
      }
    },
    "modalProduct": {
      "contents": {
        "img": false,
        "imgWithCarousel": true,
        "button": false,
        "buttonWithQuantity": true
      },
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "100%",
            "margin-left": "0px",
            "margin-bottom": "0px"
          }
        },
        "button": {
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px",
          ":hover": {
            "background-color": "#3575dd"
          },
          "background-color": "#3b82f6",
          ":focus": {
            "background-color": "#3575dd"
          },
          "border-radius": "13px",
          "padding-left": "32px",
          "padding-right": "32px"
        },
        "quantityInput": {
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px"
        }
      },
      "text": {
        "button": "Add to cart"
      }
    },
    "option": {},
    "cart": {
      "styles": {
        "button": {
          "font-size": "13px",
          "padding-top": "14.5px",
          "padding-bottom": "14.5px",
          ":hover": {
            "background-color": "#3575dd"
          },
          "background-color": "#3b82f6",
          ":focus": {
            "background-color": "#3575dd"
          },
          "border-radius": "13px"
        }
      },
      "text": {
        "total": "Subtotal",
        "button": "Checkout"
      }
    },
    "toggle": {
      "styles": {
        "toggle": {
          "background-color": "#3b82f6",
          ":hover": {
            "background-color": "#3575dd"
          },
          ":focus": {
            "background-color": "#3575dd"
          }
        },
        "count": {
          "font-size": "13px"
        }
      }
    }
  },
        });
      });
    // return <div id='product-component-1670715223484' class="fixed top-0 right-0"></div>
    return <div></div>;
}