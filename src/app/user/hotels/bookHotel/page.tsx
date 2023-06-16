'use client'

import BBInput from '@/app/components/BBInput'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function page() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [no, setNo] = useState("")
    const [uemail, setUEmail] = useState("")
    const [file, setFile] = useState("")
    const [person,setPerson]=useState("")
    const [childern,setChildern]=useState("")
    const router = useRouter()
    const book = () => {
        router.push('/user/hotels/bookHotel/book')
    }
    return (


        <div className=' m-auto border border-gray-400  mt-8  w-[500px]  rounded-lg'>

            <div className='text-center mt-3 text-xl'>Basic Details</div>
            <div className='flex  flex-row justify-center mx-5 '>
                <div className='flex  flex-col mx-4 w-[200px]'>
                    <BBInput containerProps={{ className: "mb-4 mt-3" }}
                        type='text' value={firstName} label='FirstName' onChange={(e) => setFirstName(e.target.value)} />
                    <BBInput containerProps={{ className: "mb-4" }}
                        type='number' value={no} label='Mobile Number' onChange={(e) => setNo(e.target.value)} />

                    <BBInput containerProps={{ className: "mb-4" }}
                        type='email' value={uemail} label='Email ID' onChange={(e) => setUEmail(e.target.value)} />
                    <BBInput
                        containerProps={{ className: "w-[300px] mb-4" }}
                        type="file"
                        label="ID Proof"
                        value={file}
                        onChange={(e) => setFile(e.target.value)}
                    /></div>
                <div className='flex  flex-col mx-4 w-[200px]'>
                    <BBInput containerProps={{ className: "mb-4 mt-4" }}
                        type='text' value={lastName} label='LastName' onChange={(e) => setLastName(e.target.value)} />
                 <BBInput containerProps={{ className: "mb-4 " }}
                    type='text' value={person} label='Total Person' onChange={(e) => setPerson(e.target.value)} />
                 <BBInput containerProps={{ className: "mb-4 " }}
                    type='text' value={childern} label='No of Children' onChange={(e) => setChildern(e.target.value)} />

                </div>
            </div>
            <div className='flex justify-center mt-4'>
                <Button type='button' onClick={book}
                    className='border border-gray-500 text-center h-9  
                 w-[280px] rounded-lg bg-[#8075f5] mb-5'>
                    Submit
                </Button></div>

        </div>

    )
}
