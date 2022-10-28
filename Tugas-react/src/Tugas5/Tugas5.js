import React, { useEffect, useState } from "react"
import axios from "axios"
import { Table } from "flowbite-react"

 

const Tugas5 = () => {
  const [data, setData] = useState(null)

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
  <Table.Head cl>
    <Table.HeadCell>
    No
    </Table.HeadCell>
    <Table.HeadCell>
    course
    </Table.HeadCell>
    <Table.HeadCell>
    created_at
    </Table.HeadCell>
    <Table.HeadCell>
    id
    </Table.HeadCell>
    <Table.HeadCell>
    name
    </Table.HeadCell>
    <Table.HeadCell>
    score
    </Table.HeadCell>
    <Table.HeadCell>
    updated_at
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
      {element.created_at}
    </Table.Cell>
    <Table.Cell>
      {element.id}
    </Table.Cell>
    <Table.Cell>
     {element.name}
    </Table.Cell>
    <Table.Cell>
     {element.score}
    </Table.Cell>
    <Table.Cell>
      {element.updated_at}
    </Table.Cell>
  </Table.Row>
 ))}
  </Table.Body>
</Table>)}

export default Tugas5