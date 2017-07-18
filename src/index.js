import { h, app } from 'hyperapp';

import Btn from './btn';

app({
  root: document.body,
  state: {
    count: 0,
  },
  view: (state, actions) => h('div', null, [
    h('h1', null, state.count),
    Btn({
      onclick: actions.inc,
      style: {
        fontSize: `calc(100% + ${state.count / 2}px)`,
      },
    }, 'Increment'),
    ' ',
    Btn({
      onclick: actions.dec,
      style: {
        fontSize: `calc(100% - ${state.count / 2}px)`,
      },
    }, 'Decrement'),
  ]),
  actions: {
    inc(state) {
      return Object.assign({}, state, { count: state.count + 1 });
    },
    dec(state) {
      return Object.assign({}, state, { count: state.count - 1 });
    },
  },
});
