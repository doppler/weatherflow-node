import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { Windchart } from './Windchart';

export const plugin = new PanelPlugin<SimpleOptions>(Windchart).setPanelOptions(builder => {
  return builder;
});
