import Image from "next/image";

const About = () => {
    return (
        <div>
            <h1>About</h1>
         <div className="relative w-5/12 aspect-[4/4] bg-amber-500">
  <Image
    src="/extra/food-cutt.png"
    alt="foods"
    fill
    className="object-cover"
  />
</div>
             <div className="flex justify-between">
                <div>
                    sd
                </div>
                <div
                 className="relative w-5/12 aspect-[4/4]  ">
                    <Image src={'/extra/cc.png'} alt="food" fill className="object-cover shadow-2xl" />
                </div>
            </div>
        </div>
    );
};

export default About;