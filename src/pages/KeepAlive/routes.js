import {Routes} from '../../utils/routerManager';
import First from "./First";
// import Two from "./Two";
// import Three from "./Three"
// import path from 'path';
const baseUrl = 'keepAlive';
export const routes = new Routes({
    keepAlive: {
        url: '/',
        component: First
    },
    // check: {
    //     url: '/check',
    //     title: '滑动输入条',
    //     component: Two
    // },
    // ck: {
    //     url: '/check/ck',
    //     title: 'CK',
    //     component: Two
    // },
    // test: {
    //     url: '/test',
    //     title: '穿梭框',
    //     component: Three
    // }
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