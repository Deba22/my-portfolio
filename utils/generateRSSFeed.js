import fs from 'fs';
import { Feed } from 'feed';
const configManager = require('./configManager');

const config = configManager.getConfig()

export default async function generateRssFeed(blogItems) {

 const site_url = config.nextjs_domain;

 const feedOptions = {
  title: 'Blog posts | RSS Feed',
  description: 'debasish.tech Blogs | Code examples and knowledge sharing',
  id: site_url,
  link: `${site_url}/blogs`,
  image: `${site_url}/LogoHead.svg`,
  favicon: `${site_url}/favicon.ico`,
  copyright: `All rights reserved ${new Date().getFullYear()}`,
  generator: 'Feed for Blogs',
  feedLinks: {
   rss2: `${site_url}/rss.xml`,
  },
 };

 const feed = new Feed(feedOptions);
console.log('RSSFeedBlogs:',blogItems);
 blogItems.forEach((post) => {
  feed.addItem({
   title: post.properties?.title,
   id: `${site_url}${post.route.path}`,
   link: `${site_url}${post.route.path}`,
   description: post.description,
   date: new Date(post.properties?.blogDate),
  });
 });

 fs.writeFileSync('./public/rss.xml', feed.rss2());
}