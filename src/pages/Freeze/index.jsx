import React, {useState, useEffect} from 'react';
import {Button} from 'antd';
import request from '../../plugins/Fetch';
import cheerio from 'cheerio';
import axios from "axios";
export default props => {
    const obj2 = {
        internal: {}
    };
    const [state, setState] = useState({
        a: 1878,
        b: 2
    })
    let deep = null;
    useEffect(() => {
        deep = _.cloneDeep(state);
        console.log(axios)
        axios.get('/api/home').then(res => {
            console.log(res.data)
        })
        axios.get("/weiyinfu?tab=repositories").then(resp => {
            var $ = cheerio.load(resp.data)
            var lis = $("#user-repositories-list li")
            var repos = []
            for (var i = 0; i < lis.length; i++) {
                var li = lis.eq(i)
                var repo = {
                    repoName: li.find("h3").text().trim(),
                    repoUrl: li.find("h3 a").attr("href").trim(),
                    repoDesc: li.find("p").text().trim(),
                    language: li.find("[itemprop=programmingLanguage]").text().trim(),
                    star: li.find(".muted-link.mr-3").eq(0).text().trim(),
                    fork: li.find(".muted-link.mr-3").eq(1).text().trim(),
                    forkedFrom: li.find(".f6.text-gray.mb-1 a").text().trim()
                }
                repos.push(repo)
            }
            console.log(repos)
        })

        // request.get('/weiyinfu?tab=repositories').then(res => {
        //     console.log(res)
        // })
        console.log(deep, 'deep')
    }, [])

    console.log(state, 'state')
    // console.log(deep == state);
    // 深冻结函数.
    function deepFreeze(obj) {

        // 取回定义在obj上的属性名
        var propNames = Object.getOwnPropertyNames(obj);

        // 在冻结自身之前冻结属性
        propNames.forEach(function(name) {
            var prop = obj[name];

            // 如果prop是个对象，冻结它
            if (typeof prop == 'object' && prop !== null)
                deepFreeze(prop);
        });

        // 冻结自身(no-op if already frozen)
        return Object.freeze(obj);
    }


    // deepFreeze(obj2);
    obj2.internal.a = 'anotherValue';
    console.log(obj2)
    const onClick = () => {
        setState({
            c: 11
        })
    }
    return (
        <div>
            <Button onClick={onClick}>1234</Button>
        </div>
    )
}