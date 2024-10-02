import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
const SelectDuration = ({onUserSelect}) => {
  return (
    <div className="mt-7 ">
    <h2 className="text-2xl font-bold text-primary">Duration</h2>
    <p className="text-gray-500">Select the duration of your video</p>

    <Select  onValueChange={(value)=>{
      value!='Custom Prompt'&& onUserSelect('duration',value)
    }}>
      <SelectTrigger className="w-full p-6 mt-2 text-lg ">
        <SelectValue placeholder="Select Duration" />
      </SelectTrigger>
      <SelectContent>
      <SelectItem value='15 Seconds'>
             15 Seconds
             </SelectItem>
             <SelectItem value='30 Seconds'>
             30 Seconds
             </SelectItem> 
             <SelectItem value='45 Seconds'>
             45 Seconds
             </SelectItem>
             <SelectItem value='60 Seconds'>
             60 Seconds
             </SelectItem>   
     
      </SelectContent>
    </Select>
    </div>

  )
}

export default SelectDuration