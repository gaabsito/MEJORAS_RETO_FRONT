<template>
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__columns">
          <!-- Columnas principales -->
          <div class="footer__column">
            <h3>CONÓCENOS</h3>
            <ul>
              <li><a href="#">Quiénes Somos</a></li>
              <li><a href="#">Sistemas de Gestión</a></li>
              <li><a href="#">Identidad</a></li>
              <li><a href="#">Propuesta Educativa</a></li>
              <li><a href="#">Servicios Complementarios</a></li>
              <li><a href="#">Entidades Colaboradoras</a></li>
              <li><a href="#">Ley de Transparencia</a></li>
              <li><a href="#">Trabaja con nosotros</a></li>
            </ul>
          </div>
          <div class="footer__column">
            <h3>OFERTA EDUCATIVA</h3>
            <ul>
              <li><a href="#">ESO</a></li>
              <li><a href="#">Bachillerato</a></li>
              <li><a href="#">Bachillerato Dual Americano</a></li>
              <li><a href="#">FP Grado Básico</a></li>
              <li><a href="#">FP Grado Medio</a></li>
              <li><a href="#">FP Grado Superior</a></li>
              <li><a href="#">Máster de FP</a></li>
              <li><a href="#">FP++</a></li>
              <li><a href="#">FP Online</a></li>
              <li><a href="#">Ciclos Formativos FP</a></li>
            </ul>
          </div>
          <div class="footer__column">
            <h3>FORMACIÓN Y APOYO AL EMPLEO</h3>
            <ul>
              <li><a href="#">Formación para el empleo</a></li>
              <li><a href="#">Planes Formativos para Empresas</a></li>
              <li><a href="#">Formación Certificada</a></li>
              <li><a href="#">Agencia de Colocación Emplea2</a></li>
              <li><a href="#">Programa Inserción (PIMEI)</a></li>
              <li><a href="#">Programa PAMUR</a></li>
              <li><a href="#">Next Generation EU</a></li>
            </ul>
          </div>
          <div class="footer__column">
            <h3>ÁREA SOCIAL</h3>
            <ul>
              <li><a href="#">Centro Sociolaboral Casco Viejo</a></li>
              <li><a href="#">Aprendizaje Servicio APS</a></li>
              <li><a href="#">Voluntariado</a></li>
              <li><a href="#">Campañas Solidarias</a></li>
              <li><a href="#">Responsabilidad Social</a></li>
            </ul>
          </div>
          <div class="footer__column">
            <h3>PROYECTOS E INNOVACIÓN</h3>
            <ul>
              <li><a href="#">Innovación</a></li>
              <li><a href="#">Programa Erasmus+</a></li>
              <li><a href="#">Premios Ingenia</a></li>
              <li><a href="#">Seminarios de Expertos</a></li>
              <li><a href="#">Bilingüismo</a></li>
              <li><a href="#">Job Day San Valero</a></li>
              <li><a href="#">4 y Empresa</a></li>
              <li><a href="#">GarageLab</a></li>
              <li><a href="#">Talento FP Dual</a></li>
            </ul>
          </div>
          <div class="footer__column">
            <h3>CONTACTO</h3>
          </div>
        </div>
  
  
        <!-- Certificaciones y logos -->
  
      
  
  
        <div class="footer__logos">
          <h2>CERTIFICACIONES</h2>
          <h3>CON EL APOYO DE</h3>
          <img src="" alt="Con el apoyo de" />
          <h3>CENTRO ASOCIADO A</h3>
          <img src="" alt="Centro Asociado" />
          <h3>PACTO POR LA GENERACIÓN D</h3>
          <img src="" alt="Pacto por la Generación D" />
          <h3>PROGRAMA ERASMUS +</h3>
          <img src="" alt="Programa Erasmus +" />
        </div>
      </div>
  
      <!-- Footer inferior -->
      <div class="footer__bottom">
        <img src="https://placehold.co/100x40" alt="San Valero" />
        <img src="https://placehold.co/100x40" alt="San Valero" />
        <img src="https://placehold.co/100x40" alt="San Valero" />
        <img src="https://placehold.co/100x40" alt="CPA Salduie" />
        <img src="https://placehold.co/100x40" alt="SEAS" />
        <img src="https://placehold.co/100x40" alt="Universidad San Jorge" />
  
  
      </div>
  
      <div class="footer__bottom2">
        <p>Centro San Valero | Violeta Parra, 9 | 50015 Zaragoza | Tel. 976 466 599</p>
        <p>Aviso Legal | Política de privacidad | Política de Cookies Canal Ético_</p>
  
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterComponent",
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: #fff;
    padding-top: 30px;
    padding-bottom: 30px;
  
  
  }
  
  .footer__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 20px;
  }
  
  .footer__column {
    flex: 1 1 200px;
    margin: 10px;
  }
  
  .footer__column h3 {
    font-size: 1.2em;
    margin-bottom: 10px;
  }
  
  .footer__column ul {
    list-style: none;
    padding: 0;
  }
  
  .footer__column ul li {
    margin: 5px 0;
  }
  
  .footer__column ul li a {
    color: #fff;
    text-decoration: none;
  }
  
  .footer__certifications,
  .footer__logos {
  
    margin: 10px;
  }
  
  .footer__certifications img,
  .footer__logos img {
    max-width: 100%;
    margin: 5px 0;
    padding-right: 300px;
  }
  
  .footer__bottom {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 20px;
    border-top: 1px solid #555;
    padding-left: 100px;
    padding-right: 100px
  }
  
  .footer__bottom2 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 20px;
    border-top: 1px solid #555;
  }
  
  
  .footer__cookies {
    background-color: #555;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  .footer__columns{
    max-width: 1300px;
    padding-left: 250px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
  
  }
  </style>