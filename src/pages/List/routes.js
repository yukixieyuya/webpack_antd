import {Routes} from '../../utils/routerManager';
import First from "./First";
import Two from "./Two";
import Three from "./Three"
import Four from "./Four"
// import path from 'path';
const baseUrl = 'list';
export const routes = new Routes({
    list: {
        url: '/',
        component: First
    },
    check: {
        url: '/check',
        title: '折叠面板',
        component: Two
    },
    test: {
        url: '/test',
        title: '气泡卡片',
        component: Three
    },
    table: {
        url: '/table',
        title: '表格',
        component: Four
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