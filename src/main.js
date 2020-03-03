/*  
Hit Test
--------

(Shaun A. Noordin | shaunanoordin.com | 20200303)
 */

const POINT_RADIUS = 8;
const POINT_STROKE_WIDTH = 32;
const POLYGON_STROKE_WIDTH = 4;
const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

class App {
  constructor() {
    this.svg = document.getElementById('svg');
    this.dataLayer = document.getElementById('data-layer');
    
    this.polygon = {
      points: [200, 300, 400, 0, 600, 150, 800, 0, 1000, 300, 600, 600],
    };
    
    this.point = {
      x: 400,
      y: 200,
    };
    
    this.update();
  }
  
  update () {
    while (this.dataLayer.firstChild) { 
      this.dataLayer.removeChild(this.dataLayer.firstChild);
    }
    
    const polygon = document.createElementNS(SVG_NAMESPACE, 'polygon');
    polygon.setAttribute('points', this.polygon.points.join(' '));
    polygon.setAttribute('stroke-width', POLYGON_STROKE_WIDTH);
    polygon.setAttribute('stroke', '#0cc');
    polygon.setAttribute('fill', 'none');
    this.dataLayer.appendChild(polygon);
    
    const point = document.createElementNS(SVG_NAMESPACE, 'circle');
    point.setAttribute('cx', this.point.x);
    point.setAttribute('cy', this.point.y);
    point.setAttribute('r', POINT_RADIUS);
    point.setAttribute('stroke-width', POINT_STROKE_WIDTH);
    point.setAttribute('stroke', 'rgba(192, 192, 192, 0.5)');
    point.setAttribute('fill', 'rgba(0, 255, 0)');
    this.dataLayer.appendChild(point);
  }
}

var app;
window.onload = function() {
  window.app = new App();
};
