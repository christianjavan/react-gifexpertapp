import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ categoria }) => {

  const {data:images, loading} = useFetchGifs(categoria)

  // useEffect(( () => {
  //   getGifs( categoria ).then(setImages)
  // }), [ categoria ])
  

  return (
    <div className='card-grid'>
      <h3>{ categoria }</h3>

      { images.map( ( img ) => <GifGridItem key={img.id} { ...img }/>) }
    </div>
  )
}
