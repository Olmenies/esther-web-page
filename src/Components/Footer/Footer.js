import './Footer.css';

const Footer = () => {
  return(
    <div class='container-fluid footerContainer'>
      <div class='row footerRow'>
      <div class='col-md-8 footerColumn'>
        <img src="https://static.wixstatic.com/media/f59373_34e4f0511de04843975120b97881bcf9~mv2.png/v1/crop/x_0,y_18,w_2588,h_584/fill/w_101,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2010Icon%20location_edited.png" alt="Esther"/>
        <ul class='footerSocialList'>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">WhatsApp</a></li>
        </ul>

      </div>
        <div class='col-md-4 footerColumn'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis risus sed mi laoreet lobortis. Vestibulum imperdiet ex eget ligula rhoncus laoreet venenatis sed tortor. Sed scelerisque, metus vita</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
