
import styles from '../styles/PrivacyPolicy.module.css'
import { fetchPrivacyPolicy } from '../utils/umbracoContentDeliveryApi';

export async function getStaticProps() {

    const privacyPolicy = await fetchPrivacyPolicy({pathOrId:'/privacy-policy/',draftMode:false});
    
    return {
      props: { privacyPolicy: privacyPolicy },
      revalidate: 60  //60sec
  }

}

function PrivacyPolicy( {privacyPolicy} ) {
  return (
    <div className={styles.privacypolicy}>
                    <h1 className={styles.privacypolicy__title}>
                        {privacyPolicy.properties?.title}
                    </h1>
                    <div className="blog-description">
                <div dangerouslySetInnerHTML={{ __html: privacyPolicy.properties?.richTextContent?.markup }}></div>
            </div>
            </div>
  );
}

export default PrivacyPolicy
