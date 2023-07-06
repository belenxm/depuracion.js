function fibonacciSequence(num) {
  var sequence = [];

  if (num === 0) {
    return sequence;
  }

  sequence.push(0);

  if (num === 1) {
    return sequence;
  }

  sequence.push(1);

  for (var i = 2; i < num; i++) {
    var nextNumber = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNumber);
  }

  return sequence;
}
