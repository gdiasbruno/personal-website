export interface IAppProps {}

export function Hero(props: IAppProps) {
  return (
    <div className="grid justify-center gap-4">
      <div className="border-2 border-white p-5">
        <img src={"/images/hero.jpg"} width="500px"></img>
      </div>
      <div className="grid grid-flow-row place-items-center gap-4">
        <h2 className="font-sans text-2xl font-semibold antialiased">
          Software reader and writer
        </h2>
        <p className="text-l font-sans antialiased">
          Always learning about Software development and Machine Learning
        </p>
      </div>
    </div>
  );
}
