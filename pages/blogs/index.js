import Image from 'next/image'
import Meta from '../../components/Meta'
import { createClient } from 'contentful'
import BlogCard from '../../components/BlogCard'
import { useState } from 'react'
import ReactPaginate from 'react-paginate';
import animationBlogHero from "../../public/blogging-image.json"
import Animation from '../../components/Animation'
import styles from '../../styles/Blog.module.css'

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY
    })
    const res = await client.getEntries({ content_type: 'blog' })
    return {
        props: {
            blogs: res.items
        }
    }
}

function blogs({ blogs }) {
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
            <Meta title="Debasish Gracias Blogs"></Meta>
            <div className={styles.hero__inner}>
                <div className={styles.hero__inner__splitOne}>
                    <h1 className={styles.hero__title}>
                        Our Blog
                    </h1>
                </div>
                <div className={styles.hero__inner__splitTwo}>
                    <Animation animPath={animationBlogHero} />
                </div>
            </div>
            <div className="outer-card">
                {
                    blogs.slice(offset, offset + PER_PAGE).map(blog => (
                        <BlogCard key={blog.sys.id} blog={blog} />
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
}
@media only screen and (max-width: 768px) {
    .outer-card{
        display:flex;
        flex-flow: wrap;
        justify-content: center;
    }
}
@media (max-width: 450px)
{
.outer-card{
    flex-direction:column;
}
}
            `}
            </style>
        </div>
    )
}

export default blogs
