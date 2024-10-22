const loginModal = document.getElementById('loginModal');
const loginForm = document.getElementById('loginForm');

window.onload = function() {
   loginModal.style.display = 'flex';
};

loginForm.addEventListener('submit', function(event) {
   event.preventDefault();
   
   
   const username = document.getElementById('username').value;
   const password = document.getElementById('password').value;
   
   
   if (username === 'admin' && password === 'admin') {
      alert('Login successful!');
      loginModal.style.display = 'none'; 
   } else {
      alert('Incorrect username or password!');
   }
});


const salesElement = document.getElementById('sales');
const profitElement = document.getElementById('profit');
const ordersElement = document.getElementById('orders');
const salesWidget = document.getElementById('salesWidget');
const profitWidget = document.getElementById('profitWidget');
const ordersWidget = document.getElementById('ordersWidget');


document.getElementById('toggleSales').addEventListener('change', function() {
   salesWidget.style.display = this.checked ? 'block' : 'none';
});

document.getElementById('toggleProfit').addEventListener('change', function() {
   profitWidget.style.display = this.checked ? 'block' : 'none';
});

document.getElementById('toggleOrders').addEventListener('change', function() {
   ordersWidget.style.display = this.checked ? 'block' : 'none';
});


function fetchData() {
   const data = {
      sales: Math.floor(Math.random() * 100000),
      profit: Math.floor(Math.random() * 50000),
      orders: Math.floor(Math.random() * 2000)
   };

   salesElement.textContent = `$${data.sales}`;
   profitElement.textContent = `$${data.profit}`;
   ordersElement.textContent = data.orders;
}


setInterval(fetchData, 5000);
