"use client"
import React from 'react'
import SelectTopic from './_components/SelectTopic'
import { useState } from 'react'
import SelectStyles from './_components/SelectStyles'
import SelectDuration from './_components/SelectDuration'
import { Button } from '@/components/ui/button'

const CreateNew = () => {
  const[formData,setFormdData]=useState([])
  const onHandleInputChange=(fieldName,fieldValue)=>{
    console.log(fieldName,fieldValue)

    setFormdData(prev=>({
      ...prev,
      [fieldName]:fieldValue
    }))
  }
  return (
    <div className='md:px-20'>
      <h2  className='text-4xl font-bold text-center text-primary'>Create New</h2>
      <div className="p-10 mt-10 shadow-md">
        {/* Select topic */}
        <SelectTopic onUserSelect={onHandleInputChange}/>


        {/* Select style */}

        <SelectStyles onUserSelect={onHandleInputChange}/>


        {/* duration */}

        <SelectDuration onUserSelect={onHandleInputChange}/>




        {/* Create button */}

        <Button  className="w-full mt-10">Create Short Video</Button>
      </div>
    </div>
  )
}

export default CreateNew