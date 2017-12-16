export default function initCanvas() {
  const wrapper = document.getElementById('wrapper');
  const canvas = document.getElementById('canvas');
  canvas.setAttribute('width', wrapper.clientWidth);
  canvas.setAttribute('height', wrapper.clientHeight);
  
  return canvas.getContext('2d');
}

