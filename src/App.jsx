import React, { useState, useEffect } from 'react';
import { Route, Routes, useParams, useLocation, Navigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import Page from './Page';
import seedColors from './seedColors';
import { generatePalette } from './ColorHelpers';

function App() {

  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));

  const [palettes, setNewPalettes] = useState(savedPalettes || seedColors);

  const location = useLocation();
  
  const PaletteWrapper = () => {
    const { id } = useParams()
    const foundPalette = findPalette(id)
    return foundPalette ? <Palette palette={generatePalette(foundPalette)} /> : <h1>Palette Not Found!</h1>
  }

  const SinglePaletteWrapper = () => {
    const { paletteId, colorId} = useParams()
    const foundPalette = findPalette(paletteId)
    return foundPalette ? <SingleColorPalette palette={generatePalette(foundPalette)} /> : <h1>Palette Not Found!</h1>
  }

  const findPalette = (id) => {
    return palettes.find((palette) => palette.id === id)
  };

  const deletePalette = (id) => {
    setNewPalettes(palettes.filter(palette => palette.id !== id))
  };

  const savePalette = (newPalette) => {
    setNewPalettes([...palettes, newPalette])
  };

  useEffect(() => {
    window.localStorage.setItem('palettes', JSON.stringify(palettes))
  }, [palettes]);



  return (
    <div>
      <TransitionGroup>
        <CSSTransition 
          key={location.key} 
          classNames='page' 
          timeout={500}
          >
          <Routes location={location}>
            <Route
              path='/palette/new'
              element={
                <Page>
                  <NewPaletteForm 
                    savePalette={savePalette} 
                    palettes={palettes} 
                  /> 
                </Page>
              }    
            />
            <Route 
              path='/' 
              element={
                <Page>
                  <PaletteList 
                    palettes={palettes} 
                    deletePalette={deletePalette} 
                  />
                  </Page>
              } 
            />
            <Route 
              path='/palette/:id' 
              element={
                <Page>
                  <PaletteWrapper 
                />
                </Page>
              } 
            />
            <Route 
              path='/palette/:paletteId/:colorId'
              element={
                <Page>
                  <SinglePaletteWrapper 
                />
                </Page>
              }
            />
            <Route
              path='*' 
              element={
                <Page>
                  <Navigate to='/' />
                </Page>
              } 
            />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default App
