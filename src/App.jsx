import GetRandom from "./utils/GetRandom"
import data from "./assets/data/spaceCuriosities.json"
import StructureQuote from "./components/StructureQuote"
import { useState } from "react"
import "./app.css"




function App() {
  const wallpapers = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg", "image10.jpg", "image11.jpg", "image12.jpg", "image13.jpg", "image14.jpg", "image15.jpg", "image16.jpg", "image17.jpg", "image18.jpg", "image19.jpg", "image20.jpg"];
  const dataText = GetRandom(data)

  const [text, setText] = useState(dataText)
  const [wallpaper, setWallpaper] = useState(wallpapers[15]);

  
  const reload = () => {
    let newText = GetRandom(data)
    let newWallpaper = GetRandom(wallpapers)



    while (text === newText) {
      newText = GetRandom(data)
    }

    while (wallpaper === newWallpaper) {
      newWallpaper = GetRandom(wallpapers)
    }

    setText(newText)
    setWallpaper(newWallpaper)
  }
  
  return (
    <div className="app" style={{ backgroundImage: `url(/images/${wallpaper})` }}>
      <StructureQuote dataText={text} reload={reload}/>
    </div>
  )
}

export default App
