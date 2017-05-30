import Snake from './snake'


document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = 400
  canvasEl.height = 400
  const ctx = canvasEl.getContext("2d");

  const snake = new Snake({pos: [10, 10]})
  snake.draw(ctx)
  window.snake = snake

});
