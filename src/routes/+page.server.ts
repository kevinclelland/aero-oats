

import type { Post } from '$lib/types';
import { XMLParser } from 'fast-xml-parser';

const parseXml = (rawRssData: string) => {
  const parser = new XMLParser();
  return parser.parse(rawRssData);
};

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }: any) {
  const response = await fetch('api/posts');
	const posts: Post[] = await response.json();
  
  const RSS_URL = `https://rss.beehiiv.com/feeds/agjV8nDBm0.xml`;
  const newsletters = fetch(RSS_URL)
    .then((response: { text: () => any; }) => response.text())
    .then((rawXml: string) => parseXml(rawXml).rss.channel.item);

    const TRI247_URL = `https://www.tri247.com/feed`;
    const newsitems = fetch(TRI247_URL)
      .then((response: { text: () => any; }) => response.text())
      .then((rawXml: string) => parseXml(rawXml).rss.channel.item);

  return { newsletters, posts, newsitems };
  
};



