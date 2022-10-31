

import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Table } from 'flowbite-react'

const Tugas6 = () => {

  //materi fetching data
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
      axios.get(`https://backendexample.sanbercloud.com/api/student-scores`)
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
    if (name === "course") {
      setInput({ ...input, course: value })
    }
    if (name === "score") {
      setInput({ ...input, score: value })
    }

  }

  //handling submit
  const handleSubmit = (event) => {

    event.preventDefault()

    let {
      name,course,score
    } = input

    if (currentId === -1) {

      //create data
      axios.post('https://backendexample.sanbercloud.com/api/student-scores', { name, course , score})
        .then((res) => {
          console.log(res)
          setFetchStatus(true)
        })

    }else{

        // update data
        axios.put(`hhttps://backendexample.sanbercloud.com/api/student-scores/`, {name})
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

    axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
      .then((res) => {
        setFetchStatus(true)
      })

  }

  const handleEdit = (event) => {
    let idData = parseInt(event.target.value)

    setCurrentId(idData)

    axios.get(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
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
  <Table.Head className="bg-orange-500">
    <Table.HeadCell>
      No
    </Table.HeadCell>
    <Table.HeadCell>
      Nama Mahasiswa
    </Table.HeadCell>
    <Table.HeadCell>
      Mata kuliah
    </Table.HeadCell>
    <Table.HeadCell>
      Nilai
    </Table.HeadCell>
    <Table.HeadCell>
      Predikat
    </Table.HeadCell>
    <Table.HeadCell>
      Action
    </Table.HeadCell>
  </Table.Head>
  <Table.Body className="bg-amber-500-divide-y">
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
    <Table.Cell class = "py-4 px-6">
      {hitung(element.score)}
    </Table.Cell>
    <Table.Cell className='space-x-1.5 > * + *	margin-left: 0.375rem; 
    /* 6px */ text-black	color: rgb(0 0 0);Aa rounded-2xl	border-radius: 1rem; /* 16px */'>
                  <button className='bg-green-400 ' onClick={handleEdit} value={element.id}>edit</button>
                  <button className='bg-red-600' onClick={handleDelete} value={element.id}>delete</button>
    </Table.Cell>
  </Table.Row>
 ))}
  </Table.Body>
</Table>

        </ul>
      </div>

      <p>FORM DATA</p>
      {/* form data */}

      <form className= 'grid grid-cols-2 gap-4 w-1/4	width: 25%;' onSubmit={handleSubmit}>
        <span className='bg-orange-400'> Nama : </span>
        <input className='border-2	border-width: 2px 	; border-black'
        onChange={handleInput} value={input.name} name='name' />

        <span className='bg-orange-400'> Matkul : </span>
        <input className='border-2	border-width: 2px 	; border-black'
        onChange={handleInput} value={input.course} name='course' />

        <span className='bg-orange-400'> Nilai : </span>
        <input className='border-2	border-width: 2px 	; border-black' 
        onChange={handleInput} value={input.score} name='score' />

        <input className=' bg-red-400 ' type={'submit'} />
      </form>
    </>
  )

}

export default Tugas6


