"use client"
import Input from "@/app/components/Input";
import {
    Card,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";

export default function AddHotels() {
    const [hotelname, setHotelname] = useState("")
    const [adress, setAdress] = useState("")
    const [contactno, setContactNo] = useState("")
    const [email, setEmail] = useState("")
    const[ownerName,setOwnerName]=useState("")
    //name type adress location  services wifi dinner kunch swiimmingparling gym kids

    return (
        <div className="flex justify-center mt-5 border border-black ">
        <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray " className="flex justify-center">
                Add Hotels
            </Typography>
         
            <form className="mt-5 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                    <Input label="Hotel Name" value={hotelname} onChange={(e) => setHotelname(e.target.value)} />
                    <Input label="Adress" value={adress} onChange={(e) => setAdress(e.target.value)} />
                    <Input label="Hotel Owner" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} />
                    <Input type="number" label="Contact No" value={contactno} onChange={(e) => setContactNo(e.target.value)} />
                    <Input type="email" label="Email" value={email} onChange={(e) => { setEmail(e.target.value)}} />


                </div>
                <Checkbox
                    label={
                        (
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal"
                            >
                                I agree the
                                <a
                                    href="#"
                                    className="font-medium transition-colors hover:text-blue-500"
                                >
                                    &nbsp;Terms and Conditions
                                </a>
                            </Typography>
                        )
                    }
                    containerProps={{ className: "-ml-2.5" }}
                />
                <Button className="mt-6" fullWidth>
                    Add
                </Button>

            </form>
        </Card>
        </div>
    );
}