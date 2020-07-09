import {Routes} from '../../utils/routerManager';
import Bizacharts from "./Bizacharts"
import Grouped from "./Grouped"
import Labelline from "./Labelline"
import Point from './Point';
import Arc from './Arc';
import Aaa from './Aaa';
import Bbb from './Bbb'
const baseUrl = 'bizcharts';
export const routes = new Routes({
    bizcharts: {
        url: '/',
        exact: true,
        component: Bizacharts
    },
    grouped: {
        url: '/grouped',
        title: '极坐标分组柱状图',
        exact: true,
        component: Grouped
    },
    labelline: {
        url: '/labelline',
        title: '基础饼图',
        exact: true,
        component: Labelline
    },
    point: {
        url: '/point',
        title: '点图',
        exact: true,
        component: Point
    },
    arc: {
        url: '/arc',
        title: '弧形链接图',
        exact: true,
        component: Arc
    },
    arc1: {
        url: '/arc/aaa',
        title: 'aaa',
        exact: true,
        component: Aaa
    },
    arc2: {
        url: '/arc/aaa/bbb',
        title: 'bbb',
        exact: true,
        component: Bbb
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