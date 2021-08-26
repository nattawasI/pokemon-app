import React from 'react'
import Lottie from 'react-lottie'
import animateLoader from '../assets/icon/loader.json'

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animateLoader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div className="loading">
      <Lottie options={defaultOptions}
        height={100}
        width={100}
      />
    </div>
  )
}

export default Loading
