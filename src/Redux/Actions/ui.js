export const SHOW_SPINNER = "[ui] show spinner";
export const HIDE_SPINNER = "[ui] hide spinner";
export const MENU_CHANGED = "[ui] menu changed";
export const NEW_MENU_ACTIVE = "[ui] new menu active";
export const SEARCH_TRIGGERED = "[ui] search event";
export const SHOW_ORDER_DIALOG = "[ui] show order dialog";
export const HIDE_DIALOG = "[ui] hide dialog";
export const SHOW_DIALOG = "[ui] show dialog";
export const CURRENT_ORDER = "[ui] set current order";
export const CONFIRM_ADD_TO_CART = "[ui] confirm add to cart";
export const UPDATE_CART = "[ui] update cart";

export const showSpinner = () => ({
  type: SHOW_SPINNER
});

export const hideSpinner = () => ({
  type: HIDE_SPINNER
});

export const menuClicked = route => ({
  type: MENU_CHANGED,
  payload: route
});

export const newMenuActive = data => ({
  type: NEW_MENU_ACTIVE,
  payload: data
});

export const createSearchAction = searchParam => ({
  type: SEARCH_TRIGGERED,
  payload: searchParam
});

export const showOrderDialog = (id, value) => ({
  type: SHOW_ORDER_DIALOG,
  payload: { id, value }
});

export const showDialog = () => ({
  type: SHOW_DIALOG
});

export const hideDialog = () => ({
  type: HIDE_DIALOG
});

export const setCurrentOrder = order => ({
  type: CURRENT_ORDER,
  payload: order
});

export const confirmAddToCart = () => ({
  type: CONFIRM_ADD_TO_CART
});

export const updateCart = orderIds => ({
  type: UPDATE_CART,
  payload: orderIds
});