import { reducers, defaultState as _defaultStore } from './store';
import { startRouters } from './url';
import { hydrateState, dehydrateState} from 'utils'
import { createStore } from 'obake.js';
import { AppRoot } from './ui';
import { BaseStyles  } from './styles';
import morph from 'nanomorph';

//Default render
const ROOT_NODE = document.body.querySelector('#app');

//Create Store
const defaultState = _defaultStore
export const state = createStore(
    defaultState,
    {
      renderer,
      debug: (s) => {
        console.log('[debug]', s)
      }
    },
    reducers
  );

//Render Loop function
function renderer(newState) {
  morph(ROOT_NODE, AppRoot(newState), {
    onBeforeElUpdated: function(fromEl, toEl) {
        // spec - https://dom.spec.whatwg.org/#concept-node-equals
        console.log(fromEl)
        if(fromEl.name === 'IFRAME'){
          return true
        }
        if (fromEl.isEqualNode(toEl)) {
            return false
        }
        return true
    }
  })
}
//Start Router listener
startRouters();
BaseStyles();

