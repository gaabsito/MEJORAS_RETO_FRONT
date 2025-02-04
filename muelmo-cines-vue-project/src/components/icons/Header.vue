<template>
    <header class="header">
      <!-- Menú superior -->
      <div class="header__top">
        <div class="header__top-links">
          <a href="#">Personal</a>
          <a href="#">Alumnos</a>
          <a href="#">Familias</a>
          <a href="#">Alumni</a>
          <a href="#">Empresas</a>
        </div>
        <div class="header__top-contact">

          <span>976 466 599</span>
          <a href="https://placehold.co/10x10" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
  
      <!-- Logotipo y buscador -->
      <div class="header__main">
       
        <div class="header__search">
          <input type="text" placeholder="Buscador" />
          <button type="button" aria-label="Buscar"><i class="fas fa-search"></i></button>
        </div>
         <div class="header__logo">
          <img src="../assets/logosanvalero_1_0.jpg" alt="Logo San Valero" />
        </div>
        <div class="header__cta">
          <a href="#">¡Apúntate a nuestras puertas abiertas!</a>
        </div>
      </div>
  
      <!-- Menú principal -->
      <nav class="header__menu">
        <ul>
          <li><a href="#">CONÓCENOS</a></li>
          <RouterLink to="/Oferta">OFERTA EDUCATIVA</RouterLink>
          <li><a href="#">FORMACIÓN Y APOYO AL EMPLEO</a></li>
          <li><a href="#">ÁREA SOCIAL</a></li>
          <li><a href="#">PROYECTOS E INNOVACIÓN</a></li>
          <li><a href="#">CONTACTO</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "HeaderComponent",
  };
  </script>
  
  <style scoped>
  .header {
    background-color: #ffffff;
    color: #333;
    font-family: Arial, sans-serif;
  }
  
  .header__top {
    display: flex;
    justify-content: space-between;
    padding: 10px 330px;
    font-size: 0.9em;
    background-color: #f2f2f2;
  }
  
  .header__top-links a,
  .header__top-contact a {
    margin: 0 10px;
    text-decoration: none;
    color: #333;
  }
  
  .header__top-contact span {
    margin-right: 10px;
  }
  
  .header__main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 300px;
  }
  
  .header__logo img {
    max-height: 120px;
  }
  
  .header__search {
    display: flex;
    align-items: center;
  }
  
  .header__search input {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 5px;
  }
  
  .header__search button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.2em;
  }
  
  .header__cta a {
    color: #0056b3;
    font-weight: bold;
    text-decoration: none;
  }
  
  .header__menu {
    background-color: #fff;
    text-align: center;
    padding: 10px 0;
  }
  
  .header__menu ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }
  
  .header__menu ul li {
    margin: 0 15px;
  }
  
  .header__menu ul li a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    transition: color 0.3s;
  }
  
  .header__menu ul li a:hover {
    color: #0056b3;
  }
  </style>
  