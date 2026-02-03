import {
  Component,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ChangeDetectionStrategy,
} from "@angular/core";
import {
  GraphData,
  SankeyOptions,
  SankeyGraph,
  SankeyNode,
  ApexSankeyInstance,
} from "./types";
import { getApexSankeyClass, applyStoredLicense } from "./utils";

/**
 * angular wrapper component for ApexSankey
 * renders a sankey diagram using the ApexSankey library
 *
 * @example
 * ```html
 * <ngx-apexsankey
 *   [data]="sankeyData"
 *   [options]="sankeyOptions"
 *   (nodeClick)="onNodeClick($event)">
 * </ngx-apexsankey>
 * ```
 */
@Component({
  selector: "ngx-apexsankey",
  standalone: true,
  template: `<div #container [style]="containerStyle"></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxApexsankeyComponent implements OnInit, OnDestroy, OnChanges {
  /**
   * sankey diagram data containing nodes and edges
   */
  @Input({ required: true }) data!: GraphData;

  /**
   * configuration options for the sankey diagram
   */
  @Input() options: Partial<SankeyOptions> = {};

  /**
   * emits when a node is clicked
   */
  @Output() nodeClick = new EventEmitter<SankeyNode>();

  /**
   * reference to the container element
   */
  @ViewChild("container", { static: true })
  containerRef!: ElementRef<HTMLElement>;

  /**
   * the rendered sankey graph instance
   */
  graph: SankeyGraph | null = null;

  private instance: ApexSankeyInstance | null = null;
  private isBrowser = typeof window !== "undefined";

  /**
   * computed container styles from options
   */
  get containerStyle(): Record<string, string> {
    const style: Record<string, string> = {};

    if (this.options?.width) {
      style["width"] =
        typeof this.options.width === "number"
          ? `${this.options.width}px`
          : this.options.width;
    }

    if (this.options?.height) {
      style["height"] =
        typeof this.options.height === "number"
          ? `${this.options.height}px`
          : this.options.height;
    }

    return style;
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.initChart();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.isBrowser) {
      return;
    }

    // if options changed, recreate the chart
    if (changes["options"] && !changes["options"].firstChange) {
      this.recreateChart();
      return;
    }

    // if data changed, re-render
    if (changes["data"] && !changes["data"].firstChange) {
      this.renderChart();
    }
  }

  ngOnDestroy(): void {
    this.destroyChart();
  }

  /**
   * initializes the sankey chart
   */
  private initChart(): void {
    const container = this.containerRef?.nativeElement;
    if (!container) {
      return;
    }

    const ApexSankey = getApexSankeyClass();

    if (!ApexSankey) {
      throw new Error(
        "[ngx-apexsankey] ApexSankey not found. " +
          "Make sure to import apexsankey and @svgdotjs/svg.js before using this component. " +
          "See README for installation instructions.",
      );
    }

    // apply stored license if set before ApexSankey loaded
    applyStoredLicense(ApexSankey);

    // merge options with node click handler
    const mergedOptions = this.getMergedOptions();

    // create instance and render
    this.instance = new ApexSankey(container, mergedOptions);
    this.graph = this.instance.render(this.data);
  }

  /**
   * re-renders the chart with current data
   */
  private renderChart(): void {
    if (!this.instance || !this.containerRef?.nativeElement) {
      return;
    }

    // clear existing content
    if (this.graph?.clear) {
      this.graph.clear();
    }

    // re-render with new data
    this.graph = this.instance.render(this.data);
  }

  /**
   * destroys and recreates the chart with new options
   */
  private recreateChart(): void {
    this.destroyChart();
    this.initChart();
  }

  /**
   * destroys the chart instance
   */
  private destroyChart(): void {
    if (this.graph?.clear) {
      this.graph.clear();
    }

    const container = this.containerRef?.nativeElement;
    if (container) {
      container.innerHTML = "";
    }

    this.graph = null;
    this.instance = null;
  }

  /**
   * merges user options with the node click event emitter
   */
  private getMergedOptions(): Partial<SankeyOptions> {
    const options = { ...this.options };

    // wrap onNodeClick to also emit the event
    const userCallback = options.onNodeClick;
    options.onNodeClick = (node: SankeyNode) => {
      this.nodeClick.emit(node);
      if (userCallback) {
        userCallback(node);
      }
    };

    return options;
  }
}
