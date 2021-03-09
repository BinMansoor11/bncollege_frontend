import { addItemToCart, removeItemFromCart } from "../actions/Cart.utils";
import {
  DATA,
  USER,
  UPDATE_USER,
  CAMPUS_STORE,
  CAMPUS,
  CATEGORIES,
  CART,
  DELETECARTITEMS,
  PRODUCT,
  ADDCARTITEM,
  DELETECARTITEM,
  CLEARCART,
  DECREASECARTITEM,
} from "../actions/types";

const initialState = {
  _data: [],
  _user: null,
  _campus_stores: [],
  _campus: {},
  _categories: [],
  _cart: [],
  _products: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DATA:
      return {
        ...state,
        _data: action.payload,
      };
    case USER:
      return {
        ...state,
        _user: action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        _user: { ...state._user, ...action.payload },
      };
    case CAMPUS_STORE:
      return {
        ...state,
        _campus_stores: action.payload,
      };
    case CAMPUS:
      return {
        ...state,
        _campus: action.payload,
      };
    case CATEGORIES:
      return {
        ...state,
        _categories: action.payload,
      };
    // case CART:
    //   if (state._cart.length < 1) {
    //     return {
    //       ...state,
    //       _cart: [action.payload],
    //     };
    //   } else {
    //     return {
    //       ...state,
    //       _cart: [...state._cart, action.payload],
    //     };
    //   }
    // case DELETECARTITEMS:
    //   return {
    //     ...state,
    //     _cart: [],
    //   };
    case PRODUCT:
      return {
        ...state,
        _product: action.payload,
      };
    /////////////

    case ADDCARTITEM:
      return {
        ...state,
        _cart: addItemToCart(state._cart, action.payload),
      };
    case DELETECARTITEM:
      return {
        ...state,
        _cart: removeItemFromCart(state._cart, action.payload),
      };
    case DECREASECARTITEM:
      return {
        ...state,
        _cart: state._cart.filter(
          (cartItem) => cartItem._id !== action.payload._id
        ),
      };
    case CLEARCART:
      return {
        ...state,
        _cart: [],
      };
    ///////////////.......

    default:
      return state;
  }
}
