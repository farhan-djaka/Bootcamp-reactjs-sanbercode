
import React, { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import Cika from '../asset/Cika_Cika_3.png'


const Joblist = () => {
    const [data, setData] = useState(null)
   
useEffect(() => {
  
  axios.get("https://dev-example.sanbercloud.com/api/job-vacancy" )
.then ((res) => {
  setData([...res.data.data])

})
.catch((error)=> {

})

}, [])

console.log(data)


return (
  
  <div className="mt-7 flex justify-center //bg-gray-800//  ">
  <div className="w-1/4 bg-yellow-300 rounded-3xl shadow">
                <img
                  src={Cika}
                  alt="ika"
                />
          </div>

<div className="ml-11 w-1/2 grid grid-rows-2 grid-flow-col gap-1 bg-gay-800">
  

      {data !== null && data.map((res) => {
        return (
          <>
          <div>

              <div className=" bg-transparent rounded-xl h-36 overflow-y-auto shadow-xl text-cilik text-ellipsis p-2 ">
                <div className="flex justifty-start gap-y-7 bg-blue-500 rounded-xl text-white">
                  <img className="w-16 h-fit p-2" src={res.company_image_url} alt = "image"/>
                  <div className="text-center text-xm my-auto">{res.company_name}</div>
                </div>
                <div className=""> {res.title}</div>
                
                <div className=""> Method : {res.job_type}</div>
                  <div className="p-0.5 gap-y-7 bg-green-300">
                  <div className="text-cilik"> require </div>
                <div className="text-sm">{res.job_qualification}</div>
                </div>
                  <div className="">{res.job_tenure}</div>
                  <div className="">{res.job_status}</div>
                  <div className="bg-green-500 text-white text-center">{res.company_city}</div>
              </div>
          </div>
 
          </>

          )
        })}

        

           
    </div>

  </div>
)

}


export default Joblist