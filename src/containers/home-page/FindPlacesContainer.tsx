"use client";
import Image from "next/image";
import BKG1 from "@public/images/bkg1.jpg"
import RENT1 from "@public/images/rent1.jpg";
import RENT2 from "@public/images/rent2.jpg";

import Dropdown from "@components/Dropdown"
import SearchBar from "@components/SearchBar"
import { CiLocationOn } from "react-icons/ci";

import React, {useState} from "react";

export default function FindPlacesContainer() {
  const [query, setQuery] = useState('');
  const [loc, setLoc] = useState<string[]>([]);

  const handleSearch = async () => {
    const response = await fetch(`/api/location?loc=${query}`);
    
    if (!response.ok) {
      console.error('Failed to fetch location:', response.statusText);
      return;
    }
    const data = await response.json();
    setLoc(data.location);
  }

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
        <Dropdown label={"......"} color={"#ffffff"}/>
        
      </div>
      
      <div className="flex flex-col justify-center items-center m-20 w-1/2">
        <b className="text-white text-xl pr-12">Find a specific location</b>
        <SearchBar
          onInputChange={(e) => setQuery(e.target.value)}
          children={
            <button onClick={handleSearch}>
              <CiLocationOn className="text-4xl text-white hover:text-[#d4d2d2] cursor-pointer"/>
            </button>
          } 
        />

        {loc.length > 0 && (
          <div className="mt-4 text-white">
            <ul>
              {loc.map((ll, index) => (
                <li key={index}>{ll}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
    </div>
  );
}
