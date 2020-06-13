import {Routes} from '../utils/routerManager';

const routes = new Routes({
    query: {
        url: '/query',
        title: '查询'
    },
    test: {
        url: '/test',
        title: '测试'
    },
    date: {
        url: '/date',
        title: '日期'
    },
    demo: {
        url: '/demo',
        title: 'demo'
    },
});
export default routes;