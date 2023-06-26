import type { NextPage } from "next";
import styled, {css} from "styled-components";

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

type ButtonProps = {
    color: string
    backgroundColor: string
}

const redBox = css`
    padding: 0.25em 1em;
    border: 3px solid #ff00ff;
    border-radius: 10px;
`
const Button = styled.button<ButtonProps>`
    color: ${(props) => props.color};
    background: ${(props) => props.backgroundColor};
    border: 2px solid ${(props) => props.color};

    font-size: 2em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 8px;
    cursor: pointer;

    ${redBox}
`

const BlueText = styled.p`
    color: blue;
    font-size: 2em;
`

const BorderedButton = styled(Button)`
    border: 8px solid;
    font-weight: bold;
`

const StyleTest: NextPage = () => {
    return (
        <div>
            <H1>hello, am i styled?</H1>
            <Badge>and this is span</Badge>
            <Button backgroundColor="transparent" color="#FF0000">red-transparent button</Button>
            <Button backgroundColor="#1E90FF"  color="white">1e90ff-white button</Button>
            <BorderedButton backgroundColor="#20ffc7" color="#00aad0">i'm borderedButton</BorderedButton>
            <BlueText>I'm a normal bluetext</BlueText>
            <BlueText as="a" href="/">I'm as 'a'</BlueText>
        </div>
    )
}

export default StyleTest