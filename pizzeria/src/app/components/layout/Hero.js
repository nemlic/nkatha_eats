import Image from "next/image";
import Right from "../icons/Right";
export  default function Hero(){
    return(
        <>
        <section className="hero mt-4">
            <div className="py-12">
            <h1 className="text-4xl font-semibold">
                Everything<br/> 
                is better with<br/>
            <span className="text-primary"> 
                Food for Soul
            </span>
            </h1>
            <p className="my-6 text-gray-500 text-sm">
                Dive into a vast collection of mouthwatering 
                recipes from around the globe. 
                Whether you're a seasoned chef or just 
                starting your culinary adventure,
                we have something for everyone.
            </p>
            <div className="flex gap-4 text-sm">
                <button className="bg-primary flex gap-3 text-white 
                rounded-full px-4 py-2 uppercase flex items-center">
                Order now
                <Right/>
                </button>
                <button className="flex gap-2 py-2 text-gray-600
                font-semibold">
                Learn more
                <Right/>
                </button>
            </div>
            </div>
            <div className="relative max-h-auto max-h-30">
            <Image src={'/plate.png'} layout={'fill'} 
             alt={'plate'} />
            </div>
        </section>
        </>
    );
}