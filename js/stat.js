'use strict';

window.renderStatistics = function(ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(90,10,390,290);
  ctx.fillStyle = 'white';
  ctx.fillRect(90,10,370,270);

  ctx.fillStyle = '#000';
  ctx.font = '20px PT Mono';

  ctx.fillText("Ура вы победили!", 180, 40);

  ctx.font = '16px PT Mono';
  ctx.fillText("Список результатов:", 120, 65)
  
  var max = -1;
  //находим минимальное время
  for(var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }
  var maxHeight = 150; //px
  var step = maxHeight/(max-0); //px
  var stepY = 90; //px
  var rectX = 100; //px
  var rectY = 120; //px
  var rectWidth = 40; //px
  var legendY = 120; //px
  
  // строим график
  for (var j = 0; j < times.length; j++) {
    if (names[j]==='Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1';
      ctx.globalAlpha = 1;
      ctx.fillRect(rectY + stepY * j, rectX, rectWidth, step*times[j]);
      ctx.fillStyle = '#000';
      ctx.fillText(Math.floor(times[j]), legendY + stepY * j, 90);
      ctx.fillText(names[j], legendY + stepY * j, rectX+step*times[j]+20);
    } else {
      ctx.fillStyle = "blue";
      ctx.globalAlpha = Math.random();
      ctx.fillRect(rectY + stepY * j, rectX, rectWidth, step*times[j]);
      ctx.fillStyle = '#000';
      ctx.globalAlpha = 1;
      ctx.fillText(Math.floor(times[j]), legendY + stepY * j, 90);
      ctx.fillText(names[j], legendY + stepY * j, rectX+step*times[j]+20);
    }
  }
}