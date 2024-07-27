import React, {useState} from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import InputLayerCNN from './Inputs/InputLayerCnn';
import ConvLayerCNN from './Inputs/ConvLayerInput';
import ConvLayerInput from './Inputs/ConvLayerInput';


function RightBarCnn({selectedLayers, InputParamApply, ConvParamApply}) {


   
 
  const [activeApply, setActiveApply] = useState(null)

  const toggleApply = (type) => {
      setActiveApply(type)
  }

  return (
    <div className="w-[22rem] min-h-screen  bg-gray-900 border-l-[1px] border-gray-40 pb-9">

      <div className="border-b-[1px] border-gray-400">
                <Carousel opts={{ align: "start" }} className="w-[22rem] max-w-sm">
                  <CarouselContent>
                    {selectedLayers.map((layer, index) => (
                      <CarouselItem key={`${layer}-${index}`} className="md:basis-1/2 lg:basis-1/3">
                        <div className="pl-3 pt-7 pb-3">
                          <button
                             className={`text-sm ${activeApply == layer ? "text-[#F6E6CB]" : "text-gray-400"}`}
                             onClick={() => toggleApply(layer)}
                          >
                          <p className="text-sm">
                              {layer}
                            </p>
                          </button>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
        </div>

        <div>
          {activeApply === "Input Layer" && <InputLayerCNN InputParamApply={InputParamApply} />}
          {activeApply === "Conv Layer" && <ConvLayerInput ConvParamApply={ConvParamApply} />}
        </div>

    </div>
  )
}

export default RightBarCnn