export interface IAppProps {
  key: string;
  title: string;
  pubDate: string;
  description: string;
  link?: string;
}

export function PostPreview(props: IAppProps) {
  const { title, pubDate, description, link } = props;
  return (
    <a href={link}>
      <div className="grid w-full grid-flow-row gap-4 border-2 p-5">
        <h3 className="text-2xl font-semibold antialiased">{title}</h3>
        <p className="italic text-gray-400 antialiased">{pubDate}</p>
        <p className="text-base antialiased">{description}</p>
      </div>
    </a>
  );
}
