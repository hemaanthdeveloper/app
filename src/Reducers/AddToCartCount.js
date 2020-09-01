export const AddToCartCount = (count = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return count + 1;
    case "DECREMENT":
      if (count <= 0) {
        return count;
      } else {
        return count - 1;
      }

    default:
      return count;
  }
};
