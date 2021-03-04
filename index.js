let driver = { 
    name: 'Sam',
    address: '11 Broadway'
    };
  
  function updateDriverWithKeyAndValue(driver, address, value) {
    return Object.assign({}, driver, { [address]: '11 Broadway' });
  }

  function destructivelyUpdateDriverWithKeyAndValue(employee, address, value){
    employee[address] = '12 Broadway'
    return employee
  }

  function deleteFromDriverByKey(driver, key){
    let newDriver =  Object.assign({},driver);
    delete newDriver.name;
    return newDriver;
  }

  function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver.name;
    return driver;
  }