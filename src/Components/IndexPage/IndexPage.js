import './IndexPage.css';

import Carousel from '../Carousel/Carousel';
import ContactForm from '../ContactForm/ContactForm';

const IndexPage = () => {
  return(
    <div>
      <Carousel/>
      <div class='container indexMainContainer'>
        <div class='row justify-content-center'>
          <div class='col-md-10'>
            <h3 class='indexMainTitle'>HECHO A MEDIDA</h3>
            <div class='container'>

              <div class='row'>
                <div class='col-md-12 indexMainDescription'>
                  <p>Acompañamos a tu empresa a medir y gestionar sus emisiones de Gases de Efecto Invernadero para reducir las cantidades generadas y mejorar la sostenibilidad.</p>
                  <p>Sabemos que cada negocio es único, por eso nos tomamos el <strong>tiempo de escuchar y planificar específicamente en base a tus necesidades.</strong></p>
                </div>
              </div>

              <div class='row indexMainRow'>
                <div class='col-md-6 indexMainColumns'>
                  <h4>1. Centraliza tu información</h4>
                  <p>Sea cual sea el formato o el volumen. Cargue con simpleza sus datos de impacto ambiental en una sola plataforma y guárdelos de forma segura.  ------ ¡Revisar esto!¿Cualquier formato?</p>
                </div>
                <div class='col-md-6'>
                  <img src="https://static.wixstatic.com/media/f59373_d4c8b1766c9843cf84b63ce067283ec8~mv2.png/v1/fill/w_508,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Component%2025%20%E2%80%93%201.png" alt=""/>
                  <img src="https://static.wixstatic.com/media/f59373_29b45ca36a0042e0b414d48b3dc11b4e~mv2.png/v1/fill/w_508,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Component%2026%20%E2%80%93%201.png" alt=""/>
                  <img src="https://static.wixstatic.com/media/f59373_00bcc57f34014bd093532c3bbb586e46~mv2.png/v1/fill/w_508,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Component%2027%20%E2%80%93%201.png" alt=""/>
                  <img src="https://static.wixstatic.com/media/f59373_eca4bfb0fe3743149dc37276ff848a2f~mv2.png/v1/fill/w_508,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Component%2024%20%E2%80%93%202.png" alt=""/>
                </div>
              </div>

              <div class='row indexMainRow'>
                <div class='col-md-6 indexMainColumns'>
                  <h4>2. Analiza tu impacto</h4>
                  <p>Nuestra plataforma permite que se clasifiquen, filtren y limpien sus datos para identificar áreas de enfoque y extraer mejores recomendaciones y conocimientos para la planificación de una estrategia de descarbonización efectiva.</p>
                </div>
                <div class='col-md-6'>
                  <img src="https://static.wixstatic.com/media/f59373_97fd0aa9fd2c48c185cc130c7a5395cd~mv2.png/v1/fill/w_418,h_180,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Component%2024%20%E2%80%93%203.png" alt=""/>
                  <img src="https://static.wixstatic.com/media/f59373_fd9e4b7c6b5441b2a4668ad249f9021a~mv2.png/v1/fill/w_420,h_180,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Component%2037%20%E2%80%93%201.png" alt=""/>
                  <img src="https://static.wixstatic.com/media/f59373_b4c01dd5f0e84361811d522fad337653~mv2.png/v1/fill/w_420,h_180,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Component%2024%20%E2%80%93%204.png" alt=""/>
                </div>
              </div>

              <div class='row indexMainRow'>
                <div class='col-md-6 indexMainColumns'>
                  <h4>3. Exporta los reportes que necesites</h4>
                  <p>Exporta rápida y fácilmente informes visuales para compartirlo con empleados, inversores o clientes.</p>
                </div>
                <div class='col-md-6'>
                  <img src="https://static.wixstatic.com/media/f59373_961a132bcdf044d8830c6177999ca654~mv2.jpg/v1/fill/w_453,h_526,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Comunicaci%C3%B3n-1.jpg" alt=""/>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <ContactForm/>
    </div>
  );
}

export default IndexPage;
