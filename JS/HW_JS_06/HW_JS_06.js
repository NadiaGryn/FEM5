//  Метод  forEach работает подобно циклу for - перебирает каждый элемент массива. 
// Позволяет запустить для каждого элемента функцию.



function filterBy (array, type) {

  const newArray = array.filter((item) => {
   
    return (typeof (item) !== type)
  });

  console.log(newArray);
  

  return newArray;  

}

filterBy([1, 2, 3, 'string', null, undefined], prompt ("Enter your data type"));





