# ngx-apexsankey

Angular wrapper for [ApexSankey](https://github.com/apexcharts/apexsankey) - A JavaScript library to create Sankey diagrams.

## Installation

```bash
npm install ngx-apexsankey apexsankey @svgdotjs/svg.js
```

## Loading ApexSankey

**Important:** You must load ApexSankey before using the Angular component. Choose one of the following methods:

### Option 1: CDN Script Tags (Recommended)

Add the scripts to your `index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/@svgdotjs/svg.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/apexsankey/apexsankey.min.js"></script>
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>
```

### Option 2: Angular.json Scripts

Add to the `scripts` array in your `angular.json`:

```json
{
  "architect": {
    "build": {
      "options": {
        "scripts": [
          "node_modules/@svgdotjs/svg.js/dist/svg.min.js",
          "node_modules/apexsankey/apexsankey.min.js"
        ]
      }
    }
  }
}
```

## Quick Start

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
    >
    </ngx-apexsankey>
  `,
})
export class ExampleComponent {
  data: GraphData = {
    nodes: [
      { id: "oil", title: "Oil" },
      { id: "gas", title: "Natural Gas" },
      { id: "fossil", title: "Fossil Fuels" },
      { id: "energy", title: "Energy" },
    ],
    edges: [
      { source: "oil", target: "fossil", value: 15 },
      { source: "gas", target: "fossil", value: 20 },
      { source: "fossil", target: "energy", value: 35 },
    ],
  };

  options: Partial<SankeyOptions> = {
    width: 800,
    height: 600,
    nodeWidth: 20,
  };

  onNodeClick(node: any) {
    console.log("Node clicked:", node);
  }
}
```

## License Setup

If you have a commercial license, set it once at app initialization:

```typescript
// app.config.ts
import { setApexSankeyLicense } from "ngx-apexsankey";

setApexSankeyLicense("your-license-key-here");

export const appConfig: ApplicationConfig = {
  providers: [],
};
```

## Inputs

| Input     | Type                     | Required | Description                           |
| --------- | ------------------------ | -------- | ------------------------------------- |
| `data`    | `GraphData`              | Yes      | Sankey diagram data (nodes and edges) |
| `options` | `Partial<SankeyOptions>` | No       | Configuration options for the diagram |

## Outputs

| Output      | Type                       | Description                  |
| ----------- | -------------------------- | ---------------------------- |
| `nodeClick` | `EventEmitter<SankeyNode>` | Emits when a node is clicked |

## Data Format

### Nodes

```typescript
interface SankeyNode {
  id: string; // unique identifier
  title: string; // display label
  color?: string; // optional custom color
}
```

### Edges

```typescript
interface SankeyEdge {
  source: string; // source node id
  target: string; // target node id
  value: number; // edge weight/size
  type?: string; // optional grouping type
  color?: string; // optional custom color
}
```

## Options

| Option               | Type                  | Default                      | Description                                  |
| -------------------- | --------------------- | ---------------------------- | -------------------------------------------- |
| `width`              | `number \| string`    | `800`                        | Width of graph container                     |
| `height`             | `number \| string`    | `800`                        | Height of graph container                    |
| `canvasStyle`        | `string`              | `""`                         | CSS styles for canvas root container         |
| `spacing`            | `number`              | `100`                        | Spacing from top and left of graph container |
| `nodeWidth`          | `number`              | `20`                         | Width of graph nodes                         |
| `nodeBorderWidth`    | `number`              | `1`                          | Border width of nodes in pixels              |
| `nodeBorderColor`    | `string`              | `""`                         | Border color of nodes                        |
| `onNodeClick`        | `(node) => void`      | `undefined`                  | Callback function for node click             |
| `edgeOpacity`        | `number`              | `0.4`                        | Opacity value for edges (0 to 1)             |
| `edgeGradientFill`   | `boolean`             | `true`                       | Enable gradient fill based on node colors    |
| `enableTooltip`      | `boolean`             | `false`                      | Enable tooltip on hover                      |
| `enableToolbar`      | `boolean`             | `false`                      | Enable/disable graph toolbar                 |
| `tooltipId`          | `string`              | `"sankey-tooltip-container"` | Tooltip HTML element id                      |
| `tooltipTemplate`    | `(content) => string` | default template             | HTML template for tooltip                    |
| `tooltipBorderColor` | `string`              | `"#BCBCBC"`                  | Border color of tooltip                      |
| `tooltipBGColor`     | `string`              | `"#FFFFFF"`                  | Background color of tooltip                  |
| `fontSize`           | `string`              | `"14px"`                     | Font size of node labels                     |
| `fontFamily`         | `string`              | `""`                         | Font family of node labels                   |
| `fontWeight`         | `string`              | `"400"`                      | Font weight of node labels                   |
| `fontColor`          | `string`              | `"#000000"`                  | Font color of node labels                    |

## Custom Node Ordering

```typescript
const data: GraphData = {
  nodes: [...],
  edges: [...],
  options: {
    order: [
      [['a', 'b']], // first layer
      [['c']]       // second layer
    ]
  }
};
```

## Custom Tooltip

```typescript
const options: Partial<SankeyOptions> = {
  enableTooltip: true,
  tooltipTemplate: ({ source, target, value }) => `
    <div style="padding: 8px;">
      <strong>${source.title}</strong> → <strong>${target.title}</strong>
      <br />Value: ${value}
    </div>
  `,
};
```

## TypeScript

All types are exported:

```typescript
import {
  NgxApexsankeyComponent,
  GraphData,
  SankeyNode,
  SankeyEdge,
  SankeyOptions,
  SankeyGraph,
  setApexSankeyLicense,
} from "ngx-apexsankey";
```

## Browser Support

- Angular 17+
- Modern browsers (Chrome, Firefox, Safari, Edge)

## License

See [LICENSE](./LICENSE) file for details.

## Links

- [ApexSankey GitHub](https://github.com/apexcharts/apexsankey)
