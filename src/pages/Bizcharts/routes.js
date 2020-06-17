import {Routes} from '../../utils/routerManager';
import Bizacharts from "./Bizacharts"
import Grouped from "./Grouped"
import Labelline from "./Labelline"
import Point from './Point';
import Arc from './Arc';
const baseUrl = 'bizcharts';
export const routes = new Routes({
    bizcharts: {
        url: '/',
        component: Bizacharts
    },
    grouped: {
        url: '/grouped',
        title: '极坐标分组柱状图',
        component: Grouped
    },
    labelline: {
        url: '/labelline',
        title: '基础饼图',
        component: Labelline
    },
    point: {
        url: '/point',
        title: '点图',
        component: Point
    },
    arc: {
        url: '/arc',
        title: '弧形链接图',
        component: Arc
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