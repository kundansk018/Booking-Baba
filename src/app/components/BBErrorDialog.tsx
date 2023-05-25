import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import React, { useState } from "react";
import BBButton from "./BBButton";
import { BellIcon } from "@heroicons/react/24/solid";

interface DialogProps {
  dialogHeader: string;
  dialogMessage: any;
  open: boolean;
  onOkClick: () => void;
}

export default function BBErrorDialog(props: DialogProps) {
  return (
    <Dialog open={props.open} handler={() => console.log("")}>
      <DialogHeader className="h1   ">
        <BellIcon className="h-10 w-10 text-red-500" />
        {props.dialogHeader}
      </DialogHeader>
      <DialogBody divider>
        {Array.isArray(props.dialogMessage) ? (
          <>
            {props.dialogMessage.map((obj: string) => (
              <p className="]">{obj} </p>
            ))}
          </>
        ) : (
          <> {props.dialogMessage}</>
        )}
      </DialogBody>
      <DialogFooter>
        <BBButton label="Ok" size="md" color="" onClick={props.onOkClick} />
      </DialogFooter>
    </Dialog>
  );
}
