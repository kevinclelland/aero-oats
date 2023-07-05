import { XMLParser } from 'fast-xml-parser';

const parseXml = (rawRssData: string) => {
  const parser = new XMLParser();
  return parser.parse(rawRssData);
};

/** @type {import('./$types').PageLoad} */
export const load = () => {
  const RSS_URL = `https://rss.beehiiv.com/feeds/agjV8nDBm0.xml`;
  const newsletters = fetch(RSS_URL)
    .then((response) => response.text())
    .then((rawXml) => parseXml(rawXml).rss.channel.item);
  return { newsletters };
};