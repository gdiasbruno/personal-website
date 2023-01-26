import format from 'date-fns/format'

export interface IAppProps {
}

export function Footer (props: IAppProps) {
  return (
    <div className='object-bottom flex items-center justify-center'>
      <p  className='font-extralight italic antialiased'>
      Bruno Dias |  {format(new Date(), "MMMM, yyyy")}
      </p>
    </div>
  );
}
