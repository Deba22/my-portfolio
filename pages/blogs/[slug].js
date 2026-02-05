import Image from 'next/image'
import Skeleton from '../../components/Skeleton'
import Meta from '../../components/Meta'
import { useEffect } from 'react'
import { fetchItem,fetchItems } from '../../utils/umbracoContentDeliveryApi';
import GiscusComments from "../../components/GiscusComments";

const configManager = require('../../utils/configManager');

const config = configManager.getConfig()

export async function getStaticPaths(context) {
//let blogItems=null;
//if (context.preview) {
     //blogItems = await fetchItems({filter:'blog',sort:null,draftMode:true});
//}
////else{
   const blogItems = await fetchItems({filter:'blog',sort:null,draftMode:true});
//}

    const paths = blogItems.items.map(item => {
        return {
            params: { slug: item.route.path }
        }
    })

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({params,draftMode}) {
    let blogs = null;
    // if (draftMode) {
    //     try {
    //         blogs = await fetchItem({pathOrId:'blogs/'+params.slug,draftMode:true});
    //         }catch (err) { };
    // }
    // else{
        try {
           blogs = await fetchItem({pathOrId:'blogs/'+params.slug,draftMode:true});
            }catch (err) { };
   // }

    return {
        props: { blog: blogs },
        revalidate: 60  //60sec
    }
}



function BlogDetails( {blog} ) {
useEffect(() => {
  // Run after blog content is rendered
  if (blog?.properties?.richTextContent?.markup) {
    const preElems = document.querySelectorAll('pre');
    preElems.forEach((elem) => {
      elem.classList.add("codeSection");
    });
  }
}, [blog]);

    if (!blog) return <Skeleton></Skeleton>
    //const { featuredImage, title, publishDate, description, metadataTitle, metadataDescription, metadataImage } = blog.fields
    const formatDate = () => {
        let monthNames = ["January", "February", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December"];
        var d = new Date(blog.properties?.blogDate);
        let day = d.getDate();

        let monthIndex = d.getMonth();
        let monthName = monthNames[monthIndex];

        let year = d.getFullYear();

        return `${day} ${monthName} ${year}`;
    }
    return (
        <div className="blog-details">
            <Meta title={blog.properties?.browserTitle} description={blog.properties?.metadataDescription}
                metadataTitle={blog.properties?.metadataTitle} metadataDescription={blog.properties?.metadataDescription} metadataImage={config.umbraco_domain + blog.properties?.metadataImage[0]?.url} pageUrl={config.nextjs_domain+blog.route?.path}>
            </Meta>
            <div className="blog-info">
                <h1>{blog.properties?.title}</h1>
                <p>Published by {blog.properties?.author[0]?.name} on {formatDate()}</p>
            </div>
            {
                        blog.properties?.mainImage  ?(
            <div className="blog-banner">
                <Image
                    src={config.umbraco_domain + blog.properties?.mainImage[0]?.url}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    alt={blog.properties?.mainImage[0]?.name}
                />
            </div>) :<></>
}
            <div className="blog-description">
                <div dangerouslySetInnerHTML={{ __html: blog.properties?.richTextContent?.markup.replace(/\/media/g, config.umbraco_domain+'/media') }}></div>
            </div>
            <GiscusComments />
            <style jsx>{`

        .blog-details{
            display:flex;
            flex-direction:column;
            align-items:center;
            padding: 20px 170px;
    background-color: white;
    box-shadow: 0 -1rem 2rem -1.5rem rgb(0 0 0 / 15%), 0 1rem 2rem -1.5rem rgb(0 0 0 / 15%);
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
    font-size:1rem;
    font-weight: 600;
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
    .blog-info h1{
        font-size: 2.2rem;   
    }
}
        }
      `}</style>
        </div>
    )
}

export default BlogDetails
