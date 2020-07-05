import {Routes} from '../utils/routerManager';
import Home from "../pages/Home";
import List from "../pages/List";
import Test from "../pages/Test";
import Demo from "../pages/Demo";
import MulvTwo from "../pages/MulvTwo";
import Bizcharts from "../pages/Bizcharts";
import Recoil from "../pages/Recoil";
import Freeze from "../pages/Freeze";
import Hooks from "../pages/Hooks";
const routes = new Routes({
    demo1: {
        url: '/',
        title: '主页',
        exact: true,
        component: Home
    },
    demo: {
        url: '/demo',
        title: 'demo',
        component: Demo
    },
    list: {
        url: '/',
        title: '列表',
        component: List
    },
    test: {
        url: '/',
        title: '测试1',
        component: Test
    },
    query: {
        url: '/',
        title: '测试1',
        component: MulvTwo
    },
    bizcharts: {
        url: '/',
        title: '图表库',
        component: Bizcharts
    },
    recoil: {
        url: '/',
        title: 'Recoil',
        component: Recoil
    },
    freeze: {
        url: '/',
        title: 'freeze',
        component: Freeze
    },
    hooks: {
        url: '/',
        title: 'hooks',
        component: Hooks
    },
});
const routeKeys = Object.keys(routes);
const routeValue = Object.values(routes);
routeValue.forEach((c, i) => {
    c.node = `/${routeKeys[i]}`
});
export default routeValue;