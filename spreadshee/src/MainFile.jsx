import { useState } from "react";
import { Heading } from "./Heading";
import { Sheet } from "./SheetsData";

export function MainFile(){

   const [colors , setSelectedColor] = useState({})
   const [sheet , selectedSheet] = useState(null)

   const ColorChanger = (color)=>{
    if(sheet){
      setSelectedColor((prvColor)=>({
        ...prvColor,
        [sheet] : color
      }))
    }
   }

    return(
        <>

        <Heading></Heading>

        <div className="h-[auto] w-full flex justify-center items-center relative top-[100px]">

         <div className="flex items-center justify-center h-[100px] w-[300px] gap-10 z-20">
            <button  className="hover:cursor-pointer p-3 text-white font-bold rounded-lg bg-red-600" onClick={()=>ColorChanger("Red")}>Red</button>
            <button className="hover:cursor-pointer p-3 text-white font-bold rounded-lg bg-green-500"  onClick={()=>ColorChanger("Green")}>Green</button>
            <button className="hover:cursor-pointer p-3 text-white font-bold rounded-lg bg-blue-600"  onClick={()=>ColorChanger("Blue")}>Blue</button>
         </div>

         </div>

         <div className="flex flex-col h-screen w-full items-center justify-center relative bottom-[80px] space-y-11">

          {Array(4)
          .fill(0)
          .map((_,rowIndex)=>(
            <div>
                <div key={rowIndex} className="flex flex-row gap-7 w-[auto]">
                  {Array(4)
                  .fill(0)
                  .map((_,colIndex)=>{
                    const uniqueId = `${rowIndex}-${colIndex}`
                    return(
                      <Sheet uniqueId={uniqueId} selectedColor={colors[uniqueId]} selectedSheet={selectedSheet}></Sheet>
                    )
                  })
                }
                </div>
            </div>
          ))
          }


         </div>
        </>
    )
}