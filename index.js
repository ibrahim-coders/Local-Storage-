const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const producats = document.getElementById('producat');

  const quantitys = document.getElementById('quantity');
  const producat = producats.value;
  const quantity = quantitys.value;
  // console.log(producat, quantity);
  displayProducat(producat, quantity);
  saveProducat(producat, quantity);
});

const displayProducat = (producat, quantity) => {
  const producatContinar = document.getElementById('producat-Continar');

  const li = document.createElement('li');
  li.innerText = `
  ${producat} :${quantity}
  
  `;
  producatContinar.appendChild(li);
};

const getCartFromLocalStorage = () => {
  let cart = {};
  const setcat = localStorage.getItem('cart');
  if (setcat) {
    cart = JSON.parse(setcat);
  }
  return cart;
};

const saveProducat = (producat, quantity) => {
  const cart = getCartFromLocalStorage();
  cart[producat] = quantity;

  const cartStringified = JSON.stringify(cart);
  localStorage.setItem('cart', cartStringified);
};

const displayShow = () => {
  const savescart = getCartFromLocalStorage();
  console.log(savescart);
  for (const prodact in savescart) {
    const quantity=savescart[prodact]
    displayProducat(prodact,quantity);
  }
};

displayShow();
