export interface IAppProps {
}

export function Hero (props: IAppProps) {
  return (
  <div className="grid place-items-center gap-4">
    <div className="border-white border-2 p-5">
    <img
      src={"/images/hero.jpg"}
      width="300px"
    >
    </img>
    </div>
    <div className="grid place-items-center grid-flow-row gap-4">
    <h2 className="font-sans text-2xl antialiased font-semibold">Software reader and writer</h2>
    <p className="font-sans text-l antialiased">Always learning about Software development and Machine Learning</p>
    <hr  className="border-transparent bg-white border-8 my-10" ></hr>
    </div>
  </div>
  );
}
