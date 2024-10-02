import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const EmptyState = () => {
  return (
    <div className="p-5 py-24 flex items-center flex-col mt-10 border-2 border-dotted ">
        <h2>Nothing to see here! You don't have any short video created... Maybe create Some</h2>
        <Link href={'/dashboard/create-new'}>
        <Button>Create New Short Video</Button>
        </Link>
    </div>
  )
}

export default EmptyState