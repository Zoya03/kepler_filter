
import BottomWidgetFactory from './components/bottom-widget.js';
import { mockData_Filters } from '../src/utils/mock-data_Filters';
import { mockData_Datasets } from '../src/utils/mock-data_Datasets';
import { mockData_uiState } from '../src/utils/mock-data_uiState';
import { mockData_layers } from '../src/utils/mock-data_layers';
import { mockData_animationConfig } from '../src/utils/mock-data_animationConfig';

App.deps = [
  BottomWidgetFactory
]

function App(TimeWidget) {
  
  return (
    <div className="App">
      <TimeWidget
        filters = {mockData_Filters}
        datasets = {mockData_Datasets}
        uiState = {mockData_uiState}
        layers = {mockData_layers}
        animationConfig = {mockData_animationConfig.animationConfig}
        visStateActions = {mockData_animationConfig.visStateActions}
        sidePanelWidth ={mockData_animationConfig.sidePanelWidth}
        containerW ={mockData_animationConfig.containerW}
        />
    </div>
  );
}

export default App;
