// app/page.tsx

import Header from "@/src/component/custom/Header";
import Header2 from "@/src/component/custom/Header2";
import Image from "next/image"
import { AspectRatio } from "@/src/component/ui/aspect-ratio"
import './globals.css';
import BentoGridDemo from "@/src/component/custom/BentoGridDemo"
import { Title } from "../component/custom/Title";
import RootLayout from "@/src/app/layout";


export default function HomePage() {

  return (
    <>
    <RootLayout>
    <Header/>
    <Title></Title>
    <div>hi</div>
    </RootLayout>
    

    
        
    </>
  );
}
