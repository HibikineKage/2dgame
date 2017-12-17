import initCanvas from '../../lib/init-canvas';

test('initCanvas initialize canvas context and listener', () => {
  document.body.innerHTML = 
    '<div id="wrapper">' +
    '  <canvas id="canvas"></canvas>' +
    '</div>';
  
  expect(initCanvas).not.toThrow();
});
