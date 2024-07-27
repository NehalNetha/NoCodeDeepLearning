"use client"
import React, { useState } from 'react'
import Navbar from "@/components/Navbar";
import NeuralNet from "@/components/FNNInputs/NeuralNet";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import NeuralNetCNN from '@/components/CNN/NeuralNetCNN';

export default function Home() {
  const NeuralNets = ["FNN", "CNN", "RNN", "LSTM", "Transformers"]
    
  const [selectedNN, setSelectedNN] = useState("FNN")

  const onSelectNN = (nn) => {
    setSelectedNN(nn)
  }

  return (
    <main className="bg-gray-900 w-full min-h-screen flex flex-col">
      <Navbar />

      <div className="w-full py-4 border-b border-gray-400">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-screen-lg mx-auto"
        >
          <CarouselContent>
            {NeuralNets.map((nn) => (
              <CarouselItem key={nn} className="md:basis-1/4 lg:basis-1/5">
                <div className="px-4">
                  <button 
                      className={`text-sm hover:text-blue-400 transition-colors pb-2 ${
                        nn === selectedNN 
                          ? "text-[#F6E6CB] border-b-2 border-[#F6E6CB]"
                          : "text-white"
                      }`}
                      onClick={() => onSelectNN(nn)}
                    >
                    {nn}
                  </button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        
        </Carousel>
      </div>

      <div className="flex-grow overflow-auto">
        {selectedNN == "FNN" && <NeuralNet />}
        {selectedNN == "CNN" && <NeuralNetCNN/>}
      </div>
    </main>
  );
}