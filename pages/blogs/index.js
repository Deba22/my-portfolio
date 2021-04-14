import Image from 'next/image'
import Meta from '../../components/Meta'
import { createClient } from 'contentful'

export async function getStaticProps() {
    const client = createClient({
        space:process.env.CONTENTFUL_SPACE_ID,
        accessToken:process.env.CONTENTFUL_ACCESS_KEY
    })
    const res=await client.getEntries({content_type:'blog'})
    return{
        props:{
            blogs:res.items
        }
    }
}

function blogs({blogs}) {
    console.log(blogs)
    return (
        <div className="blogs">
            <Meta title="Debasish Gracias Blogs"></Meta>
          
            {/* <Image alt="web-dev service image" src="/coming-soon.svg" height="500" width="500" />
            <h1>Coming soon...</h1> */}
        </div>
    )
}

export default blogs
