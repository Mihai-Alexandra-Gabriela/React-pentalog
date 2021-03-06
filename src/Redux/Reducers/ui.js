import {
  SHOW_SPINNER,
  HIDE_SPINNER,
  NEW_MENU_ACTIVE,
  SHOW_DIALOG,
  HIDE_DIALOG,
  UPDATE_CART
} from "../Actions/ui";
import { PRODUCTS_ROUTE, OFFERS_ROUTE } from "./../../Menu/Menu";
import { CURRENT_ORDER } from "./../Actions/ui";

const initUi = {
  pending: false,
  orderInProgress: false,
  currentOrder: null,
  isLoggedIn: true,
  orderIds: [],
  menu: [
    {
      name: "Produse",
      selected: true,
      route: PRODUCTS_ROUTE
    },
    {
      name: "Oferte",
      selected: false,
      route: OFFERS_ROUTE
    },
    {
      name: "Comenzile mele",
      selected: false,
      route: null
    }
  ]
};

export function uiReducer(state = initUi, action) {
  switch (action.type) {
    case SHOW_SPINNER:
      return { ...state, pending: true };

    case HIDE_SPINNER:
      return { ...state, pending: false };

    case NEW_MENU_ACTIVE:
      return { ...state, menu: [...action.payload] };

    case SHOW_DIALOG:
      return { ...state, orderInProgress: true };

    case HIDE_DIALOG:
      return { ...state, orderInProgress: false };

    case CURRENT_ORDER:
      return { ...state, currentOrder: action.payload };
    case UPDATE_CART:
      return { ...state, orderIds: action.payload };
    default:
      return state;
  }
}