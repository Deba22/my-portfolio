import { fetchItem,fetchItems,fetchDraftItems } from '../../utils/umbracoContentDeliveryApi';
import Image from 'next/image'
import Meta from '../../components/Meta'
import BlogCard from '../../components/BlogCard'
import { useState } from 'react'
import ReactPaginate from 'react-paginate';
import animationBlogHero from "../../public/blogging-image.json"
import Animation from '../../components/Animation'
import styles from '../../styles/Blog.module.css'
const configManager = require('../../utils/configManager');

const config = configManager.getConfig()

export async function getStaticProps(context) {
    console.log('Draft Mode:',context.draftMode)
   let blogItems=null;
    if (context.draftMode) {
        blogItems = await fetchDraftItems({filter:null});
    }
    else{
        blogItems = await fetchItems({filter:null,sort:'updateDate:desc'});
    }
  
    return {
        props: {
            blogs: blogItems
        },
        revalidate:60  //60sec
    }

}

function blogs({blogs}) {
    console.log(blogs)
    const [currentPage, setCurrentPage] = useState(0);
    const PER_PAGE = 9;
    const offset = currentPage * PER_PAGE;
    // const currentPageData = data
    //     .slice(offset, offset + PER_PAGE)
    //     .map(({ thumburl }) => <img src={thumburl} />);
    const pageCount = Math.ceil(blogs.length / PER_PAGE);
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }
    return (
        <div className={styles.blogs}>
            {
            blogs.items.filter(function(bloglist){
                return bloglist.contentType==="blogList";
            }).map(bloglist => (
                        <Meta title={bloglist.properties?.browserTitle} description={bloglist.properties?.metadataDescription}
                            metadataTitle={bloglist.properties?.metadataTitle} metadataDescription={bloglist.properties?.metadataDescription} metadataImage={config.umbraco_domain + bloglist.properties?.metadataImage[0]?.url} pageUrl={config.nextjs_domain+bloglist.route?.path}>
                        </Meta>
            ))
            }
            <div className={styles.hero__inner}>
                <div className={styles.hero__inner__splitOne}>
                    <h1 className={styles.hero__title}>
                        {
                            blogs.items.filter(function(bloglist){
                                return bloglist.contentType==="blogList";
                            }).map(bloglist => (
                                bloglist.properties?.title
                            ))
                        }
                    </h1>
                </div>
                <div className={styles.hero__inner__splitTwo}>
                    <Animation animPath={animationBlogHero} />
                </div>
            </div>
            <div className="outer-card">
               {
                    blogs.items.filter(function(blog){
                        return blog.contentType==="blog";
                    }).slice(offset, offset + PER_PAGE).map(blog => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))
                } 
            </div>

            {/* <ReactPaginate
                previousLabel={"← Previous"}
                nextLabel={"Next →"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
            />  */}
            {/* <Image alt="web-dev service image" src="/coming-soon.svg" height="500" width="500" />
            <h1>Coming soon...</h1> */}
            <style jsx>{`
.outer-card{
    display:flex;
    flex-wrap: wrap;
     padding: 0 3rem 1rem;
}
}
            `}
            </style>
        </div>
    )
}
export default blogs
