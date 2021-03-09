import {
  DATA,
  USER,
  UPDATE_USER,
  CAMPUS_STORE,
  CAMPUS,
  CATEGORIES,
  CART,
  PRODUCT,
  ADDCARTITEM,
  DELETECARTITEM,
  DECREASECARTITEM,
  CLEARCART,
} from "./types";

export const getData = (data) => {
  return {
    type: DATA,
    payload: data,
  };
};

export const getUser = (user_data) => {
  return {
    type: USER,
    payload: user_data,
  };
};

export const updateUser = (user_data) => {
  return {
    type: UPDATE_USER,
    payload: user_data,
  };
};

export const getCampusStores = (campus_store_data) => {
  return {
    type: CAMPUS_STORE,
    payload: campus_store_data,
  };
};

export const getCampus = (campus) => {
  return {
    type: CAMPUS,
    payload: campus,
  };
};

export const getCategories = (categories) => {
  return {
    type: CATEGORIES,
    payload: categories,
  };
};

export const getCartItems = (cartItem) => {
  return {
    type: CART,
    payload: cartItem,
  };
};
// export const deleteCartItems = () => {
//   return {
//     type: DELETECARTITEMS,
//   };
// };

export const getProduct = (products) => {
  return {
    type: PRODUCT,
    payload: products,
  };
};

export const addItem = (item) => ({
  type: ADDCARTITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: DECREASECARTITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: DELETECARTITEM,
  payload: item,
});

export const clearCart = () => ({
  type: CLEARCART,
});
