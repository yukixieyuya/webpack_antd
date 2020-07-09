import DataSet from "@antv/data-set";
import React, {useState, useEffect} from "react";
import {
    Chart,
    Edge,
    Point,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend,
    View,
    Guide,
    Shape,
} from "bizcharts";
import {routes} from "./routes";
import {Button} from 'antd'
export default props => {
    const [data, setData] = useState('');
    let dv;
    useEffect(() => {
        fetch('https://alifd.alibabausercontent.com/materials/@bizcharts/relation-arc/0.2.8/mock.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data);

            })
    }, []);
    const ds = new DataSet();
    dv = data && ds.createView().source(data, {
        type: "graph",
        edges: d => d.links
    });
    data && dv.transform({
        type: "diagram.arc",
        marginRatio: 0.5 // sortBy: 'frequency' // id, weight, frequency, {function}
    });
    return (
        <div>
        {
            data ? <Chart padding={[40, 30, 65,4]} pure data={data} autoFit={true} height={600}>
                <Tooltip showTitle={false} />
                <View data={data ? dv.edges : null}>
                    <Edge
                        position="x*y"
                        shape="arc"
                        color="source"
                        opacity={0.5}
                        tooltip={"source*target"}
                    />
                </View>
                <View data={data ? dv.nodes : null}>
                    <Point
                        position="x*y"
                        shape="circle"
                        size="value"
                        color="id"
                        opacity={0.5}
                        style={{
                            stroke: "grey"
                        }}
                        label={['name', {
                            offset: -12,
                            rotate: Math.PI * 0.5,
                            style: {
                                textAlign: "left",
                                fill: "black"
                            }
                        }]}
                    />
                </View>
            </Chart> : null
        }
        <Button onClick={() => props.history.push(routes.arc1.path)}>下一个</Button>
        </div>

    )
}