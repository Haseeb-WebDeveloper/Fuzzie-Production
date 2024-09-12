import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import Navbar from "@/components/global/navbar";
import { clients } from "@/lib/constant";
import CustomButton_1 from "@/components/ui/customButton_1";
import './globals.css';
import GridPattern from "@/components/magicui/animated-grid-pattern";
import { ProductImgScroll } from "@/components/global/ProductImgScroll";
import { LampContainer } from "@/components/global/lamp";
import PricingContent from "@/components/global/pricing";


export default function Home() {
  return (
    <>

 <main className="mx-auto flex-col font-twk  ">
      <Navbar />
      <section className="h-screen w-full bg-neutral-950 rounded-md  relative flex flex-col items-center justify-center">
        <div>
          <GridPattern 
            className="opacity-30" 
            width={10} 
            height={10} 
            x={-1} 
            y={-1} 
            strokeDasharray={1} 
            numSquares={200} 
            maxOpacity={0.2} 
            duration={1} 
            repeatDelay={0.5} 
          />
          <div className="z-10 flex flex-col justify-center mx-auto py-16 mt-16 text-white gap-2">
            <h2 className="text-4xl md:text-6xl font-[600] mb-4 text-center max-w-2xl tracking-tight">Save Time & Money with AI-Powered Solution</h2>
            <p className="text-lg md:text-xl text-center font-twk max-w-2xl mx-auto text-neutral-400 mb-4">Boost productivity and unlock growth with intelligent solutions.</p>
            <CustomButton_1 text="Start Now" />
          </div>
        </div>
      </section>

      <section className=" mx-auto w-full">
        <InfiniteMovingCards 
          className="bg-[#131313] mx-auto w-full"
          items={clients}
          direction="right"
          speed="slow"
        />
      </section>

      <section id="showcaseProductPic" className="w-full bg-neutral-950 rounded-md relative flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-28">
        <ProductImgScroll/>  
      </section>

      <section className="">
        <LampContainer >
          <PricingContent/>
        </LampContainer>
      </section>

      </main>
    </>
  );
}