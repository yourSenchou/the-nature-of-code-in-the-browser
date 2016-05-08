'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var SIMULATION_PROTOTYPE = {

    start: function(){
      var self = this;
      window.addEventListener("resize", this.resizeCanvas);

      GLB.canvas.addEventListener('mouseover', function(){
        self.animate = true;
        self.animateLoop();
      });

      GLB.canvas.addEventListener('mouseout', function(){
        self.animate = false;
      });

    },

    animateLoop: function(){
      if (this.animate){
        window.requestAnimationFrame(this.animateLoop.bind(this));

        this.update();
        this.draw();
      }
    },

    update: function(){
      this.ball.update();
    },

    draw: function(){
      var canvas = GLB.canvas;

      GLB.context.clearRect(0, 0, canvas.width, canvas.height);
      this.ball.draw();
    },

    resizeCanvas: function(){
      GLB.canvas.setAttribute('width', window.innerWidth);
      GLB.canvas.setAttribute('height', window.innerHeight);
    }

  }

  GLB.Simulation = {
    create: function(){

      var simulation = Object.create(SIMULATION_PROTOTYPE);
      simulation.ball = GLB.Ball.create(100, 100, 20);

      return simulation;
    }
  }

})();
