'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  var Screen_edges = function(){

    var wrap_around_screen = function(object) {

      //right edge
      if (object.location.x > GLB.canvas.width + object.radius){
        object.location.x = -object.radius;
      }
      //left edge
      if (object.location.x < -object.radius){
        object.location.x = GLB.canvas.width + object.radius;
      }
      //bottom edge
      if (object.location.y > GLB.canvas.height + object.radius){
        object.location.y = -object.radius;
      }
      //top edge
      if (object.location.y < -object.radius){
        object.location.y = GLB.canvas.height + object.radius;
      }
    }

    var reflect_off_edges = function(object){
      //right edge
      if (object.location.x > GLB.canvas.width - object.radius){
        object.location.x = GLB.canvas.width - object.radius;
        object.velocity.x = -object.velocity.x;
      }
      //left edge
      if (object.location.x < object.radius){
        object.location.x = object.radius;
        object.velocity.x = -object.velocity.x;
      }
      //bottom edge
      if (object.location.y > GLB.canvas.height - object.radius){
        object.location.y = GLB.canvas.height - object.radius;
        object.velocity.y = -object.velocity.y;
      }
      //top edge
      if (object.location.y < object.radius){
        object.location.y = object.radius;
        object.velocity.y = -object.velocity.y;
      }
    }

    return{
      wrap_around_screen: wrap_around_screen,
      reflect_off_edges: reflect_off_edges
    }

  }

  GLB.Screen_edges = Screen_edges();
})();
