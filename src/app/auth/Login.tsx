import { Input, Typography } from '@material-tailwind/react'
import React from 'react'
import BBInput from '../components/BBInput'

export default function Login() {
  return (

    <form className="mt-12 flex flex-col gap-4">
      <div>
        <Typography
          variant="small"
          color="blue-gray"
          className="mb-2 font-medium"
        >
          Email Id
        </Typography>
        <BBInput type="email" label="Email Details" value={""}
          onChange={(e) => console.log(e.target.value)} />
      </div>

      <div className="my-5">
        <Typography
          variant="small"
          color="blue-gray"
          className="mb-2 font-medium"
        >
          Password
        </Typography>
        <BBInput type="password" label="Enter Password" value={""}
          onChange={(e) => console.log(e.target.value)} />
      </div>
      {/* <Button size="lg" style={{color:"black",backgroundColor:"light-green"}}>Login</Button> */}

    </form>

  )

}
