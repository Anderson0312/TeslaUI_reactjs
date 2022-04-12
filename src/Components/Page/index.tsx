import React from 'react';

import {ModelWrapper, ModelSection} from "../Model"
import DefaultOverlayContant from '../DefaultOverlayContant'


import { Container, Spacer } from './styles';
import UniqueOverlay from '../UniqueOverlay';

const Page: React.FC = () => {
  return (
    <Container>
        <ModelWrapper>
          <div>
            {[
              "Model 3",
              "Model Y",
              "Model S",
              "Model X",
              "Solar Panels",
              "Solar Roof",
            ].map(modelName => (
            <ModelSection 
            key={modelName}
            className="colored"
            modelName={modelName}
            overlayNode={
              <DefaultOverlayContant 
                label={modelName}
                description="Order Online for Delivery"
              />
            }
            />
            ))}
          </div>

          <Spacer />
          <UniqueOverlay />
        </ModelWrapper>
    </ Container>
  )
}

export default Page;