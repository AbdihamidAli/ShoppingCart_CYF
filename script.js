// Describe this function...
function Reset() {
    if(--window.LoopTrap <= 0) throw "Infinite loop.";
    let element_text = document.getElementById('text');
    element_text.replaceChildren();
    let element_items2 = document.getElementById('items');
    element_items2.replaceChildren();
    let element_current_list3 = document.getElementById('current-list');
    element_current_list3.replaceChildren();
  }
  
  function convertToNumber(value) {
    // Convert a string value to a number if possible
    let number_value = Number(value);
    if (Number.isNaN(number_value)) {
      return 0
    } else {
      return number_value
    }
  }
  
  
  
  document.getElementById('milk').addEventListener('click', (event) => {
    let element_items = document.getElementById('items');
    element_items.replaceChildren();
    let new_button = document.createElement('button');
    new_button.innerText = 'Whole milk';
  
    new_button.addEventListener('click', (event) => {
      let element_current_list = document.getElementById('current-list');
      let new_li = document.createElement('li');
      new_li.innerText = 'Whole milk';
  
      element_current_list.appendChild(new_li);
  
    });
    element_items.appendChild(new_button);
    let new_button2 = document.createElement('button');
    new_button2.innerText = 'Low fat milk';
  
    new_button2.addEventListener('click', (event) => {
      let element_current_list2 = document.getElementById('current-list');
      let new_li2 = document.createElement('li');
      new_li2.innerText = 'Low fat milk';
  
      element_current_list2.appendChild(new_li2);
  
    });
    element_items.appendChild(new_button2);
  
  });
  
  document.getElementById('clearList').addEventListener('click', (event) => {
    let element_current_list4 = document.getElementById('current-list');
    element_current_list4.replaceChildren();
  
  });
  
  document.getElementById('reset').addEventListener('click', (event) => {
    Reset();
  
  });
  
  document.getElementById('fruit').addEventListener('click', (event) => {
    let element_items3 = document.getElementById('items');
    element_items3.replaceChildren();
    let new_button3 = document.createElement('button');
    new_button3.innerText = 'Apple';
  
    new_button3.addEventListener('click', (event) => {
      let element_current_list5 = document.getElementById('current-list');
      let new_li3 = document.createElement('li');
      new_li3.innerText = 'Apple';
  
      element_current_list5.appendChild(new_li3);
  
    });
    element_items3.appendChild(new_button3);
    let new_button4 = document.createElement('button');
    new_button4.innerText = 'Mango';
  
    new_button4.addEventListener('click', (event) => {
      let element_current_list6 = document.getElementById('current-list');
      let new_li4 = document.createElement('li');
      new_li4.innerText = 'Mango';
  
      element_current_list6.appendChild(new_li4);
  
    });
    element_items3.appendChild(new_button4);
    let new_button5 = document.createElement('button');
    new_button5.innerText = 'Orange';
  
    new_button5.addEventListener('click', (event) => {
      let element_current_list7 = document.getElementById('current-list');
      let new_li5 = document.createElement('li');
      new_li5.innerText = 'Orange';
  
      element_current_list7.appendChild(new_li5);
  
    });
    element_items3.appendChild(new_button5);
  
  });
  
  document.getElementById('juice').addEventListener('click', (event) => {
    let element_items4 = document.getElementById('items');
    element_items4.replaceChildren();
    let new_button6 = document.createElement('button');
    new_button6.innerText = 'Apple Juice';
  
    new_button6.addEventListener('click', (event) => {
      let element_current_list8 = document.getElementById('current-list');
      let new_li6 = document.createElement('li');
      new_li6.innerText = 'Apple Juice';
  
      element_current_list8.appendChild(new_li6);
  
    });
    element_items4.appendChild(new_button6);
    let new_button7 = document.createElement('button');
    new_button7.innerText = 'Mango Juice';
  
    new_button7.addEventListener('click', (event) => {
      let element_current_list9 = document.getElementById('current-list');
      let new_li7 = document.createElement('li');
      new_li7.innerText = 'Mango Juice';
  
      element_current_list9.appendChild(new_li7);
  
    });
    element_items4.appendChild(new_button7);
    let new_button8 = document.createElement('button');
    new_button8.innerText = 'Orange Juice';
  
    new_button8.addEventListener('click', (event) => {
      let element_current_list10 = document.getElementById('current-list');
      let new_li8 = document.createElement('li');
      new_li8.innerText = 'Orange Juice';
  
      element_current_list10.appendChild(new_li8);
  
    });
    element_items4.appendChild(new_button8);
  
  });
  
  document.getElementById('add').addEventListener('click', (event) => {
    let element_current_list11 = document.getElementById('current-list');
    let new_li9 = document.createElement('li');
    new_li9.innerText = document.getElementById('text').value;
  
    element_current_list11.appendChild(new_li9);
  
  });