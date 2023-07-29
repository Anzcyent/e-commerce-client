import { getData } from "./request";
import {
  getCategoriesStart,
  getCategoriesSuccess,
  getCategoriesError,
} from "../redux/categorySlice";

export const fetchCategories = () => async (dispatch) => {
  try {
    dispatch(getCategoriesStart());
    const res = await getData("/category");
    dispatch(getCategoriesSuccess(res.data.categories));
  } catch (error) {
    dispatch(getCategoriesError(error.response.data.message));
  }
};
