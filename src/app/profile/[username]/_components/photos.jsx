import React from "react";
import "tailwindcss/tailwind.css";
import { photosData } from "../_sources/profileData";

export default function Photos() {
  return (
    <div className="h-16 pt-2 flex justify-center">
      <div className="grid grid-cols-3 gap-2 mb-12">
        {photosData && photosData.length > 0 ? (
          photosData.map((photo) => (
            <div key={photo.id} className="relative group">
              <img src={photo.img} className="w-full h-full object-cover aspect-square max-w-xs"/>
            </div>
          ))
        ) : (
          <div className="mt-10 col-span-3 flex items-center justify-center">
            <p className="text-center text-2xl text-gray-500">No Posts Yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
