import { handleGreetingClick } from './actions';
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

export function routing(state) {
  switch (state.currentPage.name) {
    case "HOME":
      return html`
        <h1>cover</h1>
        <img id="cover-area" src="/assets/empty-case.png"/>
        <h2>drag an image on to the cover</h2>
        <input placeholder="www.youtube.com/aestesic-as-f">
        <button><span>save your music picture</span></button>
      <div id="samples">
        <h2>samples</h2>
      <ul>
        <li><img width="320px" src="/assets/example1.png" /></li>
        <li><img width="320px" src="/assets/example2.png" /></li>
        <li><img width="320px" src="/assets/example3.png" /></li>
        <li><img width="320px" src="/assets/example4.png" /></li>
      </ul>
      </div>
`
    default:
    return html`
       <h1>404 cover</h1>
  `
  }
}
