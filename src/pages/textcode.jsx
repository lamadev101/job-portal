import React, { useRef, useState } from "react";

const AddDynamicInput = () => {
  const [val, setVal] = useState([]);
  const ref = useRef()

  const handleAdd = () => {
    const abc = [...val, []]
    console.log(abc)
    ref.current.reset
    setVal(abc)
  }

  const handleChange = (onChangeValue, i) => {
    const inputdata = [...val]
    inputdata[i] = onChangeValue.target.value;
    setVal(inputdata)
  }

  const handleDelete = (i) => {
    const deletVal = [...val]
    deletVal.splice(i, 1)
    setVal(deletVal)
  }
  console.log(val, "data-")

  return (
    <div className="mx-20">
      <button className="bg-green-500 px-4 py-2 mb-4 rounded-md" onClick={() => handleAdd()}>Add</button>
      <div className="flex items-center gap-2 w-[max-content]">
        {val !== null && val.map((data, i) => {
          return (
            <div key={i} className="mb-2 border border-gray-600 rounded-lg">
              <div className="">{data}</div>
              <button className="bg-red-500 px-2" onClick={() => handleDelete(i)}>x</button>
            </div>
          )
        })}
      </div>

      <div className="mb-2">
        <input ref={ref} className="bg-gray-500 pl-4" onChange={e => handleChange(e)} />
      </div>
    </div>
  );
}

export default AddDynamicInput;