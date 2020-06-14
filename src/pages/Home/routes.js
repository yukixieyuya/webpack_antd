import {Routes} from '../../utils/routerManager';
import First from "./First";
import List from "../List";
import path from 'path';
const baseUrl = 'home';
export const routes = new Routes({
    query: {
        url: '/',
        title: 'query',
        component: First
    },
    check: {
        url: '/check',
        title: 'check',
        component: List
    }
});
const routeKeys = Object.keys(routes);
const routeValue = Object.values(routes);
const paths = path.join(__dirname, '../home.js');
routeValue.forEach((c, i) => {
    c.node = `/${baseUrl}${routes[routeKeys[i]].url()}`;
    if(routes[routeKeys[i]].url() === '/')
        c.exact = true
});
export default routeValue;