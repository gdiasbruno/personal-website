export interface IAppProps {
  key: string;
  title: string;
  pubDate: string;
  description: string;
  link?: string;
}

export function PostPreview (props: IAppProps) {
  const { title, pubDate, description, link } = props;
  return (
    <div className="grid grid-flow-row gap-4 border-2 p-5 max-w-md">
      <h3 className="text-xl font-semibold antialiased">{title}</h3>
      <p className="italic antialiased">{pubDate}</p>
      <p className="text-base font-light antialiased">{description}</p>
      <a className="justify-self-end underline" href={link}>Go to post</a>
    </div>
  );
}
