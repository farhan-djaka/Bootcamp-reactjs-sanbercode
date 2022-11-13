import React from "react"

import Diamond from '../asset/DIamondboy.png'
import logo from '../asset/Logo IFS.png'


const Content = () => {
    return (<>
<content>
        <div className="flex justify-center
        p-4" >
        <div className="hidden sm:block rounded-xl bg-yellow-300 w-auto shadow-stone-900
        sm:w-1/12 h-fit shadow-xl sm:shadow-slate-600 sm:">
                  <img
                    src={logo}
                    alt="ika"
                  />
    </div>
        <div className="my-auto flex-col w-auto sm:w-1/2 p-5 rounded-lg">
      <h1 className=" whitespace-nowrap text-xl rounded-t-2xl sm:rounded-t-lg font-semibold shadow-xl sm:shadow-slate-600 sm: mx-auto bg-yellow-300 p-5">IFS-JOB CONNECT</h1>
      <div className="shadow-xl sm:shadow-slate-600 bg-green-00 sm:bg-gradient-to-b from-white via-white to-green-300 p-3 rounded-b-2xl 
      sm:px-16 sm:py-5 sm:h-fit ">
        <div className="text-ellipsis ">
        
Akses Pendidikan Bertujuan Untuk Meningkatkan Taraf Kehidupan

Setelah lulus dari IFS Academy, kamu dibantu untuk merencanakan karier dengan dicarikan pekerjaan yang sesuai buatmu. Job Connect  juga terbuka untuk experienced talents.

        </div>
        <div className="text-sm my-6 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        </div>
    </div>
      </div>

      <div className ="flex justify-center shadow-inner p-4" >
      <div className="my-auto flex-col w-auto sm:w-1/2 p-5 rounded-lg ">
      <h1 className=" whitespace-nowrap text-xl rounded-t-2xl shadow-xl sm:shadow-slate-600 sm:rounded-t-lg font-semibold mx-auto bg-yellow-300 p-5">IFS-JOB CONNECT</h1>
      <div className=" p-3 rounded-b-2xl shadow-xl bg-green-200 sm:bg-gradient-to-b from-white via-white to-green-500 sm:shadow-slate-600 sm:
      sm:px-16 sm:py-5 sm:h-fit ">
        <div className="text-ellipsis max-h-56 overflow-y-auto sm:h-fit  ">
        
        Job Connect is a 100% Australian Family Owned Recruitment Company with a proven reputation in providing quality staffing solutions across both the Blue and White collar sectors, from General Labour Hire to Professional placements. Established in 2007 Job Connect is focused on our clients' requirements by listening to their needs and then exceeding their expectations.

        Our Values:
          • Relationship Service
          • Integrity
          • Encouragement
          • Professionalism
          • Courage

        </div>
        <div className="text-sm my-6 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        </div>
     
    </div>
    
        <div className="hidden sm:block shadow-xl sm:shadow-slate-700 bg-yellow-300 w-auto h-fit sm:w-1/5  rounded-xl">
                  <img
                    src={Diamond}
                    alt="rika"
                  />
    </div>

      </div>


</content>
</>    
)
}

export default Content