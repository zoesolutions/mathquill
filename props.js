#!/usr/local/bin/node

process.openStdin().on('data', function(data) {
  data = (data+'').split('\n');
  for (var line in data) {
    var line = data[line].trim().split(' ');
    if (line.length !== 2) continue;
    process.stdout.write(line[0]*(line[1].length-2)+' '+line.join(' ')+'\n');
  }
});
