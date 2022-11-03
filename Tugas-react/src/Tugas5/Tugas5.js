import React, { useEffect, useState } from "react"
import axios from "axios"
import { Table } from "flowbite-react"

 

const Tugas5 = () => {
  const [data, setData] = useState(null)

  const hitung = (nilai) => {
    if (nilai >= 80) {
      return (<div className="bg-lime-400 flex justify-center">
      A
    </div>)
    }
    if (nilai >= 70 && nilai < 80) {
      return (<div className="bg-yellow-300 flex justify-center">
      B
    </div>)
    }
    if (nilai >= 60 && nilai < 70) {
      return (<div className="bg-orange-500 flex justify-center">
      C
    </div>)
    }
    if (nilai >= 50 && nilai < 60) {
      return (<div className="bg-red-700 flex justify-center  text-teal-50">
        D
      </div>)
    }
    if (nilai < 50) {
      return (<div className="bg-red-700 flex justify-center text-teal-50">
      E
    </div>) 
    }
  }

  useEffect(() => {

    axios.get("https://backendexample.sanbercloud.com/api/student-scores")
  .then((res)=>{
    console.log(res.data)
    setData(res.data)
  })
  .catch((erorr) => {
  })

  }, [])
  
return (<div className="bg-yellow-300">
<Table striped={true}>
  <Table.Head className=" bg-yellow-300">
    <Table.HeadCell >
      No
    </Table.HeadCell>
    <Table.HeadCell className="bg-yellow-300">
      Mata kuliah
    </Table.HeadCell>
    <Table.HeadCell className="bg-yellow-300">
      Nama Mahasiswa
    </Table.HeadCell>
    <Table.HeadCell className=" bg-yellow-300">
      Nilai
    </Table.HeadCell>
    <Table.HeadCell className=" bg-yellow-300 text-center">
      Predikat
    </Table.HeadCell>    

  </Table.Head>
  <Table.Body className="divide-y">
 {data !== null && data.map((element ,i)=>(
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell>
      {i +1}
    </Table.Cell>
    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      {element.course}
    </Table.Cell>
    <Table.Cell>
     {element.name}
    </Table.Cell>
    <Table.Cell>
     {element.score}
    </Table.Cell>
    <Table.Cell class = "py-4 px-6">
      {hitung(element.score)}
    </Table.Cell>
  </Table.Row>
 ))}
  </Table.Body>
</Table>
</div>)}

export default Tugas5