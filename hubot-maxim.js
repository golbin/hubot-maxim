/**
 * Description:
 *   Hubot Maxim
 *
 * Commands:
 *   hubot maxim
 *   hubot maxim num|help
 *
 * Author:
 *   @golbin
 */

var path = require('path'),
    maxim = require(path.join(__dirname, '/libs/maxim'));

module.exports = function(robot) {
  robot.respond(/maxim(\s*([0-9a-z]*))/i, function(msg) {
    var maximNum = null;

    if (msg.match[2]) {
      if (isNaN(msg.match[2])) {
        msg.send('maxim | maxim num');
        return;
      } else {
        maximNum = msg.match[2];
      }
    }

    var message = '';

    if (maximNum !== null) {
      message = maxim.select(maximNum);
    } else {
      message = maxim.random();
    }

    if (message) {      
      message = message.message + ' - ' + message.author;
    } else {
      message = '해당하는 번호의 명언/속담이 없습니다.';      
    }

    msg.send(message);
  });
};
