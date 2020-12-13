import { UPDATE_CHOICE_WITH_MY_INDEX } from "./resultTypes";

export const updateChoice = () => {
  return {
    type: UPDATE_CHOICE_WITH_MY_INDEX,
    indexSelected: Math.floor(Math.random() * 4),
  };
};
