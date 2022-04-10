import React from 'react';

import {ModelWrapper, ModelSection} from "../Model"
import DefaultOverlayContant from '../DefaultOverlayContant'

import { Container } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
        <ModelWrapper>
          <div>
            {[
              "model One",
              // "model Two",
              // "model Three",
              // "model Four",
              // "model Five",
              // "model Six",
              // "model Seven",
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
        </ModelWrapper>
    </ Container>
  )
}

export default Page;