import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxApexsankeyComponent, GraphData, SankeyOptions } from 'ngx-apexsankey';

@Component({
  selector: 'app-basic-demo',
  standalone: true,
  imports: [RouterLink, NgxApexsankeyComponent],
  template: `
    <div class="demo-page">
      <div class="container">
        <a routerLink="/" class="back-link">Back to Examples</a>

        <div class="demo-header">
          <h1>Basic Sankey Diagram</h1>
          <p>A simple energy flow diagram demonstrating the basic usage of ngx-apexsankey</p>
        </div>

        <div class="demo-content">
          <div class="chart-container">
            <ngx-apexsankey
              [data]="data"
              [options]="options"
              (nodeClick)="onNodeClick($event)"
            />
          </div>
        </div>

        <div class="demo-content code-section">
          <h3>Code</h3>
          <pre><code>{{ codeExample }}</code></pre>
        </div>
      </div>
    </div>
  `,
})
export class BasicDemoComponent {
  data: GraphData = {
    nodes: [
      { id: 'Oil', title: 'Oil' },
      { id: 'Natural Gas', title: 'Natural Gas' },
      { id: 'Coal', title: 'Coal' },
      { id: 'Fossil Fuels', title: 'Fossil Fuels' },
      { id: 'Electricity', title: 'Electricity' },
      { id: 'Energy', title: 'Energy' },
    ],
    edges: [
      { source: 'Oil', target: 'Fossil Fuels', value: 15 },
      { source: 'Natural Gas', target: 'Fossil Fuels', value: 20 },
      { source: 'Coal', target: 'Fossil Fuels', value: 25 },
      { source: 'Coal', target: 'Electricity', value: 25 },
      { source: 'Fossil Fuels', target: 'Energy', value: 60 },
      { source: 'Electricity', target: 'Energy', value: 25 },
    ],
  };

  options: Partial<SankeyOptions> = {
    width: 800,
    height: 600,
    nodeWidth: 20,
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: '600',
    enableToolbar: true,
  };

  onNodeClick(node: any): void {
    console.log('Node clicked:', node);
    alert(`Clicked: ${node.title || node.id}`);
  }

  codeExample = `import { NgxApexsankeyComponent, GraphData, SankeyOptions } from 'ngx-apexsankey';

data: GraphData = {
  nodes: [
    { id: 'Oil', title: 'Oil' },
    { id: 'Natural Gas', title: 'Natural Gas' },
    { id: 'Coal', title: 'Coal' },
    { id: 'Fossil Fuels', title: 'Fossil Fuels' },
    { id: 'Electricity', title: 'Electricity' },
    { id: 'Energy', title: 'Energy' },
  ],
  edges: [
    { source: 'Oil', target: 'Fossil Fuels', value: 15 },
    { source: 'Natural Gas', target: 'Fossil Fuels', value: 20 },
    { source: 'Coal', target: 'Fossil Fuels', value: 25 },
    { source: 'Coal', target: 'Electricity', value: 25 },
    { source: 'Fossil Fuels', target: 'Energy', value: 60 },
    { source: 'Electricity', target: 'Energy', value: 25 },
  ],
};

options: Partial<SankeyOptions> = {
  width: 800,
  height: 600,
  nodeWidth: 20,
  fontFamily: 'Quicksand, sans-serif',
  fontWeight: '600',
  enableToolbar: true,
};`;
}
