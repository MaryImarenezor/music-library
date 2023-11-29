import { useState, useEffect } from "react";
import Gallery from "./Components/Gallery/Gallery";
import SearchBar from "./Components/SearchBar";

function App() {

  const [search, setSearch] = useState("")
  const [message, setMessage] = useState("Search for Music")
  const [data, setData] = useState([])


  useEffect (() => {
  if(search) {
      const fetchData = async () => {
      const url = encodeURI('https://itunes.apple.com/search?term=${search}')
      const response = await fetch(url)
      const data = await response.json()
      //removable
      console.log(data)
      
      if(data.results.length > 0) {
        setData(data.results)
      } else {
        setData([])
        setMessage("Not Found")
      }
    }

    fetchData()
  }
}, [search])

  
  //when this fires, the data is fetched
  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }

  return (
    //passing handleSearch and data as a prompt
    <div>
      <SearchBar handleSearch={handleSearch} />
      {message}
      <Gallery data={data}/>
    </div>
  )
}

export default App;



