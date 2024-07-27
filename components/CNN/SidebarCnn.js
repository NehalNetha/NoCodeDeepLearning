"use client"
import React, { useState } from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CNN from './CNN'

function SidebarCnn({ selectedLayers, onSelectedLayers }) {
  return (
    <div className="w-[19rem] min-h-screen border-r-[1px] pb-8 border-gray-400 bg-gray-900">
      <CNN selectedLayers={selectedLayers} onSelectedLayers={onSelectedLayers} />
    </div>
  )
}

export default SidebarCnn
