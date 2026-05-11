import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../types/Store";

export const useAppDispath = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
