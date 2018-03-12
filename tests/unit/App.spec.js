import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import App from '@/App.vue';
import About from '@/views/About.vue';
import Home from '@/views/Home.vue';

describe('App', function () {
  let wrp;

  const routes = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ];

  const router = new VueRouter({ routes });

  beforeEach(() => {

    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuetify);

    wrp = mount(App, {
      localVue: localVue,
      router,
    });
    //wrp.vm.docks = require('@/assets/docks.jpg');
  });

  it('should render correct contents', () => {
    // const Constructor = Vue.extend(Hello)
    // const vm = new Constructor().$mount()
    let greeting = wrp.find('.greeting');
    let username = 'Allan'
    expect(greeting.exists()).toBe(true);
    wrp.setData({ msg: 'Welcome to Your Vue.js App', username:username });
    expect(greeting.text())
      .toMatch(`Welcome to Your Vue.js App Allan`)
  })
});
