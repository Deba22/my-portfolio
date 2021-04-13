import Image from 'next/image'
import Meta from '../../components/Meta'
function blogs() {
    return (
        <div className="blogs">
            <Meta title="Debasish Gracias Blogs"></Meta>
            <Image alt="web-dev service image" src="/coming-soon.svg" height="500" width="500" />
            <h1>Coming soon...</h1>
        </div>
    )
}

export default blogs
