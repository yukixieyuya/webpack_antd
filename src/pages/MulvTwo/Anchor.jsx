import { Anchor } from 'antd';
import React from "react";

const { Link } = Anchor;
export default props => {
    return (
        <Anchor>
            <Link href="#components-anchor-demo-basic" title="Basic demo" />
            <Link href="#components-anchor-demo-static" title="Static demo" />
            <Link href="#components-anchor-demo-basic" title="Basic demo with Target" target="_blank" />
            <Link href="#API" title="API">
                <Link href="#Anchor-Props" title="Anchor Props" />
                <Link href="#Link-Props" title="Link Props" />
            </Link>
        </Anchor>
    )
}