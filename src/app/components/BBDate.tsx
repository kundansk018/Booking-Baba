'use client'
import { useState } from 'react'
import React from 'react'
import  DateRangePicker  from 'react-datepicker'

export default function BBDate() {
    const [date,setDate]=useState<any>()
    const [startDate,setStartDate]=useState(new Date())
    const [endDate,setEndDate]=useState(new Date())
    const [focusedInput,setFocusedInput]=useState()

  return (
    <div>
      {/* <DateRangePicker

  startDate={startDate} // momentPropTypes.momentObj or null,
  startDateId="id1" // PropTypes.string.isRequired,
  endDate={endDate} // momentPropTypes.momentObj or null,
  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
  onDatesChange={({ startDate, endDate }:any) => setDate({ startDate, endDate })} // PropTypes.func.isRequired,
  focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
  onFocusChange={focusedInput => setState({ focusedInput })} // PropTypes.func.isRequired,
/> */}


    </div>
  )
}
