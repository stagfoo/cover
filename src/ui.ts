import * as actions from './actions';
import html from 'nanohtml';

export function AppRoot(state) {
  return html`
  <div id="cover-app">
      ${playerHandler(state)}
    </div>
  `
}


export function playerHandler(state) {
  return html`
  <div id="cover-uploader">
    <input type="file" id="img" name="img" accept="image/*;capture=camera" onchange=${(e) => actions.playTrack(e)} >
    <img id="cover-area" src="https://mini-player.cover.pages.dev/assets/empty-case.png"/>
    <div id="track-cover" style="background-image:url(${state.trackCover})" ></div>
    <img id="cover-area-cd" class="${state.track !== "" ? "spin": ""}" src="${state.track !== "" ? "https://mini-player.cover.pages.dev/assets/cd.png": ""}"/>
    <iframe width="1" height="1" src="https://www.youtube.com/embed/${state.track}/?autoplay=1&enablejsapi=1&origin=${window.location.href}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  `
}

