import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders/SectionHeaders";
export default function HomeMenu(){
    return(
        <section className="">
            <div className="absolute  left-0 right-0 w-full
            justify-start transition-all hover:shadow-md 
             hover:shaow-black/25">
                <div className="relative left-0 -top-[80px] text-left 
                -z-10">
                    <Image src={"/food.png"} width={109} height={189} alt={'food'}/>
                </div>
                <div className="absolute right-0 -top-[90px] -z-10">
                    <Image src={"/food.png"} width={119} height={125} alt={'food'}/>
                </div>
            </div>
            <div className="text-center mb-4">
                <SectionHeaders subHeader={'checkout'}
                mainHeader={'Menu'}/>
            </div>
            <div className="grid grid-cols-3 gap-4">
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>

            </div>
        </section>

    );
}