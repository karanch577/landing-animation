import React from 'react'

function FeatureWrapper(props) {
  return (
    <div className='w-[22%] h-24 rounded-xl bg-gray-300 flex justify-center items-center'>{props.children}</div>
  )
}

export default FeatureWrapper