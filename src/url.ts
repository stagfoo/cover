import page from 'page';
import { state } from './index';

type Context = {
  params: {
    name?: string;
  };
};

// Handlers
const HOME_PAGE = (ctx: Context, next: any) => {
  state._update('updateTrack', '')
  state._update('updateTrackCover', null)
  state._update('updateCurrentPage', 'HOME')
};
const PLAYER_PAGE = (ctx: Context, next: any) => {
  state._update('updateTrack', '')
  state._update('updateTrackCover', null)
  state._update('updateCurrentPage', 'PLAYER')
};

// Routes
page('/', HOME_PAGE);
page('/player', PLAYER_PAGE);


export function startRouters(): void {
  page.start();
}
