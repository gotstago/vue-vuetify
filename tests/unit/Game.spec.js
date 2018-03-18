import { mount, createLocalVue } from '@vue/test-utils';
import { EventBus } from "@/event-bus.js";
import Player from "@/Player.vue";
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import Vuex from "vuex";
import Home from '@/views/Home.vue';
import Game from '@/views/Game.vue';

describe('Game', function () {
  let wrp;

  const routes = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    }
  ];

  const router = new VueRouter({ routes });
  
  let actions
  let store

  beforeEach(() => {

    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuetify);
    localVue.use(Vuex);

    actions = {
      newGame: jest.fn(),
    }
    store = new Vuex.Store({
      state: {},
      // actions
    })

    wrp = mount(Game, {
      localVue: localVue,
      router,
      store,
    });
    //wrp.vm.docks = require('@/assets/docks.jpg');
  });

  it('does not display element if there are no items', () => {
    // No items to display.
    // NOTE: By default, our component has some items, but we use
    // setData() here to override it with an empty array of tiems to
    // make sure we have not items at all and our test works as
    // expected.
    //const stub = jest.fn()
    //wrp.setData({ items: [] });
    //wrp.setMethods({ dockers : require('@/assets/docks.jpg')})
    //expect(wrp.find('.item-index-row').exists()).toBe(false);
    expect(actions.newGame).toHaveBeenCalled()
  });
  it('should render btn as anchor tag with proper edit url', () => {

    // Not using setData() here. Just assume we have some items in
    // the component (our example component does indeed have two
    // default items).  This may or may not be a good approach. It
    // varies from component to component and from project to
    // project. Assess your own situation and decide for yourself.

    // let btn = wrp.find('.bid');
//#app > div > main > div > div > div > div > div.card__actions > a.btn--active.btn.btn--flat.btn--router.orange--text > div
////*[@id="app"]/div/main/div/div/div/div/div[3]/a[1]
// #app > div > main > div > div > div > div > div.card__actions > a.btn--active.btn.btn--flat.btn--router.orange--text > div
    // Each item displayed should have an edit link. Our component
    // uses <v-btn> with the `:to` attribute. That makes it an <a>
    // tag, a link.
    // expect(btn.exists()).toBe(true);

    // And it should route to /items/<id>/edit url.
    // expect(btn.element.text).toMatch('Bid');
  });
  
});
