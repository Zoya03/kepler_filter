import TimeRangeSliderFactory from './common/time-range-slider';
import RangeSliderFactory from './common/range-slider';
import FieldSelectorFactory, {FieldListItemFactoryFactory} from './common/field-selector';
import FieldTokenFactory from './common/field-token';
import {appInjector} from './container';
import * as Icons from './common/icons';

//components
export {default as BottomWidgetContainer, default, injectComponents, ContainerFactory} from './container';


//factories
//export {default as BottomWidgetFactory, BottomWidget} from './common/bottom-widget';
export {
    default as BottomWidgetFactory,
    LayerAnimationControllerFactory,
    FilterAnimationControllerFactory
  } from './bottom-widget';

// common factory
export {default as AnimationControlFactory} from './common/animation-control/animation-control';
export {default as AnimationControllerFactory} from './common/animation-control/animation-controller';
export {default as SpeedControlFactory} from './common/animation-control/speed-control';
export {default as PlaybackControlsFactory} from './common/animation-control/playback-controls';
export {default as FloatingTimeDisplayFactory} from './common/animation-control/floating-time-display';
export {default as AnimationSpeedSliderFactory} from './common/animation-control/animation-speed-slider';
export {default as RangePlotFactory} from './common/range-plot';
export {default as HistogramPlotFactory} from './common/histogram-plot';
export {default as LineChartFactory} from './common/line-chart';
export {default as RangeBrushFactory} from './common/range-brush';
export {default as TimeSliderMarkerFactory} from './common/time-slider-marker';
export {default as TimeRangeSliderTimeTitleFactory} from './common/time-range-slider-time-title';


//filter factory
export {default as TimeWidgetFactory, TimeWidgetTopFactory} from './filters/time-widget';
export {
    timeRangeSliderFieldsSelector,
    default as TimeRangeFilterFactory
  } from './filters/time-range-filter';


// Injector
export {injector, provideRecipesToInjector, withState} from './injector';

//Common Components
export {default as Slider} from './common/slider/slider';
export {default as ItemSelector} from './common/item-selector/item-selector';
export {default as Typeahead} from './common/item-selector/typeahead';
export {default as DropdownList} from './common/item-selector/dropdown-list';
export {default as FieldSelectorFactory} from './common/field-selector';
export {default as FieldTokenFactory} from './common/field-token';
export {DatasetSquare} from './common/styled-components';

// side pane components
export {default as StyledDropdownSelect} from './common/item-selector/item-selector';

export * from './common/styled-components';


export {Icons};

// Individual Component from Dependency Tree
export const TimeRangeSlider = appInjector.get(TimeRangeSliderFactory);
export const RangeSlider = appInjector.get(RangeSliderFactory);
export const FieldSelector = appInjector.get(FieldSelectorFactory);
export const FieldToken = appInjector.get(FieldTokenFactory);

export {
    appInjector,
    TimeRangeSliderFactory,
    RangeSliderFactory,
};

// Context
export {default as KeplerGlContext, RootContext} from './../components/context';