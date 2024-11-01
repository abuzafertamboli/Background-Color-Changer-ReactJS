import { useState } from "react"


function App() {
  const [color, setColor] = useState("black");

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="flex justify-center flex-wrap fixed inset-x-0 bottom-12 px-2">
        <div className="flex justify-center flex-wrap gap-3 shadow-lg bg-[#e0e0e0] px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-full text-[#fff]" style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>Red</button>
          <button className="outline-none px-4 py-1 rounded-full text-[#fff]" style={{ backgroundColor: "green" }} onClick={() => setColor("green")}>Green</button>
          <button className="outline-none px-4 py-1 rounded-full text-[#fff]" style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")}>Blue</button>
          <button className="outline-none px-4 py-1 rounded-full text-[#fff]" style={{ backgroundColor: "olive" }} onClick={() => setColor("olive")}>Olive</button>
          <button className="outline-none px-4 py-1 rounded-full text-[#fff]" style={{ backgroundColor: "gray" }} onClick={() => setColor("gray")}>Gray</button>
          <button className="outline-none px-4 py-1 rounded-full text-[#000]" style={{ backgroundColor: "yellow" }} onClick={() => setColor("yellow")}>Yellow</button>
          <button className="outline-none px-4 py-1 rounded-full text-[#000]" style={{ backgroundColor: "pink" }} onClick={() => setColor("pink")}>Pink</button>
          <button className="outline-none px-4 py-1 rounded-full text-[#fff]" style={{ backgroundColor: "purple" }} onClick={() => setColor("purple")}>Purple</button>
          <button className="outline-none px-4 py-1 rounded-full text-[#000]" style={{ backgroundColor: "white" }} onClick={() => setColor("white")}>White</button>
          <button className="outline-none px-4 py-1 rounded-full text-[#fff]" style={{ backgroundColor: "black" }} onClick={() => setColor("black")}>Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
