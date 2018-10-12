import { graph } from './graph';
import { loadPluginCss } from 'app/plugins/sdk';

loadPluginCss({
	dark: 'plugins\jojo-checkbox-panel\src\css',
  //dark: 'plugins/piechart-panel-master/src/css/exemples.dark.css',
  //light: 'plugins/piechart-panel-master/src/css/exemples.light.css',
});

export { graph as PanelCtrl };
