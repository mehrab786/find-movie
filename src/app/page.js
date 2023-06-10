import React from 'react'
import Herosection from './components/Herosection'

const page =async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return (
    <div>
      <Herosection tittle={"Lets watch Movies Togather"} imageUrl={"/home.svg"}/>
    </div>
  )
}   

export default page