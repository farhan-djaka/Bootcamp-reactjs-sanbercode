
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
  <div className="flex justify-start  bg-gray-800  ">
    <div className="w-1/3 bg-gray-800">
                  <img
                    src={Cika}
                    alt="ika"
                  />
            </div>

  <div className="grid grid-rows-2 grid-flow-col gap-1 justify-start bg-gray-800 p-10">
    

        {data !== null && data.map((res) => {
          return (
            <>
            <div>
                <div className="bg-gradient-to-r from-yellow-300
                to-orange-500 rounded-xl p-5 m ">
                  <div> {res.title}</div>
                  <div> Method : {res.job_type}</div>
                  <div>{res.job_qualification}</div>
                  <div>{res.job_tenure}</div>
                  <div>{res.job_status}</div>
                  <div>{res.company_name}</div>
                  <div>{res.company_image_url}</div>
                  <div>{res.company_city}</div>
                  <div>{res.salary_min}</div>
                  <div>{res.salary_max}</div>
                  <div> For {res.job_status} </div>
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