var today = new Date().toISOString().split('T')[0];
document.getElementsByName("Date")[0].setAttribute('min', today);