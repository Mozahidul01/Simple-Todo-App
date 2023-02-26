import { STATUS_CHANGED, COLOR_CHANGED } from "./actionTypes";

export const statuschanged = (status) => {
  return {
    type: STATUS_CHANGED,
    payload: status,
  };
};

export const colorchanged = (color, changeType) => {
  return {
    type: COLOR_CHANGED,
    payload: { color, changeType },
  };
};
