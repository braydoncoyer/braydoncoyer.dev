import { Article } from '@/lib/types';
import { ArticleCard } from '@/components/ArticleCard';

type Props = {
  articles: Article[];
};

export function ArticleList({ articles }) {
  return articles.map((article) => (
    <li key={article.title}>
      <ArticleCard article={article} />
    </li>
  ));
}
