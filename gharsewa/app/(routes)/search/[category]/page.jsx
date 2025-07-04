"use client"
import BusinessList from '@/app/_components/BusinessList';
import{use}from 'react';
import GlobalApi from '@/app/_services/GlobalApi';
import React, { useEffect, useState } from 'react'

function BusinessByCategory({params}) {

    const [businessList,setBusinessList]=useState([]);
    useEffect(()=>{
        console.log(params);
        params&&getBusinessList()
    },[params]);
     const {category}=use(params);

    const getBusinessList=()=>{
        GlobalApi.getBusinessByCategory(category).then(resp=>{
            setBusinessList(resp?.businessLists);
        })
    }
             
  return (
    <div>
        <BusinessList title={category}
        businessList={businessList} />
    </div>
  )
}

export default BusinessByCategory