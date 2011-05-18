#!/usr/local/bin/node

var props = {
  A: 'appendTo',
  a: 'insertAfter',
  b: 'blockify',
  C: 'foldChildren',
  c: 'cursor',
  E: 'each',
  e: 'eachChild',
  F: 'fold',
  f: 'firstChild',
  h: 'html_template',
  I: 'intervalId',
  i: 'insertBefore',
  l: 'lastChild',
  N: 'insertNew',
  n: 'next',
  P: 'prependTo',
  p: 'parent',
  r: 'remove',
  s: 'selection',
  t: 'text_template',
  v: 'prev',
  z: 'insertAt'
};

for (var c in props)
  props[c] = RegExp('\\.'+props[c]+'(?=\\W)', 'g');

process.openStdin().on('data', function(data) {
  data = ''+data;
  for (var c in props)
    data = data.replace(props[c], '.'+c);
  process.stdout.write(data);
});
