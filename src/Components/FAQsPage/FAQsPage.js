import './FAQsPage.css';

import {useEffect} from 'react';

const FAQsPage = () => {
  return(
    <div>
      <div className="container">

      <div className="row my-5">
        <div className="col-md-12">
          <h3 className='FAQsPageHeader my-5'>Preguntas Frecuentes</h3>
        </div>
      </div>

        <div className="row my-5">
          <div className="col-md-12">
            <div className='accordion' id='accordionPanelsStayOpenExample'>

              <div className='accordion-item'>
                <h2 className='accordion-header' id='panelsStayOpen-headingOne'>
                  <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#panelsStayOpen-collapseOne' aria-expanded='true' aria-controls='panelsStayOpen-collapseOne'>
                    ¿Qué es Esther?
                  </button>
                </h2>
                <div id='panelsStayOpen-collapseOne' className='accordion-collapse collapsed show' aria-labelledby='panelsStayOpen-headingOne'>
                  <div className='accordion-body'>
                    <p>Somos una empresa con el objetivo de crear un mundo más sustentable, permitiendo que cualquier persona o compañia, tenga la posibilidad de lograr tener su huella de carbono neutra a través de nuestra plataforma.</p>
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <h2 className='accordion-header' id='panelsStayOpen-headingTwo'>
                  <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#panelsStayOpen-collapseTwo' aria-expanded='false' aria-controls='panelsStayOpen-collapseTwo'>
                    ¿Qué es la huella de carbono?
                  </button>
                </h2>
                <div id='panelsStayOpen-collapseTwo' className='accordion-collapse collapse' aria-labelledby='panelsStayOpen-headingTwo'>
                  <div className='accordion-body'>
                    <p>La <strong>huella de carbono</strong> representa la cantidad total de <strong>Gases de Efecto Invernadero (GEI)</strong> que emitimos al medio ambiente por el simple hecho de mantener nuestro estilo de vida.</p>
                    <p>Esta se representa únicamente en <stong>Co2e (Dióxido de carbono equivalente)</stong></p>
                    <p>La <strong>huella de carbono</strong> varía según distintos factores como:</p>
                    <ul>
                      <li>De que manera nos trasladamos, si en auto, en moto, en autobús o cualquier otro vehiculo</li>
                      <li>La cantidad de viajes en avión que realizamos</li>
                      <li className='bg-danger'>El uso de gas natural para </li>
                      <li>Cuanta electricidad utilizamos en el hogar</li>
                      <li>La dieta que llevamos, segun el consumo de carne que tengamos</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <h2 className='accordion-header' id='panelsStayOpen-headingThree'>
                  <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#panelsStayOpen-collapseThree' aria-expanded='false' aria-controls='panelsStayOpen-collapseThree'>
                    ¿Qué es el CO2 Equivalente (Dióxido de Carbono Equivalente)?
                  </button>
                </h2>
                <div id='panelsStayOpen-collapseThree' className='accordion-collapse collapse' aria-labelledby='panelsStayOpen-headingThree'>
                  <div className='accordion-body'>
                    <p>El CO2 equivalente es una unidad de medida que representa el equivalente, en cantidad de dióxido de carbono, de los Gases de Efecto Invernadero (GEI) causantes del calentamiento global.</p>
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <h2 className='accordion-header' id='panelsStayOpen-headingFour'>
                  <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#panelsStayOpen-collapseFour' aria-expanded='false' aria-controls='panelsStayOpen-collapseFour'>
                    ¿Qué son los créditos o bonos de carbono?
                  </button>
                </h2>
                <div id='panelsStayOpen-collapseFour' className='accordion-collapse collapse' aria-labelledby='panelsStayOpen-headingFour'>
                  <div className='accordion-body'>
                    <p>Un crédito de carbono representa la eliminación de una tonelada de *CO2 equivalente que se encuentra en la atmósfera.</p>
                    <p>Es posible la existencia de estos créditos gracias a proyectos que se ocupan de que el proceso de mitigación ocurra efectivamente.</p>
                    <p><strong>CO2 equivalente</strong> es una unidad de medida que representa, el equivalente en cantidad de dióxido de carbono, a todos los GEI causantes del calentamiento global.</p>
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <h2 className='accordion-header' id='panelsStayOpen-headingFive'>
                  <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#panelsStayOpen-collapseFive' aria-expanded='false' aria-controls='panelsStayOpen-collapseFive'>
                    ¿Cómo me aseguro que los créditos que compré, generan realmente el impacto que propone Esther?"
                  </button>
                </h2>
                <div id='panelsStayOpen-collapseFive' className='accordion-collapse collapse' aria-labelledby='panelsStayOpen-headingFive'>
                  <div className='accordion-body'>
                    <p>Los <strong>créditos de carbono</strong> que compraste, provienen de los proyectos con los que trabajamos, los cuales están regulados, controlados y certificados por los principales estándares internacionales de créditos de carbono, como <strong>VCS & CCB (Verra)</strong> y <strong>The Gold Standard</strong>.</p>
                    <p>Esto quiere decir que los proyectos tienen un seguimiento constante y mediciones que sustentan con el más mínimo detalle cuánto <strong>CO2 Equivalente</strong> mitigan.</p>
                    <p>Los datos en detalle sobre los proyectos con los que trabajamos son públicos y los puedes encontrar en nuestra web.</p>
                    <p>Desde <strong>Esther</strong> fomentamos la lectura de los mismos para poder adquirir mayor conocimiento sobre el proceso.</p>
                  </div>
                </div>
              </div>

              <div className='accordion-item'>
                <h2 className='accordion-header' id='panelsStayOpen-headingSix'>
                  <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#panelsStayOpen-collapseSix' aria-expanded='false' aria-controls='panelsStayOpen-collapseSix'>
                    ¿Qué beneficio obtengo por comprar los créditos de carbono?
                  </button>
                </h2>
                <div id='panelsStayOpen-collapseSix' className='accordion-collapse collapse' aria-labelledby='panelsStayOpen-headingSix'>
                  <div className='accordion-body'>
                    <p><strong>¡Muy bien!</strong></p>
                    <p><strong>¡Estas siendo parte del cambio hacia un mundo mejor, más equilibrado y más limpio!</strong></p>
                    <p>Tendrás una huella neutral, ya que tu acción de comprar los créditos la reduce al máximo, lo que te lleva a ser una persona más justa con respecto al medio ambiente.</p>
                    <p><strong>Lo que vos o tu empresa emiten, ahora se encuentra en equilibrio.</strong></p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQsPage;
