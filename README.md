# ngx-apexsankey

Angular wrapper for [ApexSankey](https://github.com/apexcharts/apexsankey) — a JavaScript library for creating Sankey diagrams.

## Installation

```bash
npm install ngx-apexsankey apexsankey
```

> **Note:** `apexsankey` is a peer dependency and must be installed alongside `ngx-apexsankey`.

## Basic Usage

```typescript
import { Component } from "@angular/core";
import {
  NgxApexsankeyComponent,
  GraphData,
  SankeyOptions,
} from "ngx-apexsankey";

@Component({
  selector: "app-example",
  standalone: true,
  imports: [NgxApexsankeyComponent],
  template: `
    <ngx-apexsankey
      [data]="data"
      [options]="options"
      (nodeClick)="onNodeClick($event)"
    ></ngx-apexsankey>
  `,
})
export class ExampleComponent {
  data: GraphData = {
    nodes: [
      { id: "oil", title: "Oil" },
      { id: "gas", title: "Natural Gas" },
      { id: "coal", title: "Coal" },
      { id: "fossil", title: "Fossil Fuels" },
      { id: "energy", title: "Energy" },
    ],
    edges: [
      { source: "oil", target: "fossil", value: 15, type: "flow" },
      { source: "gas", target: "fossil", value: 20, type: "flow" },
      { source: "coal", target: "fossil", value: 25, type: "flow" },
      { source: "fossil", target: "energy", value: 60, type: "flow" },
    ],
  };

  options: Partial<SankeyOptions> = {
    width: 800,
    height: 500,
    nodeWidth: 20,
  };

  onNodeClick(node: unknown) {
    console.log("Node clicked:", node);
  }
}
```

## License Setup

If you have a commercial license, set it once at app initialization:

```typescript
// main.ts
import { setApexSankeyLicense } from "ngx-apexsankey";

setApexSankeyLicense("your-license-key-here");

bootstrapApplication(AppComponent, appConfig);
```

## Inputs

| Input     | Type                     | Required | Description                       |
| --------- | ------------------------ | -------- | --------------------------------- |
| `data`    | `GraphData`              | Yes      | Sankey data (nodes and edges)     |
| `options` | `Partial<SankeyOptions>` | No       | Sankey configuration (see below)  |

## Outputs

| Output      | Type                          | Description                  |
| ----------- | ----------------------------- | ---------------------------- |
| `nodeClick` | `EventEmitter<SankeyNode>`    | Emits when a node is clicked |

## SankeyOptions

All Sankey configuration is passed through the `options` input. `SankeyOptions` is an intersection of the sub-interfaces below — pass a partial; any omitted field falls back to its default.

#### Canvas & layout

| Option           | Type               | Default  | Description                                                         |
| ---------------- | ------------------ | -------- | ------------------------------------------------------------------- |
| `width`          | `number \| string` | `'100%'` | Canvas width (pixel number or CSS percentage)                       |
| `height`         | `number \| string` | `'auto'` | Canvas height. `'auto'` derives from width at 1.6:1                 |
| `spacing`        | `number`           | `20`     | Horizontal spacing between node columns in pixels                   |
| `viewPortWidth`  | `number`           | `800`    | Internal SVG viewport width                                         |
| `viewPortHeight` | `number`           | `500`    | Internal SVG viewport height                                        |
| `whitespace`     | `number`           | `0.18`   | Fraction of vertical space used as margins between nodes (0–1)      |
| `canvasStyle`    | `string`           | `''`     | Arbitrary CSS injected onto the SVG root container                  |
| `enableToolbar`  | `boolean`          | `true`   | Show the zoom/pan/export toolbar                                    |

#### Nodes

| Option            | Type                              | Default | Description                                                |
| ----------------- | --------------------------------- | ------- | ---------------------------------------------------------- |
| `nodeWidth`       | `number`                          | `20`    | Width of each node rectangle in pixels                     |
| `nodeBorderWidth` | `number`                          | `1`     | Border width of each node in pixels                        |
| `nodeBorderColor` | `string \| null`                  | `null`  | Node border color                                          |
| `onNodeClick`     | `(node: SankeyNode) => void`      | -       | Callback fired when a node is clicked (prefer `nodeClick` output) |

#### Edges

| Option             | Type      | Default | Description                                                     |
| ------------------ | --------- | ------- | --------------------------------------------------------------- |
| `edgeOpacity`      | `number`  | `0.4`   | Opacity of edges (0–1)                                          |
| `edgeGradientFill` | `boolean` | `true`  | Fill edges with a gradient between source and target colors    |
| `edgeGap`          | `number`  | `2`     | Gap in pixels between adjacent edges at their connection points |

#### Font

| Option       | Type     | Default     | Description                      |
| ------------ | -------- | ----------- | -------------------------------- |
| `fontSize`   | `string` | `'14px'`    | CSS font-size for node labels    |
| `fontFamily` | `string` | `''`        | CSS font-family for node labels  |
| `fontWeight` | `string` | `'400'`     | CSS font-weight for node labels  |
| `fontColor`  | `string` | `'#212121'` | CSS color for node labels        |

#### Tooltip

| Option                | Type                                          | Default                          | Description                                  |
| --------------------- | --------------------------------------------- | -------------------------------- | -------------------------------------------- |
| `enableTooltip`       | `boolean`                                     | `true`                           | Show edge tooltips on hover                  |
| `tooltipTheme`        | `'light' \| 'dark'`                           | -                                | Shortcut for dark/light color presets        |
| `tooltipBGColor`      | `string`                                      | `'#FFFFFF'`                      | Tooltip background color                     |
| `tooltipBorderColor`  | `string`                                      | `'#E2E8F0'`                      | Tooltip border color                         |
| `tooltipFontColor`    | `string`                                      | `'#1a1a1a'`                      | Tooltip font color                           |
| `tooltipId`           | `string`                                      | `'apexsankey-tooltip-container'` | HTML `id` for the tooltip container          |
| `tooltipTemplate`     | `(content: TooltipContent) => string`         | -                                | Custom edge (source→target) tooltip HTML     |
| `nodeTooltipTemplate` | `(content: NodeTooltipContent) => string`     | -                                | Custom per-node tooltip HTML                 |

#### Interaction & animation

| Option                   | Type      | Default | Description                                                    |
| ------------------------ | --------- | ------- | -------------------------------------------------------------- |
| `highlightConnectedPath` | `boolean` | `true`  | Highlight the connected flow path on hover                     |
| `dimOpacity`             | `number`  | `0.15`  | Opacity for dimmed (unrelated) elements during highlighting    |
| `animation.enabled`      | `boolean` | `true`  | Play entrance animation (disabled if `prefers-reduced-motion`) |
| `animation.duration`     | `number`  | `800`   | Entrance animation duration in ms                              |

#### Accessibility

| Option               | Type      | Default | Description                                                  |
| -------------------- | --------- | ------- | ------------------------------------------------------------ |
| `a11y.enabled`       | `boolean` | `true`  | Enable WCAG 2.1 AA accessibility features                    |
| `a11y.diagramLabel`  | `string`  | -       | Override the auto-generated aria-label on the SVG root       |
| `a11y.description`   | `string`  | -       | Populates the `<desc>` element for a longer description      |

## Data Structure

```ts
interface GraphData {
  nodes: SankeyNode[];
  edges: SankeyEdge[];
}

interface SankeyNode {
  id: string;       // unique identifier
  title: string;    // display label
  color?: string;   // override auto-assigned palette color
}

interface SankeyEdge {
  source: string;   // id of upstream node
  target: string;   // id of downstream node
  value: number;    // flow value — determines edge band width
  type: string;     // category label (used for grouping and tooltip)
}
```

## Custom Tooltip

```typescript
const options: Partial<SankeyOptions> = {
  enableTooltip: true,
  tooltipTemplate: ({ source, target, value }) => `
    <div style="padding: 8px;">
      <strong>${source?.title}</strong> → <strong>${target?.title}</strong>
      <br />Value: ${value}
    </div>
  `,
};
```

## TypeScript Support

```typescript
import {
  NgxApexsankeyComponent,
  setApexSankeyLicense,
} from "ngx-apexsankey";

import type {
  GraphData,
  SankeyNode,
  SankeyEdge,
  SankeyOptions,
  SankeyGraph,
  TooltipContent,
} from "ngx-apexsankey";
```

## License

ngx-apexsankey uses the same dual-license model as ApexCharts. See [LICENSE](./LICENSE) for details.

- **Free** for individuals, non-profits, and small businesses (< $2M revenue)
- **Commercial license** required for larger organizations

## Links

- [ApexSankey Documentation](https://github.com/apexcharts/apexsankey)
- [ApexCharts](https://apexcharts.com)
- [License Information](https://apexcharts.com/license)
