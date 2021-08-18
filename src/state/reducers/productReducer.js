export const productReducer = (state = { product: ["Nike Shoes"] }, action) => {
  console.log("state-------->", state);
  if (action.type === "ADD_PRODUCT") {
    return {
      ...state,
      product: [...action.data, ...state.product],
    };
  }
  if (action.type === "REMOVE_PRODUCT") {
    const newData = state.product.filter((item) => item !== action.data);
    return {
      ...state,
      product: newData,
    };
  }
  return state;
};
