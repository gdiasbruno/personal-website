import format from 'date-fns/format'
import { FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
export interface IAppProps {
}

export function Footer (props: IAppProps) {
  return (
    <div className='grid grid-flow-row gap-4'>
      <div className='object-bottom flex items-center justify-center'>
        <p  className='font-light italic antialiased'>
        Bruno Dias © { format(new Date(), "MMMM, yyyy")}
        </p>
      </div>
      <div className='grid grid-flow-col justify-center gap-3'> 
        <a href="https://www.linkedin.com/in/bruno-goncalves-dias/" target="_blank"><FaLinkedinIn /></a>
        <a href="https://twitter.com/diasgbruno" target="_blank"><FaTwitter /></a>
        <a href="https://www.youtube.com/@brunodias3524" target="_blank"><FaYoutube /></a>
      </div>
    </div>
  );
}
