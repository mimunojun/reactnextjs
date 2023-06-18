import { NextPage } from "next"
import Image from 'next/image'
import BackToTOP from "../app/backToTop"

import SuzumeImage from '../public/images/suzume.jpeg'

const ImageSample: NextPage<void> = (props) => {
    return (
        <div>
            <h1>画像表示の比較</h1>
            <p>imgタグで表示した場合</p>
            <img src="/images/suzume.jpeg" alt="szm" />
            <p>Imageコンポーネントで表示した場合</p>
            <Image src={SuzumeImage} alt="szm"/>
            <p>Imageで表示した場合は事前に描画エリアが確保されます</p>
            <BackToTOP />
        </div>
    )
}

export default ImageSample