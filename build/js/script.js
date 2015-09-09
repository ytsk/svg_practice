// Utility function for drawing the circle arc

function drawCircleArc(elem, angle) {
  var endAngleDeg = angle - 90;
  var endAngleRad = (endAngleDeg * Math.PI) / 180;
  var largeArcFlag = (angle < 180 ? '0' : '1');
  var size = 300
  var endX = Math.cos(endAngleRad) * size;
  var endY = size + (Math.sin(endAngleRad) * size);

  var data = 'M300,300 v-300 a300,300 0 ' + largeArcFlag + ',1 ' + endX + ',' + endY + 'z';
  var $elem = $(elem);
  $elem.attr('d', data);

}

// Code for running the animation

var arcAngle = 0;  // Starts at 0, ends at 360
var arcAngleBy = 3.6;     // Degreesx per frame
var arcAngleDelay = 10;  // Duration of each frame in msec

var wipe = function updateCircleWipe() {
  arcAngle += arcAngleBy;
  drawCircleArc('#circle-wipe', arcAngle);
  if (arcAngle >= 360) {
    arcAngle = 0;
  }
}
setInterval(wipe, arcAngleDelay);
