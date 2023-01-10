import format from 'date-fns/format'

export interface IAppProps {
}

export function Footer (props: IAppProps) {
  return (
    <>{format(new Date(), "MMMM, yyyy")}</>
  );
}
