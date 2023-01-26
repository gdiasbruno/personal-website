import type { MarkdownInstance } from "astro";
import { BlogPost } from "./BlogPost";

export interface IAppProps {
  posts: MarkdownInstance<Record<string, any>>[];
}

export function BlogSection (props: IAppProps) {
  const { posts } = props;
  return (
    <div className='grid place-items-center gap-4'>
    <h2 className="font-sans text-2xl font-semibold antialiased">Latest Posts</h2>
    {
      posts.map((post) => {
        return (
          <BlogPost
            title={post.frontmatter.title}
            pubDate={post.frontmatter.pubDate}
            description={post.frontmatter.description}
            link={post.url}
          />
        )
      })
    }
    
    

    <hr  className="border-transparent bg-white border-8 my-10" ></hr>
    </div>
  );
}
