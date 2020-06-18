import {Routes} from '../../utils/routerManager';
import Recoil from "./Recoil"
// import Spin from "./Spin"
// import Anchor from "./Anchor"
// import path from 'path';
const baseUrl = 'recoil';
export const routes = new Routes({
    recoil: {
        url: '/',
        component: Recoil
    },
    // one: {
    //     url: '/one',
    //     title: '加载中',
    //     component: Spin
    // },
    // anchor: {
    //     url: '/anchor',
    //     title: '锚点',
    //     component: Anchor
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