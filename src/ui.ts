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
    <div class="loading ${state.isLoading ? "show": "hide"}"></div>
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
        <div class="loading ${state.isLoading ? "show": "hide"}">
          .:generating:.
      </div>
        <div id="samples">
        <h2>samples</h2>
      <ul>
        <li><img width="320px" src="/assets/sample1.png" /><a download href="/assets/sample1.png"><span>Download</span></a></li>
        <li><img width="320px" src="/assets/sample2.png" /><a download href="/assets/sample2.png"><span>Download</span></a></li>
        <li><img width="320px" src="/assets/sample3.png" /><a download href="/assets/sample3.png"><span>Download</span></a></li>
      </ul>
      <button onclick="${actions.goToPlayer}"><span>Listen to your music</span></button>
      
      </div>
`
case "PLAYER":
  return html`
    <h1>cover</h1>
    <div class="wrapper">
    ${playerHandler(state)}
    </div>
    <h2>drag an "cover.png" to into the case<br><br>to listen to your music</h2>
    <div id="samples">
        <h2>samples</h2>
      <ul>
        <li><img width="320px" src="/assets/sample1.png" /><a download href="/assets/sample1.png"><span>Download</span></a></li>
        <li><img width="320px" src="/assets/sample2.png" /><a download href="/assets/sample2.png"><span>Download</span></a></li>
        <li><img width="320px" src="/assets/sample3.png" /><a download href="/assets/sample3.png"><span>Download</span></a></li>
      </ul>
      <button onclick="${actions.goToHome}"><span>Make More cover.pngs</span></button>
      </div>
`
    default:
    return html`
       <h1>404 cover</h1>
  `
  }
}
