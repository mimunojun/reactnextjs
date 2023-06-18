import Link from "next/link"
import { ReactNode } from "react"

type PageProps = {
    name: string
}

const pagePropsToDOM = (props: PageProps) => {
    const {name} = props
    return (
        <Link href={name}>
            go to {name}
        </Link>
        
    )
}

const stringToDOM = (props: string[]) => {
    const pagelist = props  
    const reactNodeList: ReactNode[] = []

    pagelist.forEach((value, index) => {
        const pageProp = { name: value }
        reactNodeList.push(pagePropsToDOM(pageProp))
    })

    return reactNodeList
}

const returnReactNode = () => {
    return (
        <>
            <div>bye.</div>
        </>
        
    )
}

const Routing = () => {
    const pagelist: string[] = ['ssr', 'ssg', 'isr', 'posts/1', 'image-sample']
    const reactNodeList: ReactNode[] = [<p>hi</p>, <p>hi2</p>]
    return (
        <div>
            <p>hello. here's what you want?</p>
            <p>
                {
                    stringToDOM(pagelist)
                }
            </p>
            
        </div>
    )
}

export default Routing
