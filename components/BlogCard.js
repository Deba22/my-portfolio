import Link from 'next/link'
import Image from 'next/image'

function BlogCard({ blog }) {
    const { title, slug, publishDate, thumbnail } = blog.fields
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
        <div className="blogCard-outer">
            <Link href={'/blogs/' + slug}>
                <a>
                    <div className="card">
                        <div className="featured">
                            <Image className="thumnail-img"
                                src={'https:' + thumbnail.fields.file.url}
                                width={thumbnail.fields.file.details.image.width}
                                height={thumbnail.fields.file.details.image.height}
                            />
                        </div>
                        <div className="content">
                            <div className="info">
                                <p>{formatDate()}</p>
                                <h4>{title}</h4>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
            <style jsx global>{`
.blogCard-outer{
    padding:20px;
    width:calc(100%/3);
}
.card{
    background:white;
    min-height: 100%;
    box-shadow: rgb(50 50 50 / 10%) 0px 16px 32px, rgb(0 0 0 / 7%) 0px 6px 16px;
    border-radius:10px;
    transition: all 0.4s ease 0s;
    transform: translate3d(0px, 0px, 0px);
}
.card:hover {
    transform: translateY(-5px);
    box-shadow: rgb(50 50 50 / 10%) 0px 16px 32px, rgb(0 0 0 / 7%) 0px 6px 16px;
}
.thumnail-img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.content{
    padding: 5px 20px 20px 20px;
}
.info p{
    color: #7b8ba4;
}
.info h4{
    font-weight: 600;
    font-size: 20px;
    color:#000;
    margin:0;
}
@media only screen and (max-width: 768px) {
    .blogCard-outer{
        flex: 0 0 45%;
        padding: 20px;
    }
}
@media (max-width: 450px)
{
.blogCard-outer{
    width:100%;
    padding: 20px 0px 20px 0px;
}
}

            `}
            </style>
        </div>
    )
}

export default BlogCard
