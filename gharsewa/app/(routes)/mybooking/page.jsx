"use client"
import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingHistoryList from './_components/BookingHistoryList'
import GlobalApi from '@/app/_services/GlobalApi'
import { useSession } from 'next-auth/react'
import moment from 'moment'

function MyBooking() {

    const {data}=useSession();
    const [bookingHistory,setBookingHistory]=useState([]);
    useEffect(()=>{
        data&&GetUserBookingHistory();
    },[data])

    /**
     * Used to Get User Booking History
     */
    const GetUserBookingHistory=()=>{
        GlobalApi.GetUserBookingHistory(data.user.email).then(resp=>{
            console.log(resp);
            setBookingHistory(resp.bookings);
        })
    }

    const filterData = (type) => {
  const today = new Date();
today.setHours(0, 0, 0, 0); // reset time to 00:00

  return bookingHistory.filter(item => {
    const bookingDate = new Date(item.date);
    bookingDate.setHours(0, 0, 0, 0); // ignore time part

    if (type === "booked") {
      return bookingDate >= today;
    } else {
      return bookingDate < today;
    }
  });
};

    return (
        <div className='my-10 mx-5 md:mx-36'>
           <h2 className='font-bold text-[20px] my-2'>My Bookings</h2>
            <Tabs defaultValue="booked" className="w-full">
                <TabsList className="w-full justify-start">
                    <TabsTrigger value="booked">Booked</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                <TabsContent value="booked">
                    <BookingHistoryList 
                    bookingHistory={filterData('booked')}
                    type='booked'
                    />
                </TabsContent>
                <TabsContent value="completed">
                <BookingHistoryList 
                bookingHistory={filterData('completed')}
                type='completed'/>
                    
                </TabsContent>
            </Tabs>

        </div>
    )
}

export default MyBooking