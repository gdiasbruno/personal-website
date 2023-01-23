export interface IAppProps {
}

export function BlogPost (props: IAppProps) {
  return (
    <div className="grid grid-flow-row gap-4 border-2 p-5 max-w-md">
      <h3 className="text-xl font-semibold antialiased">Should we talk less about REST & RESTful APIs?</h3>
      <p className="italic antialiased">October, 2022</p>
      <p className="text-base font-light antialiased">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <a className="justify-self-end">Go to post</a>
    </div>
  );
}
