function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
      this.value +=+prompt("请输入添加的值");
    };
  
  }
  
  const accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  alert(accumulator.value);