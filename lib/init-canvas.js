import { touchScreen } from '../actions/input';

export default function initCanvas(dispatch) {
  const wrapper = document.getElementById('wrapper');
  const canvas = document.getElementById('canvas');
  canvas.setAttribute('width', wrapper.clientWidth);
  canvas.setAttribute('height', wrapper.clientHeight);

  canvas.addEventListener('click', () => {dispatch(touchScreen())}, false);
  
  return canvas.getContext('2d');
}
