'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var balls = [];

  _.times(8, function(){
    var ball = GLB.Ball.createRandom();
    ball.velocity = ball.velocity.multiply(3);
    balls.push(ball);
  });




  GLB.simulationLogic = {

    update: function(){
      _.forEach(balls, function(ball){

        ball.update();
        ball.acceleration = ball.acceleration.multiply(0);
      });
    },

    draw: function(){
      _.forEach(balls, function(ball){
        ball.draw();
      });

    },
  }
})();
