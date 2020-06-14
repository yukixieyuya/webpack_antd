import {Routes} from '../../utils/routerManager';
import First from "./First";
import List from "../List";
import Text from "../Test"
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
    },
    test: {
        url: '/test',
        title: 'test',
        component: Text
    }
});
const routeKeys = Object.keys(routes);
const routeValue = Object.values(routes);
const paths = path.join(__dirname, '../home.js');
routeValue.forEach((c, i) => {
    c.path = `/${baseUrl}${routes[routeKeys[i]].url()}`;
    if(routes[routeKeys[i]].url() === '/')
        c.exact = true
});
export default routeValue;