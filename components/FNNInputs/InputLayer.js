import React, { useState } from 'react'
  
const InputApply = ({InputParamApply}) => {
    const [inputSize, setInputSize] = useState('')

        return (
             <form className="w-[18rem] px-5 mt-[5rem] flex flex-col  gap-11 ">
                <div className="flex flex-col gap-3">
                    <label
                        htmlFor="floating_input_size"
                        className=" text-lg  text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 peer-focus:translate-x-1/4 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Input Size
                    </label>
                    <input
                        type="text"
                        name="floating_input_size"
                        id="floating_input_size"
                        className="block  py-1 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                        placeholder=" "
                        required
                        value={inputSize}
                         onChange={(e) => setInputSize(e.target.value)}
                    />
                </div>

                <button type="button" class="text-white bg-gray-800 hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    onClick={() => InputParamApply(inputSize)}
                >
                    
                    Apply

                </button>

            </form>
        )
    }

export default InputApply