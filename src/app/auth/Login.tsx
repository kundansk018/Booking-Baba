import { Button, CardFooter, Checkbox, Input, Radio, Typography } from '@material-tailwind/react'
import React from 'react'
import BBInput from '../components/BBInput'
import BBButton from '../components/BBButton'
import BBTypography from '../components/BBTypography'
import Link from 'next/link'

export default function Login() {
  return (

    <form className="mt-6 flex flex-col gap-4">
      <div>
        <Typography
          variant="small"
          color="blue-gray"
          className="mb-1 font-medium"
        >
          Email Id
        </Typography>
        <BBInput type="email" label="Email Details" value={""}
          onChange={(e) => console.log(e.target.value)} />
      </div>

      <div className="my-3">
        <Typography
          variant="small"
          color="blue-gray"
          className="mb-3 font-medium"
        >
          Password
        </Typography>
        <BBInput type="password" label="Enter Password" value={""}
          onChange={(e) => console.log(e.target.value)} />
      </div>


      <div className='flex flex-row justify-between items-center'>
        <Checkbox label="REMEMBER ME" color="purple" className='bg-[red] left-0' />
        <a
          href="#"
          className="font-medium text-blue-500 transition-colors hover:text-blue-700"
        >
          Forget Password?
        </a>

      </div>


      <BBButton
        color=""
        label="Login"
        size="lg"
        onClick={() => alert("Login Succesfully")}
        className="relative h-12 bg-blackblue" />

    </form>

  )

}
