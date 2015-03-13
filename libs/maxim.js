var maximList = require(__dirname + '/../data/maxim.json');

module.exports = {
  select: function(num) {
    if (maximList[num]) {
      return maximList[num];
    } else {
      return null;
    }
  },
  random: function() {
    return maximList[Math.floor(Math.random() * maximList.length)];
  }
};
