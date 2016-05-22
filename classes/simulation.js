'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var SIMULATION_PROTOTYPE = {

    start: function(){
      var self = this;
      this.props.displayTitle.call(this);

      window.addEventListener("resize", this.resizeCanvas.bind(this));

      GLB.canvas.addEventListener('mouseover', function(){
        self.animate = true;
        self.animateLoop();
      });

      GLB.canvas.addEventListener('mouseout', function(){
        self.animate = false;
        self.props.displayTitle.call(this);
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
      this.props.update.call(this);
    },

    draw: function(){
      var canvas = GLB.canvas;

      GLB.context.clearRect(0, 0, canvas.width, canvas.height);
      this.props.draw.call(this);
    },

    resizeCanvas: function(){
      GLB.canvas.setAttribute('width', window.innerWidth);
      GLB.canvas.setAttribute('height', window.innerHeight);
      this.props.displayTitle.call(this);
    }

  }

  GLB.Simulation = {
    create: function({ draw, init, update, displayTitle }){

      var simulation = Object.create(SIMULATION_PROTOTYPE);

      simulation.props              = {}
      simulation.props.draw         = draw
      simulation.props.update       = update
      simulation.props.displayTitle = displayTitle

      if (init){
        init(simulation)
      }

      return simulation;
    }
  }

})();
