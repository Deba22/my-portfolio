import { fetchItem } from '../../utils/umbracoContentDeliveryApi';
const configManager = require('../../utils/configManager');

const config = configManager.getConfig()

export default async (req, res) => {
    // Check the secret and next parameters
    // This secret should only be known to this API route and the CMS
    if (req.query.secret !== config.Draft_Mode_Secret_Token || !req.query.slug) {
      return res.status(401).json({ message: 'Invalid token' })
    }
   
    // Fetch the headless CMS to check if the provided `slug` exists
    // getPostBySlug would implement the required fetching logic to the headless CMS

    const blog = await fetchItem({pathOrId:req.query.slug})
   
    // If the slug doesn't exist prevent draft mode from being enabled
    if (!blog) {
      return res.status(401).json({ message: 'Invalid slug' })
    }

    // Enable Draft Mode by setting the cookie
    res.setDraftMode({ enable: true })
   
    //console.log('slug:',blog.route?.path);
    // Redirect to the path from the fetched post
    // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
    res.redirect(307, '/'+req.query.slug)
  }