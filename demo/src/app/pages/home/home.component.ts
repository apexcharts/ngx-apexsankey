import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface DemoItem {
  title: string;
  description: string;
  route: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="home">
      <header class="hero">
        <div class="container">
          <h1>ngx-apexsankey</h1>
          <p class="tagline">
            Angular wrapper for ApexSankey - Create beautiful Sankey diagrams
          </p>
          <div class="badges">
            <span class="badge">Angular 17+</span>
            <span class="badge">Standalone Components</span>
            <span class="badge">TypeScript</span>
          </div>
        </div>
      </header>

      <section class="demos-section">
        <div class="container">
          <h2>Examples</h2>
          <div class="demos-grid">
            @for (demo of demos; track demo.route) {
              <a [routerLink]="demo.route" class="demo-card">
                <h3>{{ demo.title }}</h3>
                <p>{{ demo.description }}</p>
                <span class="arrow">→</span>
              </a>
            }
          </div>
        </div>
      </section>

      <section class="install-section">
        <div class="container">
          <h2>Installation</h2>
          <pre><code>npm install ngx-apexsankey apexsankey &#64;svgdotjs/svg.js</code></pre>
        </div>
      </section>

      <section class="usage-section">
        <div class="container">
          <h2>Quick Start</h2>
          <pre><code>{{ usageCode }}</code></pre>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      .home {
        min-height: 100vh;
      }

      .hero {
        background: linear-gradient(135deg, #1a365d 0%, #2c5282 100%);
        color: white;
        padding: 4rem 0;
        text-align: center;
      }

      .hero h1 {
        font-size: 3rem;
        font-weight: 600;
        margin-bottom: 1rem;
      }

      .tagline {
        font-size: 1.25rem;
        opacity: 0.9;
        margin-bottom: 1.5rem;
      }

      .badges {
        display: flex;
        justify-content: center;
        gap: 0.75rem;
        flex-wrap: wrap;
      }

      .badge {
        background: rgba(255, 255, 255, 0.2);
        padding: 0.375rem 0.75rem;
        border-radius: 20px;
        font-size: 0.875rem;
      }

      .demos-section,
      .install-section,
      .usage-section {
        padding: 3rem 0;
      }

      .demos-section h2,
      .install-section h2,
      .usage-section h2 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
        color: #1a202c;
      }

      .demos-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 1.5rem;
      }

      .demo-card {
        background: white;
        border-radius: 12px;
        padding: 1.5rem;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        display: block;
        color: inherit;
        position: relative;
      }

      .demo-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      .demo-card h3 {
        font-size: 1.125rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: #2d3748;
      }

      .demo-card p {
        color: #718096;
        font-size: 0.9375rem;
        margin-bottom: 0.5rem;
      }

      .demo-card .arrow {
        position: absolute;
        right: 1.5rem;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.25rem;
        color: #3182ce;
        transition: transform 0.2s ease;
      }

      .demo-card:hover .arrow {
        transform: translateY(-50%) translateX(4px);
      }

      .install-section {
        background: #edf2f7;
      }

      pre {
        background: #1a202c;
        color: #e2e8f0;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        overflow-x: auto;
      }

      code {
        font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
        font-size: 0.9rem;
      }
    `,
  ],
})
export class HomeComponent {
  demos: DemoItem[] = [
    {
      title: 'Basic Sankey',
      description: 'Simple energy flow diagram with minimal configuration',
      route: '/basic',
    },
    {
      title: 'Custom Fonts',
      description: 'Using custom Google Fonts with job application flow',
      route: '/custom-fonts',
    },
    {
      title: 'Node Customization',
      description: 'Customize node borders and styling',
      route: '/node-customization',
    },
    {
      title: 'Edge Options',
      description: 'Control edge opacity and gradient fills',
      route: '/edge-options',
    },
    {
      title: 'Node Overlapping',
      description: 'Handling many nodes with custom spacing',
      route: '/node-overlapping',
    },
    {
      title: 'Alternate Node Style',
      description: 'Different node styling with border customization',
      route: '/alternate-node',
    },
  ];

  usageCode = `import { Component } from '@angular/core';
import { NgxApexsankeyComponent, GraphData, SankeyOptions } from 'ngx-apexsankey';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [NgxApexsankeyComponent],
  template: \`
    <ngx-apexsankey
      [data]="data"
      [options]="options"
      (nodeClick)="onNodeClick($event)">
    </ngx-apexsankey>
  \`
})
export class ExampleComponent {
  data: GraphData = {
    nodes: [
      { id: 'a', title: 'Node A' },
      { id: 'b', title: 'Node B' },
      { id: 'c', title: 'Node C' }
    ],
    edges: [
      { source: 'a', target: 'c', value: 5 },
      { source: 'b', target: 'c', value: 3 }
    ]
  };

  options: Partial<SankeyOptions> = {
    width: 800,
    height: 600,
    nodeWidth: 20
  };

  onNodeClick(node: any) {
    console.log('Node clicked:', node);
  }
}`;
}
