import { action } from "typesafe-actions";
import { PosterTypes, Poster } from './types';

export const loadRequest = () => action(PosterTypes.LOAD_REQUEST);

export const loadSucess = (data: Poster[]) => action(PosterTypes.LOAD_SUCESS, data);

export const loadFailure = () => action(PosterTypes.LOAD_FAILURE);