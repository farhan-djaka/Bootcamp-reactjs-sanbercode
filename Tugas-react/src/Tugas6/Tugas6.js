

import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Table } from 'flowbite-react'

const Tugas6 = () => {

  const [data, setData] = useState(null)

  const hitung = (nilai) => {
    if (nilai >= 80) {
      return (<div className="rounded-lg bg-lime-400 flex justify-center">
      A
    </div>)
    }
    if (nilai >= 70 && nilai < 80) {
      return (<div className="rounded-lg bg-yellow-300 flex justify-center">
      B
    </div>)
    }
    if (nilai >= 60 && nilai < 70) {
      return (<div className="rounded-lg bg-orange-500 flex justify-center">
      C
    </div>)
    }
    if (nilai >= 50 && nilai < 60) {
      return (<div className="rounded-lg bg-red-700 flex justify-center  text-teal-50">
        D
      </div>)
    }
    if (nilai < 50) {
      return (<div className=" rounded-lg bg-red-700 flex justify-center text-teal-50 ">
      E
    </div>) 
    }
  }

  const [input, setInput] = useState(
    {
      name: ""
    }
  )

  const [fetchStatus, setFetchStatus] = useState(true)

  const [currentId, setCurrentId] = useState(-1)

  useEffect(() => {

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
        axios.put(`https://backendexample.sanbercloud.com/api/student-scores/${currentId}`, {name, course , score})
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
          {name: data.name,
          course : data.course,
          score : data.score
        }
        )

      })

  }

  return (
    <>
    
      <div className='shadow-xl m-2'>
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
    <Table.HeadCell className='text-center'>
      Predikat
    </Table.HeadCell>
    <Table.HeadCell className='text-center'>
      Action
    </Table.HeadCell>
  </Table.Head>


  <Table.Body className="bg-amber-500-divide-y ">
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
    <Table.Cell class = "py-4 px-20">
      {hitung(element.score)}
    </Table.Cell>
    <Table.Cell className='text-white gap-x-1  flex justify-center'>
                  <button className='bg-green-400 p-2 rounded-lg' onClick={handleEdit} value={element.id}>edit  </button>
                  <button className='bg-red-600 p-2 rounded-lg' onClick={handleDelete} value={element.id}>  delete  </button>
    </Table.Cell>
  </Table.Row>
 ))}
  </Table.Body>
</Table>

        </ul>
      </div>

      <div className='mt-5 rounded-xl shadow-gray-700 shadow-xl bg-gray-500 justify-start w-4/5'>
      <p className='py-2 text-center text-white'>FORM DATA</p>
      {/* form data */}

      <form className= ' grid grid-rows-2 grid-flow-col justify-start p-2 gap-4 w-1/2 text-center;' onSubmit={handleSubmit}>
        <span className='bg-orange-400 text-center rounded-xl'> Nama : </span>
        <input className='border-2	border-width: 2px  rounded-xl	; border-black'
        onChange={handleInput} value={input.name} name='name' />

        <span className='bg-orange-400 text-center rounded-xl'> Matkul : </span>
        <input className='border-2	border-width: 2px rounded-xl	; border-black'
        onChange={handleInput} value={input.course} name='course' />

        <span className='bg-orange-400 text-center rounded-xl'> Nilai : </span>
        <input className='border-2	border-width: 2px rounded-xl	; border-black' 
        onChange={handleInput} value={input.score} name='score' />

        <input className=' bg-red-400 px-5 rounded-xl' type={'submit'}/>
      </form>
      </div>
    </>
  )

}

export default Tugas6


