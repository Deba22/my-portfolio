import Image from 'next/image'
import Skeleton from '../../components/Skeleton'
import Meta from '../../components/Meta'
import { useEffect } from 'react'
import { fetchItem,fetchItems } from '../../utils/umbracoContentDeliveryApi';


export async function getStaticPaths() {

    const blogItems = await fetchItems({filter:'blog'});

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

export async function getStaticProps({params}) {
    let blogs = null;
    try {
    blogs = await fetchItem('blogs/'+params.slug);
    }catch (err) { };
    console.log('blogs:',blogs)

    return {
        props: { blog: blogs },
        revalidate: 60  //60sec
    }
}



function BlogDetails( {blog} ) {
    useEffect(() => {
        const codeElems = document.querySelectorAll('.code-snippet');
        codeElems.forEach((elem) => {
            // `elem` is the element you want to wrap
            var parent = elem.parentNode;
            var wrapper = document.createElement('pre');
            // set the wrapper as child (instead of the element)
            parent.replaceChild(wrapper, elem);
            // set element as child of wrapper
            wrapper.appendChild(elem);
            elem.parentElement.classList.add("codeSection");
        });
    },[]);
    if (!blog) return <div>test</div>
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
            {/* <Meta title={title} description={metadataDescription}
                metadataTitle={metadataTitle} metadataDescription={metadataDescription} metadataImage={'https:' + metadataImage.fields.file.url}>
            </Meta> */}
            <div className="blog-info">
                <h1>{blog.properties?.title}</h1>
                <p>{formatDate()}</p>
            </div>
            {
                        blog.properties?.mainImage  ?(
            <div className="blog-banner">
                <Image
                    src={'https://my-umbraco-backend.euwest01.umbraco.io' + blog.properties?.mainImage[0]?.url}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    alt={blog.properties?.mainImage[0]?.name}
                />
            </div>) :<></>
}
            <div className="blog-description">
                <div dangerouslySetInnerHTML={{ __html: blog.properties?.richTextContent?.markup }}></div>
            </div>
            <style jsx>{`
            .code-snippet{
            font-family: monospace;
            }
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
