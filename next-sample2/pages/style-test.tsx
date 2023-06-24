import type { NextPage } from "next";
import styled from "styled-components";

const H1 = styled.h1`
    color: red;
`

const Badge = styled.span`
    padding: 8px 16px;
    font-weight: bold;
    text-align: center;
    color: white;
    background: red;
    border-radius: 16px;
`

const StyleTest: NextPage = () => {
    return (
        <div>
            <H1>hello, am i styled?</H1>
            <Badge>and this is span</Badge>
        </div>
    )
}

export default StyleTest