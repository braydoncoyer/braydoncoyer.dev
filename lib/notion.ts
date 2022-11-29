import { Client } from '@notionhq/client';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import slugify from 'slugify';

const notion = new Client({
  auth: process.env.NOTION_SECRET
});

export const getToolboxData = async (databaseId) => {
  const response: QueryDatabaseResponse = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: 'Name',
        direction: 'ascending'
      }
    ]
  });

  const results = [];

  response.results.forEach((item: any) => {
    results.push({
      title: item.properties.Name.title[0].plain_text,
      types: item.properties.Type.multi_select.map((x) => x.name),
      description: item.properties.Description.rich_text[0].plain_text,
      url: item.properties.URL?.url
    });
  });

  return results;
};

export const getChangelogData = async (databaseId) => {
  const response: QueryDatabaseResponse = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: 'Date',
        direction: 'descending'
      }
    ]
  });

  let completed = [],
    active = [],
    backlog = [];

  response.results.forEach((item: any) => {
    switch (item.properties.Status.select.name) {
      case 'Completed':
        completed = turnIntoChangelogItem(item, completed);
        break;
      case 'Backlog':
        backlog = turnIntoChangelogItem(item, backlog);
        break;
      case 'Active':
        active = turnIntoChangelogItem(item, active);
        break;
      default:
        break;
    }
  });

  return {
    completed,
    active,
    backlog
  };
};

export const getAllArticles = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [
        {
          property: 'Status',
          select: {
            equals: '✅ Published'
          }
        },
        {
          property: 'Status',
          select: {
            equals: '✏️ Draft'
          }
        }
      ]
    },
    sorts: [
      {
        property: 'Published',
        direction: 'descending'
      }
    ]
  });

  return response.results;
};

export const getAllArticlesByTag = async (databaseId, tag) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'tags',
      multi_select: {
        contains: tag
      }
    },
    sorts: [
      {
        property: 'Published',
        direction: 'descending'
      }
    ]
  });

  return response.results;
};

export const getAllArticleTags = async (databaseId) => {
  let tags = [];
  const articles: any = await getAllArticles(databaseId);

  articles.forEach((article) => {
    if (article.object === 'page') {
      article.properties?.tags?.multi_select.forEach((tag) => {
        if (!tags.includes(tag.name)) {
          tags.push(tag.name);
        }
      });
    }
  });

  return tags;
};

export const getPublishedArticles = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Public',
      checkbox: {
        equals: true
      }
    },
    sorts: [
      {
        property: 'Published',
        direction: 'descending'
      }
    ]
  });

  return response.results;
};

export const getPageInfo = async (pageId) => {
  const response = await notion.blocks.children.list({
    block_id: pageId
  });

  return response.results;
};

export const getSponsoredArticles = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Sponsor',
      relation: {
        is_not_empty: true
      }
    }
  });

  return response.results;
};

export const convertToArticleList = (tableData: any) => {
  let tags: string[] = [];
  const articles = tableData.map((article: any) => {
    return {
      title: article.properties.Name.title[0].plain_text,
      tags: article.properties.tags.multi_select.map((tag) => {
        if (!tags.includes(tag.name)) {
          const newList = [...tags, tag.name];
          tags = newList;
        }
        return { name: tag.name, id: tag.id };
      }),
      coverImage:
        article.properties?.coverImage?.files[0]?.file?.url ||
        article.properties.coverImage?.files[0]?.external?.url ||
        'https://via.placeholder.com/600x400.png',
      publishedDate: article.properties.Published?.date?.start,
      summary:
        article.properties?.Summary.rich_text[0]?.plain_text ??
        'Placeholder summary',
      isPublic: article.properties?.Public.checkbox
    };
  });

  return { articles, tags };
};

export const getBlocks = async (blockId) => {
  const response = await notion.blocks.children.list({
    block_id: blockId
  });

  return response.results;
};

export const getMoreArticlesToSuggest = async (
  databaseId,
  currentArticleTitle
) => {
  let moreArticles;

  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        {
          property: 'Status',
          select: {
            equals: '✅ Published'
          }
        },
        {
          property: 'Name',
          text: {
            does_not_equal: currentArticleTitle
          }
        }
      ]
    }
  });

  moreArticles = response.results.map((article: any) => {
    return {
      title: article.properties.Name.title[0].plain_text,
      coverImage:
        article.properties?.coverImage?.files[0]?.file?.url ||
        article.properties.coverImage?.files[0]?.external?.url ||
        'https://via.placeholder.com/600x400.png',
      publishedDate: article.properties.Published.date.start,
      summary: article.properties?.Summary.rich_text[0]?.plain_text
    };
  });

  shuffleArray(moreArticles);

  return moreArticles.slice(0, 3);
};

export const getArticlePage = (data, slug) => {
  const response = data.find((result) => {
    if (result.object === 'page') {
      const resultSlug = slugify(
        result.properties.Name.title[0].plain_text
      ).toLowerCase();
      return resultSlug === slug;
    }
    return false;
  });

  return response;
};

export function shuffleArray(array: Array<any>) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    // Pick a random element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ];
  }
  return array;
}

function turnIntoChangelogItem(item: any, array: any[]) {
  const updatedChangelogList = [
    ...array,
    {
      title: item.properties.Name.title[0].plain_text,
      description: item.properties.Description.rich_text[0].plain_text,
      date: item.properties.Date?.date?.start
    }
  ];
  return updatedChangelogList;
}
