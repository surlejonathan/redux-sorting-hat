import { UPDATE_CHOICE_WITH_MY_INDEX } from "./resultTypes";

const houses = ["Serpentard", "Griffondor", "Serdaigle", "Pouffsoufle"];

const initialState = {
  houses,
  selectedHouses: houses[Math.floor(Math.random() * houses.length)],
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CHOICE_WITH_MY_INDEX:
      return {
        ...state,
        selectedHouses: houses[action.indexSelected],
      };
    default:
      return state;
  }
};

export default resultReducer;
