// main component
export { NgxApexsankeyComponent } from './lib/ngx-apexsankey.component';

// utility functions
export { setApexSankeyLicense } from './lib/utils';

// types
export type {
  // data types
  SankeyNode,
  SankeyEdge,
  GraphData,
  DataOptions,

  // options types
  SankeyOptions,
  CommonOptions,
  NodeOptions,
  EdgeOptions,
  FontOptions,
  TooltipOptions,
  TooltipContent,

  // instance types
  SankeyGraph,
  ApexSankeyInstance,
  ApexSankeyConstructor,
} from './lib/types';
