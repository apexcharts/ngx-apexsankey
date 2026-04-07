// ---------------------------------------------------------------------------
// Core data types — kept here because ngx-apexsankey loads ApexSankey via
// the global window object (CDN pattern) and cannot import types from
// 'apexsankey' at build time without it being a devDependency.
// ---------------------------------------------------------------------------

/**
 * node definition for sankey diagram
 */
export interface SankeyNode {
  readonly id: string;
  readonly title: string;
  readonly color?: string;
}

/**
 * edge definition connecting two nodes
 */
export interface SankeyEdge {
  readonly source: string;
  readonly target: string;
  readonly value: number;
  readonly type?: string;
  readonly color?: string;
}

/**
 * data options for custom ordering and link alignment
 */
export interface DataOptions {
  readonly order?: string[][][];
  readonly alignLinkTypes?: boolean;
}

/**
 * complete data structure for sankey diagram
 */
export interface GraphData {
  readonly nodes: SankeyNode[];
  readonly edges: SankeyEdge[];
  readonly options?: DataOptions;
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
 * combined sankey configuration options.
 * Mirrors the SankeyOptions intersection type in core apexsankey.
 */
export interface SankeyOptions {
  // canvas / layout
  readonly canvasStyle?: string;
  readonly enableToolbar?: boolean;
  readonly height?: number | string;
  readonly spacing?: number;
  readonly viewPortHeight?: number;
  readonly viewPortWidth?: number;
  readonly width?: number | string;
  // node
  readonly nodeBorderColor?: string;
  readonly nodeBorderWidth?: number;
  readonly nodeWidth?: number;
  readonly onNodeClick?: (node: SankeyNode) => void;
  // edge
  readonly edgeGradientFill?: boolean;
  readonly edgeOpacity?: number;
  readonly edgeGap?: number;
  // font
  readonly fontColor?: string;
  readonly fontFamily?: string;
  readonly fontSize?: string;
  readonly fontWeight?: string;
  // tooltip
  readonly enableTooltip?: boolean;
  readonly tooltipBGColor?: string;
  readonly tooltipBorderColor?: string;
  readonly tooltipId?: string;
  readonly tooltipTemplate?: (content: TooltipContent) => string;
  // interaction
  readonly highlightOnHover?: boolean;
  readonly dimOnHover?: boolean;
  // animation
  readonly enableAnimation?: boolean;
  readonly animationDuration?: number;
}

/**
 * sankey graph instance returned by ApexSankey.render()
 */
export interface SankeyGraph {
  graph: unknown;
  maxRank: number;
  render(options?: { keepOldPosition?: boolean }): void;
  clear?: () => void;
  exportToSvg?: () => void;
  height: number;
  width: number;
  spacing: number;
}

/**
 * apexsankey constructor type (loaded via window global)
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
  destroy: () => void;
}

/**
 * extended window interface for accessing ApexSankey globally
 */
export interface ApexSankeyWindow extends Window {
  ApexSankey?: ApexSankeyConstructor;
  __APEX_SANKEY_LICENSE_KEY__?: string;
}
