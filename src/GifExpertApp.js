import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
  // const categorias = ['One Punch', 'Samurai X', 'Dragon Ball']
  const [categorias, setCategorias] = useState( ['One Punch'] )
  // const handleAdd = () => {
  //   setCategorias([...categorias, 'HunterxHunger'])
  // }
  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategorias={ setCategorias }/>
      <hr />
      <ol>
        { 
          categorias.map((c, i)=> <GifGrid key={c} categoria={c}/>) 
        }
      </ol>
    </div>
  )
}

export default GifExpertApp