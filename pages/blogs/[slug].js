import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
})
export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: "blog"
    })

    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug }
        }
    })

    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async ({ params }) => {
    const { items } = await client.getEntries({
        content_type: 'blog',
        'fields.slug': params.slug
    })

    return {
        props: { blog: items[0] },
        revalidate:60  //60sec
    }

}


function BlogDetails({ blog }) {
    const { featuredImage, title, publishDate, description } = blog.fields
    const formatDate = () => {
        let monthNames = ["January", "February", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December"];
        var d = new Date(publishDate);
        let day = d.getDate();

        let monthIndex = d.getMonth();
        let monthName = monthNames[monthIndex];

        let year = d.getFullYear();

        return `${day} ${monthName} ${year}`;
    }
    return (
        <div className="blog-details">
            <div className="blog-info">
                <h1>{title}</h1>
                <p>{formatDate()}</p>
            </div>
            <div className="blog-banner">
                <Image
                    src={'https:' + featuredImage.fields.file.url}
                    width={featuredImage.fields.file.details.image.width}
                    height={featuredImage.fields.file.details.image.height}
                />
            </div>
            <div className="blog-description">
                <div>{documentToReactComponents(description)}</div>
            </div>
            <style jsx>{`
        .blog-details{
            display:flex;
            flex-direction:column;
            align-items:center;
            padding: 20px 170px;
    background-color: white;
    border-radius: 5px;
}
.blog-info{
    text-align: center;
}
.blog-info h1{
    color: black;
    font-size: 2.6rem;   
    margin-bottom: 0px;
}

.blog-info p{
    text-align: center;
    font-size:0.8rem;
}
@media only screen and (max-width: 768px) {
    .blog-details{
        padding: 20px 30px;
    }
}
@media (max-width: 450px)
{
    .blog-details{
        padding: 20px 10px;
    }
}
        }
      `}</style>
        </div>
    )
}

export default BlogDetails
