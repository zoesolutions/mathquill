#!/usr/local/bin/node

var total = 0;
process.openStdin().on('data', function(data) {
  data = (data+'').split('\n');
  for (var line in data) {
    var line = data[line].trim().split(' ');
    if (line.length !== 3) continue;
    total += +line[0];
    process.stdout.write(total+' '+line.join(' ')+'\n');
  }
});
