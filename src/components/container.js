// Copyright (c) 2022 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React from 'react';
import BottomWidgetContainer from './bottom-widget';
import { mockData_Filters } from './../utils/mock-data_Filters';
import { mockData_Datasets } from './../utils/mock-data_Datasets';
import { mockData_uiState } from './../utils/mock-data_uiState';
import { mockData_layers } from './../utils/mock-data_layers';
import { mockData_animationConfig } from './../utils/mock-data_animationConfig';
import BottomWidgetFactory from './bottom-widget';

export const ERROR_MSG = {
  noState:
    `kepler.gl state does not exist. ` +
    `You might forget to mount keplerGlReducer in your root reducer.` +
    `If it is not mounted as state.keplerGl by default, you need to provide getState as a prop`
};

ContainerFactory.deps = [BottomWidgetFactory];

function ContainerFactory() {
      return (
        <>
        <BottomWidgetContainer
        filters = {mockData_Filters}
        datasets = {mockData_Datasets}
        uiState = {mockData_uiState}
        layers = {mockData_layers}
        animationConfig = {mockData_animationConfig}

        />
        </>
      );
    }
  

export default ContainerFactory;
 