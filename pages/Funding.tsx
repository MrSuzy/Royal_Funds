// app/page.tsx

import Header from "@/src/component/custom/Header";
import Header2 from "@/src/component/custom/Header2";
import Image from "next/image"
import { AspectRatio } from "@/src/component/ui/aspect-ratio"
import './globalss.css';
import BentoGridDemo from "@/src/component/custom/BentoGridDemo"
import RootLayout from "@/src/app/layout";


export default function Funding() {

  return (
    <>
    <RootLayout>
    <Header/>

        <Image
            src="/Chain-Funds (2).svg"
            alt="Photo by Drew Beamer"
            width={100}
            height={100}
            className="static h-full w-full left-0 right-0 text-transparent"
          />


          


    <Header2/>
      <div className="flex justify-center items-center mx-auto max-w-screen-lg p-4"> 
        <BentoGridDemo/>
      </div>
      <div className="flex justify-center items-center mx-auto max-w-screen-lg p-4"> 
        <BentoGridDemo/>
      </div>
      </RootLayout>
    </>
  );
}
