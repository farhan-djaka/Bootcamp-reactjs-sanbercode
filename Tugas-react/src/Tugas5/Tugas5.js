import React, { useEffect, useState } from "react"
import axios from "axios"
import { Table } from "flowbite-react"

 

const Tugas5 = () => {
  const [data, setData] = useState(null)

  const hitung = (nilai) => {
    if (nilai >= 80) {
      return "A njay"
    }
    if (nilai >= 70 && nilai < 80) {
      return "B aik"
    }
    if (nilai >= 60 && nilai < 70) {
      return "C akep"
    }
    if (nilai >= 50 && nilai < 60) {
      return "D on't give up"
    }
    if (nilai < 50) {
      return "E scape from here quickly"
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
  
return (
<Table striped={true}>
  <Table.Head className="bg bg-red-400">
    <Table.HeadCell>
      No
    </Table.HeadCell>
    <Table.HeadCell>
      Mata kuliah
    </Table.HeadCell>
    <Table.HeadCell>
      Nama Mahasiswa
    </Table.HeadCell>
    <Table.HeadCell>
      Nilai
    </Table.HeadCell>
    <Table.HeadCell>
      Predikat
    </Table.HeadCell>



    
    <Table.HeadCell>
      <span className="sr-only">
        Edit
      </span>
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
</Table>)}

export default Tugas5