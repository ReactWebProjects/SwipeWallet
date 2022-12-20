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
                    "color": "#000000"
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
                    "color": "#000000"
                  },
                  "compareAt": {
                    "color": "#000000"
                  },
                  "unitPrice": {
                    "color": "#000000"
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
                    "color": "#000000"
                  },
                  "price": {
                    "font-family": "Helvetica Neue, sans-serif",
                    "font-weight": "normal",
                    "font-size": "16px",
                    "color": "#000000"
                  },
                  "compareAt": {
                    "font-family": "Helvetica Neue, sans-serif",
                    "font-weight": "normal",
                    "font-size": "13.6px",
                    "color": "#000000"
                  },
                  "unitPrice": {
                    "font-family": "Helvetica Neue, sans-serif",
                    "font-weight": "normal",
                    "font-size": "13.6px",
                    "color": "#000000"
                  },
                  "description": {
                    "font-family": "Avant Garde, sans-serif",
                    "color": "#000000"
                  }
                },
                "text": {
                  "button": "Add to cart"
                }
              },
              "modal": {
                "styles": {
                  "modal": {
                    "background-color": "#ffffff",
                    "background-image": "#ffffff"
        
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
                    "color": "#000000"
                  },
                  "header": {
                    "color": "#000000"
                  },
                  "lineItems": {
                    "color": "#000000"
                  },
                  "subtotalText": {
                    "color": "#000000"
                  },
                  "subtotal": {
                    "color": "#000000"
                  },
                  "notice": {
                    "color": "#000000"
                  },
                  "currency": {
                    "color": "#000000"
                  },
                  "close": {
                    "color": "#000000",
                    ":hover": {
                      "color": "#000000"
                    }
                  },
                  "empty": {
                    "color": "#000000"
                  },
                  "noteDescription": {
                    "color": "#000000"
                  },
                  "discountText": {
                    "color": "#000000"
                  },
                  "discountIcon": {
                    "fill": "#000000"
                  },
                  "discountAmount": {
                    "color": "#000000"
                  },
                  "cart": {
                    "background-color": "#ffffff",
                    "background-image": "#ffffff"
        
                  },
                  "footer": {
                    "background-color": "#ffffff",
                    "background-image": "#ffffff"
        
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
                    "background-color": "#ffffff",
                    ":hover": {
                      "background-color": "#ffffff"
                    },
                    ":focus": {
                      "background-color": "#ffffff"
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
                    "color": "#000000"
                  },
                  "title": {
                    "color": "#000000"
                  },
                  "price": {
                    "color": "#000000"
                  },
                  "fullPrice": {
                    "color": "#000000"
                  },
                  "discount": {
                    "color": "#000000"
                  },
                  "discountIcon": {
                    "fill": "#000000"
                  },
                  "quantity": {
                    "color": "#000000"
                  },
                  "quantityIncrement": {
                    "color": "#000000",
                    "border-color": "#000000"
                  },
                  "quantityDecrement": {
                    "color": "#000000",
                    "border-color": "#000000"
                  },
                  "quantityInput": {
                    "color": "#000000",
                    "border-color": "#000000"
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