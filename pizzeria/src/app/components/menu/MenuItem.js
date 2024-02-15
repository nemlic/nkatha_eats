export default function MenuItem(){
    return(
        <div className="bg-gray-200 p-4 rounded-lg text-centre
        hover:bg-white">
            <div className="text-center">
                <img src="/plate.png " className="max-h-auto max-h-24 block mx-auto" 
                  alt="pizza"/>
            </div>
            <h4 className="font-semibold text-xl my-3">
                Pepperoni Pizza
            </h4>
            <p className="text-gray-500 text-sm">
                Pepperoni naturally sourced
            </p>
            <button className="bg-primary rounded-full 
            px-16  py-2 text-white mt-3">
                Add to cart $3
            </button>
        </div>
    );
 }