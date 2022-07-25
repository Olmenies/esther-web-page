import './Footer.css';

import {AiFillLinkedin, AiFillInstagram, AiFillFacebook, AiOutlineWhatsApp} from 'react-icons/ai';

const Footer = () => {
  return(
    <div className='container-fluid footerContainer'>
      <div className='row footerRow'>
      <div className='col-md-8 footerColumn'>
        <img src="https://static.wixstatic.com/media/f59373_34e4f0511de04843975120b97881bcf9~mv2.png/v1/crop/x_0,y_18,w_2588,h_584/fill/w_101,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2010Icon%20location_edited.png" alt="Esther"/>

        <ul className='footerSocialList'>
          <li><a href="https://www.linkedin.com/company/esther-la/"><AiFillLinkedin size={50} style={{color:"grey"}}/></a></li>
          <li><a href="https://www.instagram.com/esthercentral_/"><AiFillInstagram size={50} style={{color:"grey"}}/></a></li>
          <li><a href="/"><AiFillFacebook size={50} style={{color:"grey"}}/></a></li>
          <li><a href="/"><AiOutlineWhatsApp size={50} style={{color:"grey"}}/></a></li>
        </ul>

      </div>
        <div className='col-md-4 footerColumn'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis risus sed mi laoreet lobortis. Vestibulum imperdiet ex eget ligula rhoncus laoreet venenatis sed tortor. Sed scelerisque, metus vita</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
