import React from 'react';
import heroImg from "../../public/images/hero.jpg"
export interface IAppProps {
}

export function Hero (props: IAppProps) {
  return (<>
    <img
      src={heroImg}
      width="300px"
    >
    </img>
    <h2>Software reader and writer</h2>
    <p>Always learning about Software development and Machine Learning</p>
    <button>Read a text</button>
    <button>Download CV</button>
  </>
  );
}
