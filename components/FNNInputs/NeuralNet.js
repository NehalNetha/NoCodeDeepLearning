"use client"
import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import Mainbar from './Mainbar'
import RightSidebar from './RightSidebar'

export default function NeuralNet() {
  const [selectedLayers, setSelectedLayers] = useState([]);

  const onSelectedLayers = (layer) => {
    if (!selectedLayers.includes(layer)) {
      setSelectedLayers((prev) => [...prev, layer]);
    }
  };

  const removeLayer = (layerToRemove) => {
    setSelectedLayers((layers) => layers.filter(layer => layer !== layerToRemove));
  };

  const addHiddenLayer = () => {
    setSelectedLayers((layers) => {
      const lastHiddenLayerIndex = layers.lastIndexOf("Hidden Layer");
      if (lastHiddenLayerIndex === -1) {
        // If there's no Hidden Layer, add it at the end
        return [...layers, "Hidden Layer"];
      } else {
        // Insert the new Hidden Layer after the last existing one
        const newLayers = [...layers];
        newLayers.splice(lastHiddenLayerIndex + 1, 0, "Hidden Layer");
        return newLayers;
      }
    });
  }

  const [FFNeuralnet, setFFNeuralNet] = useState({
    "inputLayerSize": 0,
    "hiddenLayerSize": 0, 
    "HiddenAct": "",
    "OutputlayerSize": 0,
    "OutputAct": "",
    "Optimizer" : "",
    "LossFunction" : ""

  })

  const InputParamApply = (inputs) => {
    setFFNeuralNet(prevState => ({
      ...prevState,
      inputLayerSize: inputs
    }))
  }

  const HiddenParamApply = (size, act) => {
    setFFNeuralNet(prevState => ({
      ...prevState,
      hiddenLayerSize: size,
      HiddenAct: act
    }))
  }

  const OutputParamApply = (size, act) => {
    setFFNeuralNet(prevState => ({
      ...prevState,
      OutputlayerSize: size,
      OutputAct: act
    }))
  }

  const OptimizerParamApply = (opt) => {
    setFFNeuralNet(prevState => ({
      ...prevState,
      Optimizer: opt
    }))
  }

  const LossFunctionParamApply = (lf) => {
    setFFNeuralNet(prevState => ({
      ...prevState,
      LossFunction: lf
    }))
  }


  useEffect(() => {
    console.log(FFNeuralnet)
  }, [FFNeuralnet])



  

  return (
    <div className="flex flex-row mb-[10rem]">
      <Sidebar onSelectedLayers={onSelectedLayers} selectedLayers={selectedLayers} />
      <Mainbar selectedLayers={selectedLayers} removeLayer ={removeLayer} addHiddenLayer={addHiddenLayer} />
      <RightSidebar selectedLayers={selectedLayers}
        InputParamApply={InputParamApply}
        OutputParamApply={OutputParamApply} 
        HiddenParamApply={HiddenParamApply}
        OptimizerParamApply={OptimizerParamApply}
        LossFunctionParamApply={LossFunctionParamApply}
       />
    </div>
  )
}