import React, {useRef, useState, useCallback} from 'react';

import  ModelContext, { CarModel } from '../ModelContext'

import { Container, OverlayRoot} from './styles';

import  ModelOverlay  from '../ModelOverlay';


const ModelWrapper: React.FC = ({children}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([])

  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModels(state =>[...state, model])}, [])

  const unregisterModel = useCallback((modelName: string) => {
    setRegisteredModels(state => state.filter(model => model.modelName === modelName))
  }, [])


  const getModelByName = useCallback((modelName: string) =>{
    return registeredModels.find(item => item.modelName === modelName) || null
  }, [registeredModels]
  )


  return (
    <ModelContext.Provider 
    value={{
      wrapperRef,
      registeredModels,
      registerModel,
      unregisterModel,
      getModelByName
    }}>
      <Container ref={wrapperRef}>
        <OverlayRoot>
          {registeredModels.map(item => <ModelOverlay key={item.modelName} model={item}>{item.overlayNode}</ModelOverlay>)}
        </OverlayRoot>


        {children}
      </Container>
    </ModelContext.Provider> 
  )
}

export default ModelWrapper;