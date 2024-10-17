import BKG1 from "@public/images/bkg1.jpg"

import Dropdown from "@components/Dropdown"
import SearchBar from "@components/SearchBar"
import { CiLocationOn } from "react-icons/ci";



export default function FindPlacesContainer() {
  const schoolList : string[] = ["UC Santa Cruz", "UC Berkeley", "UCLA", "UC Riverside", "UC Santa Barbara", 
    "UC Davis", "UC San Diego", "UC Irvine"]

  return (
    <div className="flex flex-row justify-between items-center bg-blue-500 relative h-[45vh] w-full text-3xl"
      style={{
        backgroundImage: `url(${BKG1.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >

      <div className="flex flex-col justify-center items-center m-20 w-1/2">
        <b className="text-white text-xl">Select a school</b>
        <Dropdown color={"#013c6c"} elements={schoolList}/>
        
      </div>
      
      <div className="flex flex-col justify-center items-center m-20 w-1/2">
        <b className="text-white text-xl pr-12">Find a specific location</b>
        <SearchBar>
          <CiLocationOn className="text-4xl text-white hover:text-[#d4d2d2] cursor-pointer"/>
        </SearchBar>
      </div>
      
    </div>
  );
}


