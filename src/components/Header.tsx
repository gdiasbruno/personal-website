import { FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa/index";

export interface IAppProps {
}

export function Header (props: IAppProps) {
  return (
    <div className="grid grid-cols-3 w-full place-items-center mb-10">
      <div className="sm:col-span-2 h-full grid gap-2 col-span-3">
          <h1 className="font-sans text-4xl antialiased font-bold">
            Bruno G. Dias
          </h1>
          <h3 className="font-sans text-xl text-gray-400 antialiased">I read and write software professionally and for fun. 
          Always learning on Software Development and Machine Learning. 
          </h3>
          <div className="flex items-center"> 
            <a href="https://www.linkedin.com/in/bruno-goncalves-dias/" target="_blank" className="mr-4"><FaLinkedinIn size={20} /></a>
            <a href="https://twitter.com/diasgbruno" target="_blank" className="mr-4"><FaTwitter size={20} /></a>
            <a href="https://www.youtube.com/@brunodias3524" target="_blank" className="mr-4"><FaYoutube size={20} /></a>
          </div>
      </div>
      <div className="sm:grid sm:justify-end sm:w-full hidden" >
    <img
      src={"/images/hero_2_2_resize.jpg"}
      width="175px"
      className="rounded-full"
    />
      </div>
    </div>
  );
}
