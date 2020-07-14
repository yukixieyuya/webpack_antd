import {Routes} from '../../utils/routerManager';
import UseState from "./UseState";
import UseRef from "./UseRef";
import SetState from "./SetState"
import UseDebounce from './UseDebounce';
import UseThrottle from "./UseThrottle";
import UseUpdate from "./UseUpdate";
import UseScroll from "./UseScroll";
const baseUrl = 'hooks';
export const routes = new Routes({
    state: {
        url: '/',
        component: UseState
    },
    useRef: {
        url: '/useRef',
        title: 'useRef',
        component: UseRef
    },
    setState: {
        url: '/setState',
        title: 'setState',
        component: SetState
    },
    debounce: {
        url: '/debounce',
        title: 'debounce',
        component: UseDebounce
    },
    throttle: {
        url: '/throttle',
        title: 'throttle',
        component: UseThrottle
    },
    update: {
        url: '/update',
        title: 'update',
        component: UseUpdate
    }
    ,
    scroll: {
        url: '/scroll',
        title: 'scroll',
        component: UseScroll
    }
});
const routeKeys = Object.keys(routes);
const routeValue = Object.values(routes);
// const paths = path.join(__dirname, '../home.js');
routeValue.forEach((c, i) => {
    c.path = `/${baseUrl}${routes[routeKeys[i]].url()}`;
    if(routes[routeKeys[i]].url() === '/')
        c.exact = true
});
export default routeValue;