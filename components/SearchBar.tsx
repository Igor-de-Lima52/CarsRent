"use client"

import { useState } from 'react'
import { SearchManufacturer } from './'

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("")
  
  const handleSearch = () => {}

  function changeManufacturer(value: string){
    setManufacturer(value)
  }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer 
          manufacturer={manufacturer}
          setManufacturer={changeManufacturer}
        />
      </div>
    </form>
  )
}

export default SearchBar
