import { reducer } from 'obake.js';

export const defaultState = {
  youtube: "",
  track: "",
  trackCover: null,
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
  updateTrack: reducer((state, value: string) => {
    state.track = value;
  }),
  updateTrackCover: reducer((state, value: string) => {
    state.trackCover = value;
  }),
  updateImage: reducer((state, value: string) => {
    state.image = value;
  }),

}
