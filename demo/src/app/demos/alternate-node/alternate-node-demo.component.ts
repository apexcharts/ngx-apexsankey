import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxApexsankeyComponent, GraphData, SankeyOptions } from 'ngx-apexsankey';

@Component({
  selector: 'app-alternate-node-demo',
  standalone: true,
  imports: [RouterLink, NgxApexsankeyComponent],
  template: `
    <div class="demo-page">
      <div class="container">
        <a routerLink="/" class="back-link">Back to Examples</a>

        <div class="demo-header">
          <h1>Alternate Node Style</h1>
          <p>Different node styling with thin borders and no gradient fills</p>
        </div>

        <div class="demo-content">
          <div class="chart-container">
            <ngx-apexsankey [data]="data" [options]="options" />
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
export class AlternateNodeDemoComponent {
  data: GraphData = {
    nodes: [
      { id: 'John', title: 'John' },
      { id: 'Raoul', title: 'Raoul' },
      { id: 'Jane', title: 'Jane' },
      { id: 'Marcel', title: 'Marcel' },
      { id: 'Ibrahim', title: 'Ibrahim' },
      { id: 'Junko', title: 'Junko' },
    ],
    edges: [
      { source: 'Marcel', target: 'Ibrahim', value: 72 },
      { source: 'Marcel', target: 'Raoul', value: 155 },
      { source: 'Raoul', target: 'John', value: 109 },
      { source: 'Raoul', target: 'Ibrahim', value: 100 },
      { source: 'Ibrahim', target: 'Jane', value: 100 },
      { source: 'Ibrahim', target: 'Junko', value: 127 },
      { source: 'Ibrahim', target: 'John', value: 67 },
      { source: 'Junko', target: 'Jane', value: 140 },
      { source: 'Junko', target: 'John', value: 93 },
    ],
  };

  options: Partial<SankeyOptions> = {
    width: '90%',
    height: 500,
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: '600',
    nodeWidth: 5,
    nodeBorderWidth: 2,
    nodeBorderColor: '#111',
    edgeGradientFill: false,
  };

  codeExample = `options: Partial<SankeyOptions> = {
  width: '90%',         // responsive width
  height: 500,
  fontFamily: 'Quicksand, sans-serif',
  fontWeight: '600',
  nodeWidth: 5,          // thin nodes
  nodeBorderWidth: 2,    // visible border
  nodeBorderColor: '#111',
  edgeGradientFill: false,  // solid edge colors
};`;
}
