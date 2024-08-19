import Link from 'next/link'
import Image from 'next/image'
const configManager = require('../utils/configManager');

const config = configManager.getConfig()

function BlogCard({ blog }) {
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
        <div className="blogCard-outer">
            <Link href={blog.route.path} legacyBehavior>
                <a>
                    <div className="card">
                        {
                        blog.properties?.thumbnailImage  ?(
                                <div className="featured">
                                <Image className="thumnail-img"
                                    src={config.domain + blog.properties?.thumbnailImage[0]?.url}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }}
                                    alt={blog.properties?.thumbnailImage[0]?.name}
                                />
                            </div>) :<></>
                            
                           
                        }

                        <div className="blogCard-content">
                            <div className="info">
                                <p>{formatDate()}</p>
                                <h4>{blog.properties.title}</h4>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
            <style jsx global>{`
.blogCard-outer{
    width: 31.33%;
    margin-right: 3%;
    margin-bottom: 3%;

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

.blogCard-content{
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
@media only screen and (min-width: 992px) {
    .blogCard-outer:nth-child(3n+3){
        margin-right:0px;
    }
}
@media only screen and (max-width: 992px) {
.blogCard-outer{
    width: 48.5%;
    margin-right: 3%;
     margin-bottom: 3%;
}
     .blogCard-outer:nth-child(2n+2){
        margin-right:0px;
    }
}
       
@media only screen and (max-width: 450px) {
.blogCard-outer{
    width: 100%;
     margin-right:0px;
     margin-bottom: 3%;
}
}
            `}
            </style>
        </div>
    );
}

export default BlogCard
