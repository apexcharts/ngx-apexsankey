import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxApexsankeyComponent, GraphData, SankeyOptions } from 'ngx-apexsankey';

@Component({
  selector: 'app-edge-options-demo',
  standalone: true,
  imports: [RouterLink, NgxApexsankeyComponent],
  template: `
    <div class="demo-page">
      <div class="container">
        <a routerLink="/" class="back-link">Back to Examples</a>

        <div class="demo-header">
          <h1>Edge Options</h1>
          <p>Control edge opacity and gradient fills for different visual effects</p>
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
export class EdgeOptionsDemoComponent {
  data: GraphData = {
    nodes: [
      { id: 'England', title: 'England' },
      { id: 'Wales', title: 'Wales' },
      { id: 'Level 4', title: 'Level 4' },
      { id: 'Level 3', title: 'Level 3' },
      { id: 'Level 2', title: 'Level 2' },
      { id: 'Level 1 and entry level', title: 'Level 1 and entry level' },
      { id: 'No qualifications', title: 'No qualifications' },
      { id: 'Other', title: 'Other' },
      { id: 'Wholesale & retail', title: 'Wholesale & retail' },
      { id: 'Health & social work', title: 'Health & social work' },
      { id: 'Education', title: 'Education' },
      { id: 'Construction', title: 'Construction' },
      { id: 'Manufacturing', title: 'Manufacturing' },
      { id: 'Transport & storage', title: 'Transport & storage' },
      { id: 'Finance & insurance', title: 'Finance & insurance' },
    ],
    edges: [
      { source: 'England', target: 'Level 4', value: 13 },
      { source: 'England', target: 'Level 3', value: 8 },
      { source: 'England', target: 'Level 2', value: 8 },
      { source: 'England', target: 'Level 1 and entry level', value: 6 },
      { source: 'England', target: 'No qualifications', value: 3 },
      { source: 'Wales', target: 'Level 4', value: 7 },
      { source: 'Wales', target: 'Level 3', value: 8 },
      { source: 'Wales', target: 'Level 2', value: 4 },
      { source: 'Wales', target: 'Level 1 and entry level', value: 5 },
      { source: 'Wales', target: 'No qualifications', value: 5 },
      { source: 'Level 4', target: 'Wholesale & retail', value: 4 },
      { source: 'Level 4', target: 'Health & social work', value: 3 },
      { source: 'Level 4', target: 'Education', value: 2 },
      { source: 'Level 4', target: 'Construction', value: 1 },
      { source: 'Level 4', target: 'Manufacturing', value: 2 },
      { source: 'Level 4', target: 'Other', value: 3 },
      { source: 'Level 4', target: 'Transport & storage', value: 2 },
      { source: 'Level 4', target: 'Finance & insurance', value: 3 },
      { source: 'Level 3', target: 'Wholesale & retail', value: 3 },
      { source: 'Level 3', target: 'Health & social work', value: 2 },
      { source: 'Level 3', target: 'Education', value: 1 },
      { source: 'Level 3', target: 'Construction', value: 2 },
      { source: 'Level 3', target: 'Manufacturing', value: 1 },
      { source: 'Level 3', target: 'Other', value: 3 },
      { source: 'Level 3', target: 'Transport & storage', value: 2 },
      { source: 'Level 3', target: 'Finance & insurance', value: 2 },
      { source: 'Level 2', target: 'Wholesale & retail', value: 2 },
      { source: 'Level 2', target: 'Health & social work', value: 1 },
      { source: 'Level 2', target: 'Education', value: 2 },
      { source: 'Level 2', target: 'Construction', value: 1 },
      { source: 'Level 2', target: 'Manufacturing', value: 2 },
      { source: 'Level 2', target: 'Other', value: 2 },
      { source: 'Level 2', target: 'Transport & storage', value: 1 },
      { source: 'Level 2', target: 'Finance & insurance', value: 1 },
      { source: 'Level 1 and entry level', target: 'Wholesale & retail', value: 1 },
      { source: 'Level 1 and entry level', target: 'Health & social work', value: 2 },
      { source: 'Level 1 and entry level', target: 'Education', value: 1 },
      { source: 'Level 1 and entry level', target: 'Construction', value: 2 },
      { source: 'Level 1 and entry level', target: 'Manufacturing', value: 1 },
      { source: 'Level 1 and entry level', target: 'Other', value: 2 },
      { source: 'Level 1 and entry level', target: 'Transport & storage', value: 1 },
      { source: 'Level 1 and entry level', target: 'Finance & insurance', value: 1 },
      { source: 'No qualifications', target: 'Wholesale & retail', value: 1 },
      { source: 'No qualifications', target: 'Health & social work', value: 1 },
      { source: 'No qualifications', target: 'Education', value: 1 },
      { source: 'No qualifications', target: 'Construction', value: 1 },
      { source: 'No qualifications', target: 'Manufacturing', value: 1 },
      { source: 'No qualifications', target: 'Other', value: 1 },
      { source: 'No qualifications', target: 'Transport & storage', value: 1 },
      { source: 'No qualifications', target: 'Finance & insurance', value: 1 },
    ],
  };

  options: Partial<SankeyOptions> = {
    width: 800,
    height: 700,
    nodeWidth: 20,
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: '600',
    edgeOpacity: 0.2,
  };

  codeExample = `options: Partial<SankeyOptions> = {
  width: 800,
  height: 700,
  nodeWidth: 20,
  fontFamily: 'Quicksand, sans-serif',
  fontWeight: '600',
  edgeOpacity: 0.2,  // low opacity for subtle edges
};`;
}
