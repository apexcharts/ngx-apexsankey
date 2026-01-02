/**
 * node definition for sankey diagram
 */
export interface SankeyNode {
  /** unique identifier for the node */
  readonly id: string;
  /** display label for the node */
  readonly title: string;
  /** optional custom color for the node */
  readonly color?: string;
}

/**
 * edge definition connecting two nodes
 */
export interface SankeyEdge {
  /** source node id */
  readonly source: string;
  /** target node id */
  readonly target: string;
  /** edge weight/size */
  readonly value: number;
  /** optional grouping type */
  readonly type?: string;
  /** optional custom color for the edge */
  readonly color?: string;
}

/**
 * common options for the sankey diagram
 */
export interface CommonOptions {
  /** css styles for canvas root container */
  readonly canvasStyle?: string;
  /** enable/disable graph toolbar */
  readonly enableToolbar?: boolean;
  /** height of graph container */
  readonly height?: number | string;
  /** spacing from top and left of graph container */
  readonly spacing?: number;
  /** viewport height */
  readonly viewPortHeight?: number;
  /** viewport width */
  readonly viewPortWidth?: number;
  /** width of graph container */
  readonly width?: number | string;
}

/**
 * node styling options
 */
export interface NodeOptions {
  /** border color of nodes */
  readonly nodeBorderColor?: string;
  /** border width of nodes in pixels */
  readonly nodeBorderWidth?: number;
  /** width of graph nodes */
  readonly nodeWidth?: number;
  /** callback function for node click */
  readonly onNodeClick?: (node: SankeyNode) => void;
}

/**
 * edge styling options
 */
export interface EdgeOptions {
  /** enable gradient fill based on source and target node colors */
  readonly edgeGradientFill?: boolean;
  /** opacity value for edges (0 to 1) */
  readonly edgeOpacity?: number;
}

/**
 * font styling options
 */
export interface FontOptions {
  /** font color of node labels */
  readonly fontColor?: string;
  /** font family of node labels */
  readonly fontFamily?: string;
  /** font size of node labels */
  readonly fontSize?: string;
  /** font weight of node labels */
  readonly fontWeight?: string;
}

/**
 * tooltip configuration options
 */
export interface TooltipOptions {
  /** enable tooltip on hover */
  readonly enableTooltip?: boolean;
  /** background color of tooltip */
  readonly tooltipBGColor?: string;
  /** border color of tooltip */
  readonly tooltipBorderColor?: string;
  /** tooltip html element id */
  readonly tooltipId?: string;
  /** html template function for tooltip */
  readonly tooltipTemplate?: (content: TooltipContent) => string;
}

/**
 * content passed to tooltip template function
 */
export interface TooltipContent {
  source: SankeyNode;
  target: SankeyNode;
  value: number;
}

/**
 * data options for custom ordering and link alignment
 */
export interface DataOptions {
  /** custom node ordering - list of layers, each containing bands of node ids */
  readonly order?: string[][][];
  /** whether to align link types across nodes */
  readonly alignLinkTypes?: boolean;
}

/**
 * complete sankey options combining all option interfaces
 */
export type SankeyOptions = CommonOptions &
  NodeOptions &
  EdgeOptions &
  FontOptions &
  TooltipOptions;

/**
 * graph data structure containing nodes, edges, and optional configuration
 */
export interface GraphData {
  /** array of nodes */
  readonly nodes: SankeyNode[];
  /** array of edges connecting nodes */
  readonly edges: SankeyEdge[];
  /** optional data-level options */
  readonly options?: DataOptions;
}

/**
 * sankey graph instance returned by ApexSankey
 */
export interface SankeyGraph {
  /** the graphlib graph instance */
  graph: unknown;
  /** maximum rank in the graph */
  maxRank: number;
  /** re-render the graph */
  render: (options?: { keepOldPosition?: boolean }) => void;
  /** clear the canvas */
  clear?: () => void;
  /** export to svg */
  exportToSvg?: () => void;
  /** canvas height */
  height: number;
  /** canvas width */
  width: number;
  /** canvas spacing */
  spacing: number;
}

/**
 * apexsankey constructor type
 */
export interface ApexSankeyConstructor {
  new (element: HTMLElement, options?: Partial<SankeyOptions>): ApexSankeyInstance;
  setLicense: (key: string) => void;
}

/**
 * apexsankey instance type
 */
export interface ApexSankeyInstance {
  element: HTMLElement;
  options: SankeyOptions;
  graph: SankeyGraph;
  render: (data: GraphData) => SankeyGraph;
}

/**
 * extended window interface for accessing ApexSankey globally
 */
export interface ApexSankeyWindow extends Window {
  ApexSankey?: ApexSankeyConstructor;
  __APEX_SANKEY_LICENSE_KEY__?: string;
}
