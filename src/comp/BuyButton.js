import React, { useEffect } from 'react'
import ShopifyBuy from '@shopify/buy-button-js';

function BuyButton({idNum, varId, compNum}) {
    var client = ShopifyBuy.buildClient({
        domain: 'c442212.myshopify.com',
        storefrontAccessToken: 'b1b1984d7a821da4830a754cdb3bf09a',
      });
    var ui = ShopifyBuy.UI.init(client);
    useEffect(() => {
        console.log("SDFDS")
        ui.createComponent('product', {
            id: idNum,
            node: document.getElementById(`product-component-${compNum}`),
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
                  "title": {
                    "color": "#ffffff"
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
                  },
                  "price": {
                    "color": "#ffffff"
                  },
                  "compareAt": {
                    "color": "#ffffff"
                  },
                  "unitPrice": {
                    "color": "#ffffff"
                  }
                },
                "buttonDestination": "modal",
                "contents": {
                  "options": false
                },
                "text": {
                  "button": "Buy"
                }
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
                  },
                  "title": {
                    "font-family": "Helvetica Neue, sans-serif",
                    "font-weight": "bold",
                    "font-size": "28px",
                    "color": "#ffffff"
                  },
                  "price": {
                    "font-family": "Helvetica Neue, sans-serif",
                    "font-weight": "normal",
                    "font-size": "16px",
                    "color": "#ffffff"
                  },
                  "compareAt": {
                    "font-family": "Helvetica Neue, sans-serif",
                    "font-weight": "normal",
                    "font-size": "13.6px",
                    "color": "#ffffff"
                  },
                  "unitPrice": {
                    "font-family": "Helvetica Neue, sans-serif",
                    "font-weight": "normal",
                    "font-size": "13.6px",
                    "color": "#ffffff"
                  },
                  "description": {
                    "font-family": "Avant Garde, sans-serif",
                    "color": "#ffffff"
                  }
                },
                "text": {
                  "button": "Add to cart"
                }
              },
              "modal": {
                "styles": {
                  "modal": {
                    "background-color": "#120042",
                    "background-image": "linear-gradient(#060620, #020014)"
        
                  }
                }
              },
              "option": {
                "styles": {
                  "label": {
                    "font-family": "Avant Garde, sans-serif"
                  },
                  "select": {
                    "font-family": "Avant Garde, sans-serif"
                  }
                }
              },
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
                  },
                  "title": {
                    "color": "#ffffff"
                  },
                  "header": {
                    "color": "#ffffff"
                  },
                  "lineItems": {
                    "color": "#ffffff"
                  },
                  "subtotalText": {
                    "color": "#ffffff"
                  },
                  "subtotal": {
                    "color": "#ffffff"
                  },
                  "notice": {
                    "color": "#ffffff"
                  },
                  "currency": {
                    "color": "#ffffff"
                  },
                  "close": {
                    "color": "#ffffff",
                    ":hover": {
                      "color": "#ffffff"
                    }
                  },
                  "empty": {
                    "color": "#ffffff"
                  },
                  "noteDescription": {
                    "color": "#ffffff"
                  },
                  "discountText": {
                    "color": "#ffffff"
                  },
                  "discountIcon": {
                    "fill": "#ffffff"
                  },
                  "discountAmount": {
                    "color": "#ffffff"
                  },
                  "cart": {
                    "background-color": "#120042",
                    "background-image": "linear-gradient(#060620, #020014)"
        
                  },
                  "footer": {
                    "background-color": "#120042",
                    "background-image": "linear-gradient(#060620, #020014)"
        
                  }
                },
                "text": {
                  "total": "Subtotal",
                  "button": "Checkout"
                },
                "popup": false
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
              },
              "lineItem": {
                "styles": {
                  "variantTitle": {
                    "color": "#ffffff"
                  },
                  "title": {
                    "color": "#ffffff"
                  },
                  "price": {
                    "color": "#ffffff"
                  },
                  "fullPrice": {
                    "color": "#ffffff"
                  },
                  "discount": {
                    "color": "#ffffff"
                  },
                  "discountIcon": {
                    "fill": "#ffffff"
                  },
                  "quantity": {
                    "color": "#ffffff"
                  },
                  "quantityIncrement": {
                    "color": "#ffffff",
                    "border-color": "#ffffff"
                  },
                  "quantityDecrement": {
                    "color": "#ffffff",
                    "border-color": "#ffffff"
                  },
                  "quantityInput": {
                    "color": "#ffffff",
                    "border-color": "#ffffff"
                  }
                }
              }
            },
    })
},[])
      return (
        <div id={`product-component-${compNum}`} class=""></div>
      )
}

export default BuyButton