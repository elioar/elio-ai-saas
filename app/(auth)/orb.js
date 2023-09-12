import * as PIXI from 'pixi.js';

class Orb {
  constructor(fillColor = 0xffffff) {
    this.x = 0; // Initial x position
    this.y = 0; // Initial y position
    this.fill = fillColor; // Fill color of the orb (default is white)
    this.radius = 20; // Initial radius of the orb

    // PIXI.Graphics is used to draw 2D graphics (in this case, a circle)
    this.graphics = new PIXI.Graphics();
    this.graphics.alpha = 0.825;
  }

  // Update the position and rendering of the orb
  update() {
    // Implement the update logic here, such as changing the orb's position or size
    // Example: this.x += 1; this.y += 1; this.radius += 0.1;
  }

  // Render the orb
  render() {
    this.graphics.clear();
    this.graphics.beginFill(this.fill);
    this.graphics.drawCircle(0, 0, this.radius);
    this.graphics.endFill();
  }
}

export default Orb;
