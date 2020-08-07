import { defaultState } from 'store';

export function hydrateState(key:string = 'cover_storage'){
  if(localStorage.getItem(key)) {
    try {
      const state = JSON.parse(localStorage.getItem(key))
      return state;
    } catch(err) {
      console.warn(err)
      return defaultState
    }
  } else {
    return defaultState
  }
}

export function dehydrateState(store, key:string = 'cover_storage') {
  localStorage.setItem(key, JSON.stringify(store))
}

export const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});
