// Document Object Model (DOM) - это среда для работы JS, иерархическая структура всех элементов, 
// находящихся на странице.

function createList(array) {

  const list = document.createElement(`ul`);

  array.map((item) => {
    let listItem = document.createElement(`li`);
    listItem.innerText = `${item}`;
    return list.append(listItem);
  });

  console.log(list);

  return document.body.append(list);

}

createList(['Kiev', 'Kharkov', 'Odessa', 'Dnepr']);

