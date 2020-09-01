export const CartItems = (items = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const indexOfElement = items.findIndex(
        (key) => key.id === action.payload.id
      );
      const units = 1;
      if (indexOfElement >= 0) {
        const newCart = items.slice();
        const eProduct = newCart[indexOfElement];
        const finalPrice = (eProduct.units + units) * eProduct.price;
        const updatedProduct = {
          ...eProduct,
          units: eProduct.units + units,
          finalPrice: finalPrice,
        };

        newCart[indexOfElement] = updatedProduct;

        return newCart;
      } else {
        return [...items, action.payload];
      }
    case "DECREMENT_FROM_CART":
      const indexDec = items.findIndex((key) => key.id === action.payload.id);
      const unit = 1;
      const newCart = items.slice();
      const eProduct = newCart[indexDec];
      if (eProduct.units > 0) {
        const finalPrice = (eProduct.units - unit) * eProduct.price;
        const updatedProduct = {
          ...eProduct,
          units: eProduct.units - unit,
          finalPrice: finalPrice,
        };
        newCart[indexDec] = updatedProduct;
      }
      return newCart;
    case "REMOVE_FROM_CART":
      const existingCart = items.slice();
      const newCartItems = existingCart.filter(
        (itemKey) => itemKey.id !== action.payload.id
      );
      return newCartItems;

    default:
      return items;
  }
};
