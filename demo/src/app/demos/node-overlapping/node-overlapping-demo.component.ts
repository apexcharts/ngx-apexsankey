import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxApexsankeyComponent, GraphData, SankeyOptions } from 'ngx-apexsankey';

@Component({
  selector: 'app-node-overlapping-demo',
  standalone: true,
  imports: [RouterLink, NgxApexsankeyComponent],
  template: `
    <div class="demo-page">
      <div class="container">
        <a routerLink="/" class="back-link">Back to Examples</a>

        <div class="demo-header">
          <h1>Node Overlapping</h1>
          <p>Handling many nodes with custom spacing and font size</p>
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
export class NodeOverlappingDemoComponent {
  data: GraphData = {
    nodes: [
      { id: 'Beverages', title: 'Beverages' },
      { id: 'Condiments', title: 'Condiments' },
      { id: 'Produce', title: 'Produce' },
      { id: 'Seafood', title: 'Seafood' },
      { id: 'Dairy Products', title: 'Dairy Products' },
      { id: 'Confections', title: 'Confections' },
      { id: 'Grains-Cereals', title: 'Grains-Cereals' },
      { id: 'Meat-Poultry', title: 'Meat-Poultry' },
      { id: 'Chai', title: 'Chai' },
      { id: 'Chang', title: 'Chang' },
      { id: 'Aniseed Syrup', title: 'Aniseed Syrup' },
      { id: "Chef Anton's Cajun Seasoning", title: "Chef Anton's Cajun Seasoning" },
      { id: "Grandma's Boysenberry Spread", title: "Grandma's Boysenberry Spread" },
      { id: "Uncle Bob's Organic Dried Pears", title: "Uncle Bob's Organic Dried Pears" },
      { id: 'Northwoods Cranberry Sauce', title: 'Northwoods Cranberry Sauce' },
      { id: 'Ikura', title: 'Ikura' },
      { id: 'Queso Cabrales', title: 'Queso Cabrales' },
      { id: 'Queso Manchego La Pastora', title: 'Queso Manchego La Pastora' },
      { id: 'Konbu', title: 'Konbu' },
      { id: 'Tofu', title: 'Tofu' },
      { id: 'Genen Shouyu', title: 'Genen Shouyu' },
      { id: 'Pavlova', title: 'Pavlova' },
      { id: 'Carnarvon Tigers', title: 'Carnarvon Tigers' },
      { id: 'Teatime Chocolate Biscuits', title: 'Teatime Chocolate Biscuits' },
      { id: "Sir Rodney's Marmalade", title: "Sir Rodney's Marmalade" },
      { id: "Sir Rodney's Scones", title: "Sir Rodney's Scones" },
      { id: "Gustaf's Knäckebröd", title: "Gustaf's Knäckebröd" },
      { id: 'Tunnbröd', title: 'Tunnbröd' },
      { id: 'NuNuCa Nuß-Nougat-Creme', title: 'NuNuCa Nuß-Nougat-Creme' },
      { id: 'Gumbär Gummibärchen', title: 'Gumbär Gummibärchen' },
      { id: 'Schoggi Schokolade', title: 'Schoggi Schokolade' },
      { id: 'Nord-Ost Matjeshering', title: 'Nord-Ost Matjeshering' },
      { id: 'Gorgonzola Telino', title: 'Gorgonzola Telino' },
      { id: 'Mascarpone Fabioli', title: 'Mascarpone Fabioli' },
      { id: 'Geitost', title: 'Geitost' },
      { id: 'Sasquatch Ale', title: 'Sasquatch Ale' },
      { id: 'Steeleye Stout', title: 'Steeleye Stout' },
      { id: 'Inlagd Sill', title: 'Inlagd Sill' },
      { id: 'Gravad lax', title: 'Gravad lax' },
      { id: 'Côte de Blaye', title: 'Côte de Blaye' },
      { id: 'Chartreuse verte', title: 'Chartreuse verte' },
      { id: 'Boston Crab Meat', title: 'Boston Crab Meat' },
      { id: "Jack's New England Clam Chowder", title: "Jack's New England Clam Chowder" },
      { id: 'Ipoh Coffee', title: 'Ipoh Coffee' },
      { id: 'Gula Malacca', title: 'Gula Malacca' },
      { id: 'Rogede sild', title: 'Rogede sild' },
      { id: 'Spegesild', title: 'Spegesild' },
    ],
    edges: [
      { source: 'Beverages', target: 'Chai', value: 41 },
      { source: 'Beverages', target: 'Chang', value: 17 },
      { source: 'Condiments', target: 'Aniseed Syrup', value: 13 },
      { source: 'Condiments', target: "Chef Anton's Cajun Seasoning", value: 53 },
      { source: 'Condiments', target: "Grandma's Boysenberry Spread", value: 120 },
      { source: 'Produce', target: "Uncle Bob's Organic Dried Pears", value: 15 },
      { source: 'Condiments', target: 'Northwoods Cranberry Sauce', value: 6 },
      { source: 'Seafood', target: 'Ikura', value: 31 },
      { source: 'Dairy Products', target: 'Queso Cabrales', value: 22 },
      { source: 'Dairy Products', target: 'Queso Manchego La Pastora', value: 86 },
      { source: 'Seafood', target: 'Konbu', value: 24 },
      { source: 'Produce', target: 'Tofu', value: 35 },
      { source: 'Condiments', target: 'Genen Shouyu', value: 39 },
      { source: 'Confections', target: 'Pavlova', value: 29 },
      { source: 'Seafood', target: 'Carnarvon Tigers', value: 42 },
      { source: 'Confections', target: 'Teatime Chocolate Biscuits', value: 25 },
      { source: 'Confections', target: "Sir Rodney's Marmalade", value: 40 },
      { source: 'Confections', target: "Sir Rodney's Scones", value: 3 },
      { source: 'Grains-Cereals', target: "Gustaf's Knäckebröd", value: 104 },
      { source: 'Grains-Cereals', target: 'Tunnbröd', value: 61 },
      { source: 'Confections', target: 'NuNuCa Nuß-Nougat-Creme', value: 76 },
      { source: 'Confections', target: 'Gumbär Gummibärchen', value: 15 },
      { source: 'Confections', target: 'Schoggi Schokolade', value: 49 },
      { source: 'Seafood', target: 'Nord-Ost Matjeshering', value: 10 },
      { source: 'Dairy Products', target: 'Gorgonzola Telino', value: 0 },
      { source: 'Dairy Products', target: 'Mascarpone Fabioli', value: 9 },
      { source: 'Dairy Products', target: 'Geitost', value: 112 },
      { source: 'Beverages', target: 'Sasquatch Ale', value: 111 },
      { source: 'Beverages', target: 'Steeleye Stout', value: 20 },
      { source: 'Seafood', target: 'Inlagd Sill', value: 112 },
      { source: 'Seafood', target: 'Gravad lax', value: 11 },
      { source: 'Beverages', target: 'Côte de Blaye', value: 17 },
      { source: 'Beverages', target: 'Chartreuse verte', value: 69 },
      { source: 'Seafood', target: 'Boston Crab Meat', value: 150 },
      { source: 'Seafood', target: "Jack's New England Clam Chowder", value: 85 },
      { source: 'Beverages', target: 'Ipoh Coffee', value: 17 },
      { source: 'Condiments', target: 'Gula Malacca', value: 27 },
      { source: 'Seafood', target: 'Rogede sild', value: 5 },
      { source: 'Seafood', target: 'Spegesild', value: 95 },
    ],
  };

  options: Partial<SankeyOptions> = {
    width: 800,
    height: 600,
    nodeWidth: 20,
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: '600',
    fontSize: '10px',
    spacing: 20,
  };

  codeExample = `options: Partial<SankeyOptions> = {
  width: 800,
  height: 600,
  nodeWidth: 20,
  fontFamily: 'Quicksand, sans-serif',
  fontWeight: '600',
  fontSize: '10px',  // smaller font for many nodes
  spacing: 20,       // reduced spacing
};`;
}
