<script lang="ts">

import { XMLParser } from 'fast-xml-parser';

const parseXml = (rawRssData: string) => {
  const parser = new XMLParser();
  return parser.parse(rawRssData);
};

/** @type {import('./$types').PageLoad} */
export const load = () => {
  const RSS_URL = `https://rss.beehiiv.com/feeds/agjV8nDBm0.xml`;
  const posts = fetch(RSS_URL)
    .then((response) => response.text())
    .then((rawXml) => parseXml(rawXml).rss.channel.item);
  return { posts };
};

    /** @type {import('./$types').PageData} */
    export let data: any;

</script>

<div class="p-4">
    {#each data.posts as post}
    <li>
      <a target="_blank" href={post.link} rel="noreferrer">
        {post.title}
      </a>
    </li>
  {/each}
  </div>
