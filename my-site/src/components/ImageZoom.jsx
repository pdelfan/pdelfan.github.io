import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import styles from './ImageZoom.module.css'

const ImageZoom = (props) => {
  return (
    <Zoom className= {styles.imageZoom} {...props} >
    </Zoom>
  )
}

export default ImageZoom

