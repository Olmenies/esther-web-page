import './ContactForm.css';

const ContactForm = () => {
  return(
    <div class='container-fluid contactFormContainer'>
      <div class="row">
        <div class='col-md-12'>
          <form enctype="text/plain" action="#" method="GET">
            <fieldset>
              <legend>Rellena el formulario y te contactaremos</legend>
              <input class='contactFormInput' type="text" name="user-info" id="name" placeholder="Nombre"/>
              <input class='contactFormInput' type="text" name="user-info" id="surname" placeholder="Apellido"/>
              <br/>
              <input class='contactFormInput' type="text" name="user-info" id="email" placeholder="Correo electrónico"/>
              <input class='contactFormInput' type="text" name="user-info" id="phone" placeholder="Teléfono"/>
              <br/>
              <textarea name="name" rows="8" cols="80"></textarea>
              <br/><br/>
              <input class='btn btn-primary contactFormButton ' type="submit" value="Enviar formulario"/>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
