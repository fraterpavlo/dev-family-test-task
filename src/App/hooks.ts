import queryString from "query-string";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// UTILS
export const convertObjToQueryString = (
  queryObject: Record<string, unknown>
): string =>
  queryString.stringify(queryObject, {
    arrayFormat: "bracket",
    skipEmptyString: true,
    skipNull: true,
  });
