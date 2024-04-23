
import React from "react";
import Header from "./_components/header";
import Photos from "./_components/photos";
import { photosData } from "./_sources/profileData";

export default function Profile () {

    return (        
        <>
        <Header photosData={photosData}/>
        <Photos />
        </>
    )
}