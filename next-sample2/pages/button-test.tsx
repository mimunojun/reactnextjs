import { CounterButton } from "@/app/button-logic"
import { NextPage } from "next"


const ButtonTest: NextPage = () => {

    return (
        <div>
            <CounterButton label="counting" maximum={10} />

        </div>
    )
}

export default ButtonTest