

import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Table } from 'flowbite-react'

const Tugas6 = () => {

  //materi fetching data
  const [data, setData] = useState(null)

  //materi create data
  const [input, setInput] = useState(
    {
      name: ""
    }
  )

  //indikator
  const [fetchStatus, setFetchStatus] = useState(true)

  //indikator
  const [currentId, setCurrentId] = useState(-1)

  useEffect(() => {

    //fetch data dengan kondisi
    if (fetchStatus === true) {
      axios.get("http://backendexample.sanbercloud.com/api/contestants")
        .then((res) => {
          setData([...res.data])
        })
        .catch((error) => {
        })

      setFetchStatus(false)
    }

  }, [fetchStatus, setFetchStatus])

  //handling input
  const handleInput = (event) => {

    let name = event.target.name
    let value = event.target.value

    if (name === "name") {
      setInput({ ...input, name: value })
    }

  }

  //handling submit
  const handleSubmit = (event) => {

    event.preventDefault()

    let {
      name
    } = input

    if (currentId === -1) {

      //create data
      axios.post('https://backendexample.sanbercloud.com/api/contestants', { name })
        .then((res) => {
          console.log(res)
          setFetchStatus(true)
        })

    }else{

        // update data
        axios.put(`https://backendexample.sanbercloud.com/api/contestants/${currentId}`, {name})
        .then((res) => {
          setFetchStatus(true)
        })

    }

    //balikin indikator ke -1
    setCurrentId(-1)

    //clear input setelah create data
    setInput(
      {
        name: ""
      }
    )

  }

  console.log(data)

  const handleDelete = (event) => {
    let idData = parseInt(event.target.value)

    axios.delete(`https://backendexample.sanbercloud.com/api/contestants/${idData}`)
      .then((res) => {
        setFetchStatus(true)
      })

  }

  const handleEdit = (event) => {
    let idData = parseInt(event.target.value)

    setCurrentId(idData)

    axios.get(`https://backendexample.sanbercloud.com/api/contestants/${idData}`)
      .then((res) => {
        let data = res.data

        setInput(
          {
            name: data.name
          }
        )

      })

  }

  return (
    <>
      <div>
        <ul>
        <Table striped={true}>
  <Table.Head cl>
    <Table.HeadCell>
    No
    </Table.HeadCell>
    <Table.HeadCell>
    name
    </Table.HeadCell>
    <Table.HeadCell>
    matakuliah
    </Table.HeadCell>
    <Table.HeadCell>
    score
    </Table.HeadCell>
    <Table.HeadCell>
    Edit
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
    <Table.Cell>
     {element.name}
    </Table.Cell>
    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      {element.course}
    </Table.Cell>
    <Table.Cell>
     {element.score}
    </Table.Cell>
    <Table.Cell>
    <button onClick={handleEdit} value={element} >edit</button>
    </Table.Cell>
  </Table.Row>
 ))}
  </Table.Body>
</Table>

        </ul>
      </div>

      <p>FORM DATA</p>
      {/* form data */}

      <form onSubmit={handleSubmit}>
        <span>Nama : </span>
        <input onChange={handleInput} value={input.name} name='name' />
        <input type={'submit'} />
      </form>
    </>
  )

}

export default Tugas6


