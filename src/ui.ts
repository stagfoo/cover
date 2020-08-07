import * as actions from './actions';
import html from 'nanohtml';

export function AppRoot(state) {
  return html`
  <div id="app">
      <div class="page">
        ${routing(state)}
      </div>
    </div>
  `
}

export function imageHandler(state) {
  return html`
  <div id="cover-uploader">
    <input type="file" id="img" name="img" accept="image/*;capture=camera" onchange=${(e) => actions.coverImage(e)} >
    <img class="personal-cover-overlay ${state.image !== null ? "show": ""}" src="${state.image}" />
    <img class="personal-cover ${state.image !== null ? "show": ""}" src="${state.image}" />
    <img id="cover-area" src="/assets/empty-case.png"/>
    <img id="cover-area-cd" src="${state.youtube !== "" ? "/assets/cd.png": ""}"/>
  </div>
  `
}
export function playerHandler(state) {
  return html`
  <div id="cover-uploader">
    <input type="file" id="img" name="img" accept="image/*;capture=camera" onchange=${(e) => actions.playTrack(e)} >
    <img id="cover-area" src="/assets/empty-case.png"/>
    <div id="track-cover" style="background-image:url(${state.trackCover})" ></div>
    <img id="cover-area-cd" class="${state.track !== "" ? "spin": ""}" src="${state.track !== "" ? "/assets/cd.png": ""}"/>
    <iframe width="1" height="1" src="https://www.youtube.com/embed/${state.track}/?autoplay=1&enablejsapi=1&origin=${window.location.href}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  `
}



export function routing(state) {
  switch (state.currentPage.name) {
    case "HOME":
      return html`
        <h1>cover</h1>
        <div class="wrapper">
        ${imageHandler(state)}
        </div>
        <h2>drag an image on to the cover</h2>
        <input value="${state.youtube}" onchange=${(e) => actions.newYoutube(e)} placeholder="www.youtube.com/aestesic-as-f">
        <button onclick="${actions.createCover}"><span>save your music picture</span></button>
      <div id="samples">
        <h2>samples</h2>
      <ul>
        <li><img width="320px" src="/assets/sample1.png" /></li>
        <li><img width="320px" src="/assets/sample2.png" /></li>
        <li><img width="320px" src="/assets/sample3.png" /></li>
        <li><img width="320px" src="/assets/sample4.png" /></li>
      </ul>
      <a style="width: 100%; clear:both; display:block;" href="/player">Listen to your images</a>
      </div>
`
case "PLAYER":
  return html`
    <h1>cover</h1>
    <div class="wrapper">
    ${playerHandler(state)}
    </div>
    <h2>samples</h2>
  <ul>
    <li><img width="320px" src="/assets/sample1.png" /></li>
    <li><img width="320px" src="/assets/sample2.png" /></li>
    <li><img width="320px" src="/assets/sample3.png" /></li>
    <li><img width="320px" src="/assets/sample4.png" /></li>
  </ul>
  <a style="width: 100%; clear:both; display:block;" href="/">Make More cover.pngs</a>
  </div>
`
    default:
    return html`
       <h1>404 cover</h1>
  `
  }
}
