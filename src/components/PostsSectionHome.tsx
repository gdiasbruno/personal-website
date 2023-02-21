import type { MarkdownInstance } from "astro";
import { PostPreview } from "./PostPreview";

export interface IAppProps {
  posts: MarkdownInstance<Record<string, any>>[];
}

export function PostsSectionHome (props: IAppProps) {
  const { posts } = props;
  return (
    <div className='grid gap-4'>
    <h2 className="font-sans text-3xl font-semibold antialiased">Latest Posts</h2>
    {
      posts.map((post) => {
        return (
          <PostPreview
            key={post.frontmatter.title}
            title={post.frontmatter.title}
            pubDate={post.frontmatter.pubDate}
            description={post.frontmatter.description}
            link={post.url}
          />
        )
      })
    }
    </div>
  );
}
