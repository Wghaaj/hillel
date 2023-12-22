const loggingDecorator = (func) => {
    return function(...args) {
      console.log(`${func.name}, args: ${args.join(', ')}`);
      const result = func.apply(this, args);
      return result;
    };
  };
  
  // Приклад функції
  const someFn = (param1, param2, param3) => {
    console.log(`Executing someFn with args: ${param1}, ${param2}, ${param3}`);
    return param1 + param2 + param3;
  };
  
  // Декорування функції 
  const loggedFn = loggingDecorator(someFn);
  
  // Виклик декорованої функції
  const result = loggedFn(1, 2, 3);
  console.log(`Result: ${result}`);
  
  // Інший виклик декорованої функції
  loggedFn('test');
  