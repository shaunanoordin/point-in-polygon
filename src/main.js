/*  
Hit Test
--------

(Shaun A. Noordin | shaunanoordin.com | 20200303)
 */

const POINT_RADIUS = 8;
const POINT_STROKE_WIDTH = 32;
const POLYGON_STROKE_WIDTH = 4;
const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
const SVG_REVERSED_Y_AXIS = -1;

class App {
  constructor() {
    this.svg = document.getElementById('svg');
    this.dataLayer = document.getElementById('data-layer');
    
    this.polygon = {
      points: [250,300, 400,50, 600,200, 800,50, 950,300, 600, 550],
    };
    
    this.point = {
      x: 600,
      y: 300,
    };
    
    this.svg.addEventListener('click', this.onClick.bind(this))
    
    this.render();    
  }
  
  onClick (e) {
    const svgBounds = this.svg.getBoundingClientRect();
    const newX = (e.clientX - svgBounds.x) / (svgBounds.width / 1200);
    const newY = (e.clientY - svgBounds.y) / (svgBounds.height / 600);
    
    this.point.x = (!isNaN(newX)) ? newX : this.point.x
    this.point.y = (!isNaN(newY)) ? newY : this.point.y
    
    this.render();
    
  }
  
  render () {
    while (this.dataLayer.firstChild) { 
      this.dataLayer.removeChild(this.dataLayer.firstChild);
    }
    
    const polygon = document.createElementNS(SVG_NAMESPACE, 'polygon');
    polygon.setAttribute('points', this.polygon.points.join(' '));
    polygon.setAttribute('stroke-width', POLYGON_STROKE_WIDTH);
    polygon.setAttribute('stroke', '#0cc');
    polygon.setAttribute('fill', 'none');
    this.dataLayer.appendChild(polygon);
    
    for (let i = 0; (i+1) < this.polygon.points.length; i += 2) {
      const text = document.createElementNS(SVG_NAMESPACE, 'text');
      text.setAttribute('x', this.polygon.points[i]);
      text.setAttribute('y', this.polygon.points[i + 1]);
      text.setAttribute('fill', '#000');
      text.textContent = Math.floor(i  / 2);
      this.dataLayer.appendChild(text);
    }
    
    const pointInPolygon = this.isPointInPolygon(this.point, this.polygon)
    
    const point = document.createElementNS(SVG_NAMESPACE, 'circle');
    point.setAttribute('cx', this.point.x);
    point.setAttribute('cy', this.point.y);
    point.setAttribute('r', POINT_RADIUS);
    point.setAttribute('stroke-width', POINT_STROKE_WIDTH);
    point.setAttribute('stroke', 'rgba(192, 192, 192, 0.5)');
    
    console.log(pointInPolygon);
    
    if (pointInPolygon) {
      point.setAttribute('fill', '#0e0');
    } else {
      point.setAttribute('fill', '#e00');
    }
    this.dataLayer.appendChild(point);
  }
  
  isPointInPolygon (point, polygon) {
    if (!point || point.x === undefined || point.y === undefined
        || !polygon || !polygon.points
        || polygon.points.length < 6 || polygon.points.length % 2 !== 0) return false;
    
    /*let x2 = polygon.points[polygon.points.length - 2];
    let y2 = polygon.points[polygon.points.length - 1];
    let prevAngle = Math.atan2(SVG_REVERSED_Y_AXIS * (y2 - point.y), x2 - point.x);  // Initial angle
    console.log('INITIAL ANGLE: ', prevAngle * 180 / Math.PI)*/
    let rotation = 0;  // Total rotation
    
    function getMagnitude(x, y) { return Math.sqrt(x * x + y * y); }
    
    for (let i = 0; (i + 1) < polygon.points.length; i += 2) {
      
      // Use dot product to calculate angle between two lines
      const aX = polygon.points[i + 0] - this.point.x;
      const aY = polygon.points[i + 1] - this.point.y;
      const bX = polygon.points[(i + 2) % polygon.points.length] - this.point.x;
      const bY = polygon.points[(i + 3) % polygon.points.length] - this.point.y;
      
      const divisor = getMagnitude(aX, aY) * getMagnitude(bX, bY);
      const angleDiff = (divisor)
        ? Math.acos( (aX * bX + aY * bY) / divisor)
        : 0;
      
      rotation += angleDiff;
      
      let debugLine = document.createElementNS(SVG_NAMESPACE, 'line');
      debugLine.setAttribute('x1', this.point.x);
      debugLine.setAttribute('y1', this.point.y);
      debugLine.setAttribute('x2', polygon.points[i + 0]);
      debugLine.setAttribute('y2', polygon.points[i + 1]);
      debugLine.setAttribute('stroke-width', 2);
      debugLine.setAttribute('stroke', 'rgba(128, 128, 128, 0.5)');
      this.dataLayer.appendChild(debugLine);
    }
    
    // If rotation === 0, false. If rotation === 360 degrees or -360 degrees, true.
    // Build in minor tolerances for rounding errors.
    console.log(rotation * 180 / Math.PI);
    return rotation < -0.1 || rotation > 0.1 ;
    
  }
}

var app;
window.onload = function() {
  window.app = new App();
};
