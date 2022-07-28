import './ContactForm.css';

const ContactForm = () => {
  return(
    <div className='container-fluid contactFormContainer'>
      <div className="row">
        <div className='col-md-12'>
          <form encType="text/plain" action="#" method="GET">
            <fieldset>
              <legend>Contactanos</legend>
              <input className='contactFormInput' type="text" name="user-info" id="name" placeholder="Nombre"/>
              <input className='contactFormInput' type="text" name="user-info" id="surname" placeholder="Apellido"/>
              <br/>
              <input className='contactFormInput' type="text" name="user-info" id="email" placeholder="Correo electrónico"/>
              <input className='contactFormInput' type="text" name="user-info" id="phone" placeholder="Teléfono"/>
              <br/>
              <textarea name="name" rows="8" cols="80"></textarea>
              <br/><br/>
              <input className='btn btn-primary contactFormButton ' type="submit" value="Enviar formulario"/>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
