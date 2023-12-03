window.alert("Bienvenido a nuestro sitio web de JC");

// Simulación de datos de camisetas
const catalog = [
    { id: 1, name: "Camiseta Roja", price: 20 },
    { id: 2, name: "Camiseta Azul", price: 25 },
    { id: 3, name: "Camiseta Negra", price: 22 },
    // ... agregar más camisetas
  ];
  
  // Simulación de datos de usuarios
  const users = [
    { username: "usuario1", password: "contraseña1" },
    { username: "usuario2", password: "contraseña2" },
    // ... agregar más usuarios
  ];
  
  let currentUser = null;
  let favorites = [];
  
  // Función para mostrar las camisetas en el catálogo
  function displayCatalog() {
    const catalogSection = document.getElementById("catalogo");
    const catalogList = document.createElement("ul");
  
    catalog.forEach(item => {
      const listItem = document.createElement("li");
      listItem.textContent = `${item.name} - $${item.price}`;
      const addButton = document.createElement("button");
      addButton.textContent = "Agregar a Favoritos";
      addButton.addEventListener("click", () => addToFavorites(item));
      listItem.appendChild(addButton);
      catalogList.appendChild(listItem);
    });
  
    catalogSection.innerHTML = "";
    catalogSection.appendChild(catalogList);
  }
  var resultado = window.confirm('Estas seguro?');
if (resultado === true) {
    window.alert('Okay, si estas seguro.');
} else { 
    window.alert('Pareces indeciso');
}
  
  // Función para agregar a Favoritos
  function addToFavorites(item) {
    favorites.push(item);
    alert(`${item.name} se ha agregado a tus Favoritos.`);
  }
  
  // Función para mostrar Favoritos
  function displayFavorites() {
    const favoritesSection = document.getElementById("favoritos");
    const favoritesList = document.createElement("ul");
  
    favorites.forEach(item => {
      const listItem = document.createElement("li");
      listItem.textContent = `${item.name} - $${item.price}`;
      favoritesList.appendChild(listItem);
    });
  
    favoritesSection.innerHTML = "";
    favoritesSection.appendChild(favoritesList);
  }
  
  // Función para iniciar sesión
  function login(username, password) {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      currentUser = user;
      alert(`Bienvenido, ${user.username}!`);
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  }
  
  // Manejo de eventos al cargar la página
  window.onload = function () {
    displayCatalog();
  
    const catalogLink = document.querySelector('nav ul li a[href="catalogo.html1"]');
    catalogLink.addEventListener("click", () => displayCatalog());
  
    const favoritesLink = document.querySelector('nav ul li a[href="favorito.html"]');
    favoritesLink.addEventListener("click", () => {
      if (currentUser) {
        displayFavorites();
      } else {
        alert("Debes iniciar sesión para ver tus Favoritos.");
      }
    });
  
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", event => {
      event.preventDefault();
      const username = event.target.username.value;
      const password = event.target.password.value;
      login(username, password);
    });
  
    // Otras interacciones y eventos pueden agregarse aquí
  };
  