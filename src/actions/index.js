export function cartItems(actionType, cartItem) {
  return {
    type: actionType,
    payload: cartItem,
  };
}
