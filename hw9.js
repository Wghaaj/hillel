function memoize(defaultValue) {
    let memoizedData = defaultValue;
  
    function getMemData() {
      return memoizedData;
    }
  
    function setMemData(value) {
      memoizedData = value;
    }
  
    return [getMemData, setMemData];
  }
  
  // Приклад 1
  const memData1 = memoize();
  const getMemData1 = memData1[0];
  const setMemData1 = memData1[1];
  
  console.log(getMemData1()); 
  setMemData1(3);
  console.log(getMemData1()); 
  setMemData1('some string');
  setMemData1({ a: 'b' });
  console.log(getMemData1()); 
  
  // Приклад 2
  const memData2 = memoize([1, 2, 3]);
  const getMemData2 = memData2[0];
  const setMemData2 = memData2[1];
  
  console.log(getMemData2());
  setMemData2('test');
  console.log(getMemData2()); 
  