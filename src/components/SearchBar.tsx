

type SearchBarProps = {
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children? : React.ReactElement
}

export default function SearchBar({onInputChange, children} : SearchBarProps) {
    return (
      <span className="inline-flex items-center justify-center">
        <input className="rounded-md inline-flex px-2 h-8 outline-none text-base text-black w-[40vw] hover:text-[#d4d2d2]" 
          type="search" 
          onChange={onInputChange}
          placeholder="Enter an address, neighborhood, city, or ZIP code"
          
        />
  
        {children}

      
      </span>
         
      
        
        
    )
}