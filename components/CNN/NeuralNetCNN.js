"use client"
import React, { useState, useEffect } from 'react'

import SidebarCnn from './SidebarCnn'
import MainbarCNN from './MainbarCnn'
import RightBarCnn from './RightBarCnn';

export default function NeuralNetCNN() {
  const [selectedLayers, setSelectedLayers] = useState([]);

  const onSelectedLayers = (layer) => {
    if (!selectedLayers.includes(layer)) {
      setSelectedLayers((prev) => [...prev, layer]);
    }
  };

  const removeLayer = (layerToRemove) => {
    setSelectedLayers((layers) => layers.filter(layer => layer !== layerToRemove));
  };

  const addConvLayer = () => {
    setSelectedLayers((layers) => {
      const lastHiddenLayerIndex = layers.lastIndexOf("Conv Layer");
      if (lastHiddenLayerIndex === -1) {
        return [...layers, "Conv Layer"];
      } else {
        const newLayers = [...layers];
        newLayers.splice(lastHiddenLayerIndex + 1, 0, "Conv Layer");
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
      <SidebarCnn onSelectedLayers={onSelectedLayers} selectedLayers={selectedLayers} />
      <MainbarCNN selectedLayers={selectedLayers} removeLayer ={removeLayer} addConvLayer={addConvLayer} />
      <RightBarCnn />
      
    </div>
  )
}