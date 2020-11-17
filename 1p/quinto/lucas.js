function lucas(num) {
    if (num == 1) return 2;
    if (num == 2) return 1;
    return lucas(num - 1) + lucas(num - 2);
  }
  console.log(lucas(5))