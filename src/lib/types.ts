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
  // theming
  /**
   * A named built-in theme (`'light'`, `'dark'`, `'midnight'`, `'mint'`,
   * `'sunset'`), a name registered with `ApexSankey.registerTheme`, or an inline
   * theme object. Options you set explicitly still win. Left unset (and with
   * `tooltipTheme` unset), the tooltip follows a design system that declares a
   * dark variant, with the `apexsankey/ignite-ui` add-on loaded; naming any
   * theme, `'light'` included, pins the tooltip.
   */
  readonly theme?: string | object;
  /**
   * `false` stops the diagram reading the `--apx-*` family tokens and the page's
   * design system (including its variant). Defaults to `true`. Requires
   * apexsankey >= 1.14.0.
   */
  readonly tokens?: boolean;
  /**
   * `false` stops the diagram reading the page's design system (Ignite UI's
   * `--ig-*` tokens, including its variant); the `--apx-*` tokens still apply.
   * Defaults to `true` and has an effect only while the `apexsankey/ignite-ui`
   * add-on is loaded. Requires apexsankey >= 1.14.0.
   */
  readonly designSystem?: boolean;
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
  /**
   * Re-read the theme and repaint. Present from apexsankey 1.14.0; optional
   * because the peer range allows older cores.
   */
  refreshTokens?: () => void;
}

/**
 * extended window interface for accessing ApexSankey globally
 */
export interface ApexSankeyWindow extends Window {
  ApexSankey?: ApexSankeyConstructor;
  __APEX_SANKEY_LICENSE_KEY__?: string;
}
