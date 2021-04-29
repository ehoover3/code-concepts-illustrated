import create from "zustand";
import { devtools, redux } from "zustand/middleware";

const initialState = {
  count: 0,
  myBoolean: true,
  about: "This message is in the initial state of the store",
};

export const COUNT = "COUNT";
export const MY_BOOLEAN = "MY_BOOLEAN";
export const ABOUT = "ABOUT";

const reducer = (state, action) => {
  switch (action.type) {
    case COUNT:
      return { count: action.payload };

    case MY_BOOLEAN:
      return { myBoolean: action.payload };

    case ABOUT:
      return { about: action.payload };

    default:
      return state;
  }
};

export const useStore = create(devtools(redux(reducer, initialState)));
