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

## Methods

| Method            | Description                                                                 |
| ----------------- | --------------------------------------------------------------------------- |
| `refreshTokens()` | Re-read the theme and repaint in place (`apexsankey >= 1.14.0`); see [Using with Ignite UI](#using-with-ignite-ui) |

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

#### Theming

| Option         | Type               | Default     | Description                                                                 |
| -------------- | ------------------ | ----------- | --------------------------------------------------------------------------- |
| `theme`        | `string \| object` | `undefined` | A named theme (`'light'`, `'dark'`, `'midnight'`, `'mint'`, `'sunset'`), a registered name, or an inline theme |
| `tokens`       | `boolean`          | `true`      | Read the `--apx-*` family tokens and the page's design system               |
| `designSystem` | `boolean`          | `true`      | Follow the page's design system (see [Using with Ignite UI](#using-with-ignite-ui)) |

## Using with Ignite UI

From ApexSankey 1.14.0, diagrams can follow the Ignite UI theme on the page: the
node palette, label text, the focus ring, the font, the tooltip, light or dark. It
is an add-on that ships in the core `apexsankey` package. Import it once, in
`main.ts` or anywhere before the first diagram renders:

```typescript
// main.ts
import "apexsankey/ignite-ui";
```

Without a bundler, load `apexsankey.ignite-ui.min.js` with a script tag (or the
`scripts` array in `angular.json`), before or after `apexsankey.min.js`. Without
the add-on the `--ig-*` tokens are ignored, with no error; the `--apx-*` tokens
work either way.

When several layers set the same thing, the highest one wins:

| Rank | Source                                       |
| ---- | -------------------------------------------- |
| 1    | An option you pass in `options`              |
| 2    | An `--apex-sankey-*` CSS variable            |
| 3    | An `--apx-*` family token                    |
| 4    | The named or registered `theme`              |
| 5    | The Ignite UI `--ig-*` tokens                |
| 6    | The built-in defaults                        |

To turn it off for one diagram, pass `designSystem: false` (the `--apx-*` tokens
still apply) or `tokens: false` (neither the `--apx-*` tokens nor the design
system are read):

```html
<ngx-apexsankey [data]="data" [options]="{ designSystem: false }"></ngx-apexsankey>
```

The diagram reads its theme whenever it renders, including when `data` or
`options` change. When the theme changes without a prop change, such as after a
stylesheet swap (an Ignite UI light/dark switch, say) or when the add-on loads
after the first render, call `refreshTokens()` on the component. Nodes stay
where they are, dragged ones included, and the view does not move:

```typescript
@ViewChild(NgxApexsankeyComponent) sankey!: NgxApexsankeyComponent;

themeLink.onload = () => this.sankey.refreshTokens();
```

If the theme's font is a web font that finishes loading after the first render,
the labels are drawn with the fallback font until then; call `refreshTokens()` once
it has loaded:

```typescript
document.fonts.ready.then(() => this.sankey.refreshTokens());
```

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

ngx-apexsankey bundles ApexSankey, which is included in the **Pro** plan and above. See [LICENSE](./LICENSE.md) for details.

- **There is no free tier for ApexSankey.** The $2M threshold that makes some Apex products free does not apply to it: a Pro license is required whatever your financial resources, by companies, individuals, non-profits and educators alike.
- Without a valid license key ApexSankey renders with a trial watermark, which is for evaluation only.
- One license key works across every Apex product, so a customer of one does not buy a second for another.

## Links

- [ApexSankey Documentation](https://github.com/apexcharts/apexsankey)
- [ApexCharts](https://apexcharts.com)
- [License Information](https://apexcharts.com/license)
