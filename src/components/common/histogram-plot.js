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

import React, {useMemo} from 'react';
import {scaleLinear} from 'd3-scale';
import {max} from 'd3-array';
import styled from 'styled-components';
import classnames from 'classnames';

const histogramStyle = {
  highlightW: 0.7,
  unHighlightedW: 0.4
};

const HistogramWrapper = styled.svg`
  overflow: visible;
  .histogram-bars {
    rect {
      fill: ${props => props.theme.histogramFillOutRange};
    }
    rect.in-range {
      fill: ${props => props.theme.histogramFillInRange};
    }
  }
`;

function HistogramPlotFactory() {
  const height = 102;
  const width = 746;
  const margin = {bottom: 0, left: 0, right: 0, top: 18};
  const isRanged = "true";
  const histogram = [
    {count: 1, x0: 94107, x1: 94107.2},
    {count: 0, x0: 94107.2, x1: 94107.4},
    {count: 0, x0: 94107.4, x1: 94107.6},
    {count: 0, x0: 94107.6, x1: 94107.8},
    {count: 0, x0: 94107.8, x1: 94108},
    {count: 0, x0: 94108, x1: 94108.2},
    {count: 0, x0: 94108.2, x1: 94108.4},
    {count: 0, x0: 94108.4, x1: 94108.6},
    {count: 0, x0: 94108.6, x1: 94108.8},
    {count: 0, x0: 94108.8, x1: 94109},
    {count: 0, x0: 94109, x1: 94109.2},
    {count: 0, x0: 94109.2, x1: 94109.4},
    {count: 0, x0: 94109.4, x1: 94109.6},
    {count: 0, x0: 94109.6, x1: 94109.8},
    {count: 0, x0: 94109.8, x1: 94110},
    {count: 0, x0: 94110, x1: 94110.2},
    {count: 0, x0: 94110.2, x1: 94110.4},
    {count: 0, x0: 94110.4, x1: 94110.6},
    {count: 0, x0: 94110.6, x1: 94110.8},
    {count: 0, x0: 94110.8, x1: 94111},
    {count: 0, x0: 94111, x1: 94111.2},
    {count: 0, x0: 94111.2, x1: 94111.4},
    {count: 0, x0: 94111.4, x1: 94111.6},
    {count: 0, x0: 94111.6, x1: 94111.8},
    {count: 0, x0: 94111.8, x1: 94112},
    {count: 0, x0: 94112, x1: 94112.2},
    {count: 0, x0: 94112.2, x1: 94112.4},
    {count: 0, x0: 94112.4, x1: 94112.6},
    {count: 0, x0: 94112.6, x1: 94112.8},
    {count: 0, x0: 94112.8, x1: 94113},
    {count: 0, x0: 94113, x1: 94113.2},
    {count: 0, x0: 94113.2, x1: 94113.4},
    {count: 0, x0: 94113.4, x1: 94113.6},
    {count: 0, x0: 94113.6, x1: 94113.8},
    {count: 0, x0: 94113.8, x1: 94114},
    {count: 0, x0: 94114, x1: 94114.2},
    {count: 0, x0: 94114.2, x1: 94114.4},
    {count: 0, x0: 94114.4, x1: 94114.6},
    {count: 0, x0: 94114.6, x1: 94114.8},
    {count: 0, x0: 94114.8, x1: 94115},
    {count: 0, x0: 94115, x1: 94115.2},
    {count: 0, x0: 94115.2, x1: 94115.4},
    {count: 0, x0: 94115.4, x1: 94115.6},
    {count: 0, x0: 94115.6, x1: 94115.8},
    {count: 0, x0: 94115.8, x1: 94116},
    {count: 0, x0: 94116, x1: 94116.2},
    {count: 0, x0: 94116.2, x1: 94116.4},
    {count: 0, x0: 94116.4, x1: 94116.6},
    {count: 0, x0: 94116.6, x1: 94116.8},
    {count: 0, x0: 94116.8, x1: 94117},
    {count: 0, x0: 94117, x1: 94117.2},
    {count: 0, x0: 94117.2, x1: 94117.4},
    {count: 0, x0: 94117.4, x1: 94117.6},
    {count: 0, x0: 94117.6, x1: 94117.8},
    {count: 0, x0: 94117.8, x1: 94118},
    {count: 0, x0: 94118, x1: 94118.2},
    {count: 0, x0: 94118.2, x1: 94118.4},
    {count: 0, x0: 94118.4, x1: 94118.6},
    {count: 0, x0: 94118.6, x1: 94118.8},
    {count: 0, x0: 94118.8, x1: 94119},
    {count: 0, x0: 94119, x1: 94119.2},
    {count: 0, x0: 94119.2, x1: 94119.4},
    {count: 0, x0: 94119.4, x1: 94119.6},
    {count: 0, x0: 94119.6, x1: 94119.8},
    {count: 0, x0: 94119.8, x1: 94120},
    {count: 0, x0: 94120, x1: 94120.2},
    {count: 0, x0: 94120.2, x1: 94120.4},
    {count: 0, x0: 94120.4, x1: 94120.6},
    {count: 0, x0: 94120.6, x1: 94120.8},
    {count: 0, x0: 94120.8, x1: 94121},
    {count: 0, x0: 94121, x1: 94121.2},
    {count: 0, x0: 94121.2, x1: 94121.4},
    {count: 0, x0: 94121.4, x1: 94121.6},
    {count: 0, x0: 94121.6, x1: 94121.8},
    {count: 0, x0: 94121.8, x1: 94122},
    {count: 0, x0: 94122, x1: 94122.2},
    {count: 0, x0: 94122.2, x1: 94122.4},
    {count: 0, x0: 94122.4, x1: 94122.6},
    {count: 0, x0: 94122.6, x1: 94122.8},
    {count: 0, x0: 94122.8, x1: 94123},
    {count: 0, x0: 94123, x1: 94123.2},
    {count: 0, x0: 94123.2, x1: 94123.4},
    {count: 0, x0: 94123.4, x1: 94123.6},
    {count: 0, x0: 94123.6, x1: 94123.8},
    {count: 0, x0: 94123.8, x1: 94124},
    {count: 0, x0: 94124, x1: 94124.2},
    {count: 0, x0: 94124.2, x1: 94124.4},
    {count: 0, x0: 94124.4, x1: 94124.6},
    {count: 0, x0: 94124.6, x1: 94124.8},
    {count: 0, x0: 94124.8, x1: 94125},
    {count: 0, x0: 94125, x1: 94125.2},
    {count: 0, x0: 94125.2, x1: 94125.4},
    {count: 0, x0: 94125.4, x1: 94125.6},
    {count: 0, x0: 94125.6, x1: 94125.8},
    {count: 0, x0: 94125.8, x1: 94126},
    {count: 0, x0: 94126, x1: 94126.2},
    {count: 0, x0: 94126.2, x1: 94126.4},
    {count: 0, x0: 94126.4, x1: 94126.6},
    {count: 0, x0: 94126.6, x1: 94126.8},
    {count: 0, x0: 94126.8, x1: 94127},
    {count: 0, x0: 94127, x1: 94127.2},
    {count: 0, x0: 94127.2, x1: 94127.4},
    {count: 0, x0: 94127.4, x1: 94127.6},
    {count: 0, x0: 94127.6, x1: 94127.8},
    {count: 0, x0: 94127.8, x1: 94128},
    {count: 0, x0: 94128, x1: 94128.2},
    {count: 0, x0: 94128.2, x1: 94128.4},
    {count: 0, x0: 94128.4, x1: 94128.6},
    {count: 0, x0: 94128.6, x1: 94128.8},
    {count: 0, x0: 94128.8, x1: 94129},
    {count: 1, x0: 94129, x1: 94129.2},
    {count: 0, x0: 94129.2, x1: 94129.4},
    {count: 0, x0: 94129.4, x1: 94129.6},
    {count: 0, x0: 94129.6, x1: 94129.8},
    {count: 0, x0: 94129.8, x1: 94130},
    {count: 0, x0: 94130, x1: 94130.2},
    {count: 0, x0: 94130.2, x1: 94130.4},
    {count: 0, x0: 94130.4, x1: 94130.6},
    {count: 0, x0: 94130.6, x1: 94130.8},
    {count: 0, x0: 94130.8, x1: 94131},
    {count: 0, x0: 94131, x1: 94131.2},
    {count: 0, x0: 94131.2, x1: 94131.4},
    {count: 0, x0: 94131.4, x1: 94131.6},
    {count: 0, x0: 94131.6, x1: 94131.8},
    {count: 0, x0: 94131.8, x1: 94132},
    {count: 1, x0: 94132, x1: 94132}
  ];
  
  const HistogramPlot = ({width, height, margin, isRanged, histogram, value, brushComponent}) => {

    const domain = useMemo(() => [histogram[0].x0, histogram[histogram.length - 1].x1], [
      histogram
    ]);
    const dataId = Object.keys(histogram[0]).filter(k => k !== 'x0' && k !== 'x1')[0];

    // use 1st for now
    const getValue = useMemo(() => d => d[dataId], [dataId]);

    const x = useMemo(
      () =>
        scaleLinear()
          .domain(domain)
          .range([0, width]),
      [domain, width]
    );

    const y = useMemo(
      () =>
        scaleLinear()
          .domain([0, Number(max(histogram, getValue))])
          .range([0, height]),
      [histogram, height, getValue]
    );

    const barWidth = width / histogram.length;

    return (
      <HistogramWrapper width={width} height={height} style={{marginTop: `${margin.top}px`}}>
        <g className="histogram-bars">
          {histogram.map(bar => {
            const inRange = bar.x1 <= value[1] && bar.x0 >= value[0];
            const wRatio = inRange ? histogramStyle.highlightW : histogramStyle.unHighlightedW;
            return (
              <rect
                className={classnames({'in-range': inRange})}
                key={bar.x0}
                height={y(getValue(bar))}
                width={barWidth * wRatio}
                x={x(bar.x0) + (barWidth * (1 - wRatio)) / 2}
                rx={1}
                ry={1}
                y={height - y(getValue(bar))}
              />
            );
          })}
        </g>
        <g transform={`translate(${isRanged ? 0 : barWidth / 2}, 0)`}>{brushComponent}</g>
      </HistogramWrapper>
    );
  };

  const EmpptyOrPlot = props =>
    !props.histogram || !props.histogram.length ? null : <HistogramPlot {...props} />;

  return EmpptyOrPlot;
}
export default HistogramPlotFactory;
