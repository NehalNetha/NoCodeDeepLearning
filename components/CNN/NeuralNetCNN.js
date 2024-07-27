"use client"
import React, { useState, useEffect } from 'react'
import SidebarCnn from './SidebarCnn'
import MainbarCNN from './MainbarCnn'
import RightBarCnn from './RightBarCnn';

export default function NeuralNetCNN() {
  const [selectedLayers, setSelectedLayers] = useState([]);

 
  const [CNNModel, setCNNModel] = useState({
    inputLayer: { 
      width: 0,
      height: 0,
      channels: 0,
      batchSize: 0
    },
    convLayers: [],
    activationLayers: [],
    poolingLayers: [],
    FullyConnectedLayer: [],
    outputLayer: { units: 0, activation: "" },
    optimizer: "",
    lossFunction: ""
  });

  const onSelectedLayers = (layer) => {
    if (!selectedLayers.includes(layer)) {
      setSelectedLayers((prev) => {
        // Check if the layer can be added based on the current structure
        if (layer === "Input Layer" && prev.length === 0) {
          return [...prev, layer];
        } else if (layer === "Conv Layer" && prev.includes("Input Layer") && !prev.includes("Flatten Layer")) {
          return [...prev, layer];
        } else if (layer === "Flatten Layer" && prev.includes("Conv Layer") && !prev.includes("Flatten Layer")) {
          return [...prev, layer];
        } else if (layer === "Fully Connected Layer" && prev.includes("Flatten Layer") && !prev.includes("Output Layer")) {
          return [...prev, layer];
        } else if (layer === "Output Layer" && prev.includes("Fully Connected Layer") && !prev.includes("Output Layer")) {
          return [...prev, layer];
        } else {
          console.log(`Cannot add ${layer} at this position`);
          return prev;
        }
      });
    }
  };

  const removeLayer = (layerToRemove) => {
    setSelectedLayers((layers) => layers.filter(layer => layer !== layerToRemove));
    setCNNModel(prevModel => {
      const newModel = { ...prevModel };
      if (layerToRemove === "Conv Layer") {
        newModel.convLayers.pop();
      } else if (layerToRemove === "Fully Connected Layer") { 


        newModel.denseLayers.pop();
      } else if (layerToRemove === "Flatten Layer") {
        newModel.flattenLayer = {};
      }
      return newModel;
    });
  };

  const addConvLayer = () => {
    setSelectedLayers((layers) => {
      const lastConvLayerIndex = layers.lastIndexOf("Conv Layer");
      if (lastConvLayerIndex === -1) {
        return [...layers, "Conv Layer"];
      } else {
        const newLayers = [...layers];
        newLayers.splice(lastConvLayerIndex + 1, 0, "Conv Layer");
        return newLayers;
      }
    });
   
  };

  const addFullyConnectedLayer = () => {
    setSelectedLayers((layers) => {
      const lastConvLayerIndex = layers.lastIndexOf("Fully Connected Layer");
      if (lastConvLayerIndex === -1) {
        return [...layers, "Fully Connected Layer"];
      } else {
        const newLayers = [...layers];
        newLayers.splice(lastConvLayerIndex + 1, 0, "Fully Connected Layer");
        return newLayers;
      }
    });
  }

  const InputParamApply = (width, height, channels, batchSize) => {
    setCNNModel(prevModel => ({
      ...prevModel,
      inputLayer: { width, height, channels, batchSize }
    }));
  };

  const ConvParamApply = (convParams) => {
    setCNNModel(prevModel => {
      const newConvLayers = [...prevModel.convLayers];
      newConvLayers.push({ ...convParams });
      
      return { 
        ...prevModel, 
        convLayers: newConvLayers
      };
    });
  };

  const ActivationParamApply = (activation) => {
    setCNNModel(prevModel => {
      const newActivationLayers = [...prevModel.activationLayers];
      newActivationLayers.push(activation);
      
      return { 
        ...prevModel, 
        activationLayers: newActivationLayers
      };
    });
  };

  const PoolingParamApply = (poolParams) => {
    setCNNModel(prevModel => {
      const newPoolingLayers = [...prevModel.poolingLayers];
      newPoolingLayers.push({ ...poolParams });
      
      return { 
        ...prevModel, 
        poolingLayers: newPoolingLayers
      };
    });
  };


  const FullyConnectedLayerParamApply = (in_features, out_features, bias) => {
    setCNNModel(prevState => {
      const newConnectedLayers = [...prevState.FullyConnectedLayer];
      newConnectedLayers.push({ in_features, out_features, bias });
      return {
        ...prevState,
        FullyConnectedLayer: newConnectedLayers
      };
    });
  };

  const OutputParamApply = (units, activation) => {
    setCNNModel(prevModel => ({
      ...prevModel,
      outputLayer: { units, activation }
    }));
  };

  const OptimizerParamApply = (optimizer) => {
    setCNNModel(prevModel => ({
      ...prevModel,
      optimizer
    }));
  };

  const LossFunctionParamApply = (lossFunction) => {
    setCNNModel(prevModel => ({
      ...prevModel,
      lossFunction
    }));
  };

  useEffect(() => {
    console.log(CNNModel);
  }, [CNNModel]);


  //conv layer state press
  const [dropdownStateConv, setDropdownStateConv] = useState({
    isOpen: false,
    isOpenActivation: false,
    isOpenPooling: false
  });
  
  const toggleDropdownConv = (type) => {
    setDropdownStateConv(prevState => ({
      isOpen: type === 'dropdown' ? !prevState.isOpen : false,
      isOpenActivation: type === 'activation' ? !prevState.isOpenActivation : false,
      isOpenPooling: type === 'pooling' ? !prevState.isOpenPooling : false
    }));

    console.log(dropdownStateConv)
  };

  return (
    <div className="flex flex-row min-h-screen">
      <SidebarCnn onSelectedLayers={onSelectedLayers} selectedLayers={selectedLayers} />
      <MainbarCNN 
      selectedLayers={selectedLayers} 
      removeLayer={removeLayer} 
      addConvLayer={addConvLayer} 
      toggleDropdownConv = {toggleDropdownConv}
      addFullyConnectedLayer = {addFullyConnectedLayer}
      
      />
      <RightBarCnn 
        selectedLayers={selectedLayers}
        InputParamApply={InputParamApply}
        ConvParamApply={ConvParamApply}
        PoolingParamApply={PoolingParamApply}
        FullyConnectedLayerParamApply={FullyConnectedLayerParamApply}
        OutputParamApply={OutputParamApply}
        OptimizerParamApply={OptimizerParamApply}
        LossFunctionParamApply={LossFunctionParamApply}
        dropdownState = {dropdownStateConv}
        toggleDropdownConv = {toggleDropdownConv}
        ActivationParamApply = {ActivationParamApply}
      />
    </div>
  )
}