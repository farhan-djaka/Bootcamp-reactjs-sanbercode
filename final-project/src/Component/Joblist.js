
import React, { useState } from "react"
import { useEffect } from "react"
import axios from "axios"


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
  
  <div className="mt-0 m:mt-7 mb-9 flex justify-center /bg-gray-800">


<div className="w-auto mb-9  grid-cols-3  p-1
sm:grid-flow-cols sm:grid-flow-rows sm:overflow-x-auto sm:w-1/2 sm:h-auto sm:grid grid-rows-3 

">
  

      {data !== null && data.map((res) => {
        return (
          <>
          <div>

              <div className="mx-10 my-5 sm:my-0 bg-white max:h-64 sm:mx-0 gap-y-10 rounded-xl  overflow-y-auto sm:shadow-lg shadow-slate-900 shadow-2xl sm:shadow-slate-500 text-cilik text-ellipsis px-4 pt-4 pb-10 ">
                <div className="flex justifty-start gap-y-7 bg-blue-500 rounded-xl text-white">
                  <img className="w-12 sm:w-16 h-fit p-2" src={res.company_image_url} alt = "inu"/>
                  <div className="p-2 text-center my-auto">{res.company_name}</div>
                </div>
                <div className=""> {res.title}</div>
                
                <div className=""> Method : {res.job_type}</div>
                  <div className="p-0.5 gap-y-7 bg-green-300">
                  <div className="text-cilik "> require </div>
                <div className="max-h-12 overflow-y-auto">{res.job_qualification}</div>
                </div>
                  <div className="">duration work : {res.job_tenure}</div>
                  <div className="text text-center bg-amber-400"> kuota {res.job_status}</div>
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