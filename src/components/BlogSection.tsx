import { BlogPost } from "./BlogPost";

export interface IAppProps {
}

export function BlogSection (props: IAppProps) {
  return (
    <div className='grid place-items-center gap-4'>
    <h2 className="font-sans text-2xl font-semibold antialiased">Recent Posts</h2>
    <BlogPost />
    <hr  className="border-transparent bg-white border-8 my-10" ></hr>
    </div>
  );
}
