import './GetStartedPage.css';

import ContactForm from '../ContactForm/ContactForm';

const GetStartedPage = () => {
  return(
    <div>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-10'>
            <div className='container getStartedMainContainer'>

              <div className='row getStartedMainRow'>
                <div className='col-md-12'>
                  <h3>1. Mide tu impacto en el planeta</h3>
                  <p>La <strong>huella de carbono</strong> es un indicador ambiental que refleja la totalidad de Gases de Efecto Invernadero (GEI) emitidos anualmente por efecto directo o indirecto de un individio, oranizaión, evento o producto.</p>
                  <p>Al medirla, podrás conocer la huella que tú estás dejando en el mundo.</p>
                  <div className='text-center'>
                    <button className='btn btn-primary mt-4'>¡Quiero medir mi huella!</button>
                  </div>
                </div>
              </div>

              <div className='row getStartedMainRow'>
                <div className='col-md-12'>
                    <h3>2. Reduce y compensa</h3>
                    <p> <strong>¡Ahora si! ya podemos ponernos manos a la obra, sabemos cual es nuestro impacto, solo nos queda hacer algo al respecto, te dejamos algunas sugerencias:</strong></p>
                    <p>A - Comienza por reducir la cantidad de emisiones que generas mediante hábitos, como por ejemplo, el cambio en tu nutrición por una con menor consumo de carne, la manera en que te transportas a los lugares que frecuentas. Esto se vera reflejado en tu huella y tu impacto disminuirá. </p>
                    <p>B - Conviértete en carbono neutral compensando anualmente tu huella de carbono. Compensar tu huella de carbono es una forma de hacerte responsable de tus emisiones apoyando económicamente a proyectos que ayudar a disminuir y mitigar Gases de Efecto Invernadero de la atmosfera.</p>
                </div>
              </div>

              <div className='row getStartedMainRow'>
                <div className='col-md-12'>
                    <h3>3. Comparte tu acción</h3>
                    <p><strong>Compartir, de eso se trata la vida. ¡Es super importante este paso!</strong></p>
                    <p>Al compartir tu certificado de compensación, generas conciencia, fomentas el cuidado del medio ambiente y das la posibilidad a que más personas a que se sumen a salvar nuestro planeta tierra.</p>
                </div>
              </div>

              <div className='row getStartedMainRow'>
                <div className='col-md-12'>
                  <h3 className='text-center getStartedCompensantionTitle'>¿Cómo funciona la compensación?</h3>
                  <img className='rounded mx-auto d-block' src='https://static.wixstatic.com/media/f59373_dad7421dbebe4c8ab02e317ea1f0198a~mv2.png/v1/fill/w_1006,h_557,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/PAG.png' alt='Ciclo de Esther'/>
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

export default GetStartedPage;
