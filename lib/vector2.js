export default class Vector2 {
  constructor(x, y) {
    if (typeof(x) === 'undefined') {
      this.x = 0;
    } else {
      this.x = x;
    }
    if (typeof(y) === 'undefined') {
      this.y = 0;
    } else {
      this.y = y;
    }
  }
  
  clone() {
    return new Vector2(this.x, this.y);
  }
  
  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
    return this;
  }
  
  subtract(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
    return this;
  }
  
  mulfuction(value) {
    this.x *= value;
    this.y *= value;
    return this;
  }
  
  division(value) {
    this.x /= value;
    this.y /= value;
    return this;
  }
  
  dot(vector) {
    return this.x * vector.x + this.y * vector.y;
  }
  
  cross(vector) {
    return this.x * vector.y - this.y * vector.x;
  }
}