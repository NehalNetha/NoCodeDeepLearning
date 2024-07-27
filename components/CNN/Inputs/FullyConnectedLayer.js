import React, { useState } from 'react';

const FullyConnectedLayer = ({ FullyConnectedLayerParamApply, layerIndex }) => {
  const [inFeatures, setInFeatures] = useState('');
  const [outFeatures, setOutFeatures] = useState('');
  const [bias, setBias] = useState(false);

  const handleApply = () => {
    FullyConnectedLayerParamApply(
      parseInt(inFeatures),
      parseInt(outFeatures),
      bias
    );
  };


 
  return (
    <form className="w-[18rem] px-5 mt-[5rem] flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="inFeatures"
            className="text-md text-gray-300"
          >
            In Features 
          </label>
          <input
            type="inFeatures"
            name="width"
            id="inFeatures"
            className="block py-1 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder=" "
            required
            value={inFeatures}
            onChange={(e) => setInFeatures(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="OutFeatures"
            className="text-md text-gray-300"
          >
            Out Features 
          </label>
          <input
            type="text"
            name="OutFeatures"
            id="OutFeatures"
            className="block py-1 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder=" "
            required
            value={outFeatures}
            onChange={(e) => setOutFeatures(e.target.value)}
          />
        </div>

        <div  className="flex items-center gap-2">
            <input
                type="checkbox"
                name="bias"
                id="bias"
                checked={bias}
                onClick={() => setBias(prevBias => !prevBias)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor={bias} className="text-[10px] text-gray-300">
                Bias (Default: True)
            </label>
        </div>

       

      </div>

      <button 
        type="button" 
        className="text-white bg-gray-800 hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        onClick={handleApply}
      >
        Apply
      </button>
    </form>
  );
};

export default FullyConnectedLayer;