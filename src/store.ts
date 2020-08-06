import { reducer } from 'obake.js';

export const defaultState = {
  youtube: "",
  currentPage: { name: 'HOME' },
  image: null
 }


 export const activePage = {
   "HOME": "/",
 }
export const reducers = {
  updateCurrentPage: reducer((state, value: string) => {
    state.currentPage = { name: value  };
  }),
  updateYoutube: reducer((state, value: string) => {
    state.youtube = value;
  }),
  updateImage: reducer((state, value: string) => {
    state.image = value;
  }),

}
