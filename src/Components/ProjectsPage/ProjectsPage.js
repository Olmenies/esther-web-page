//This could be improved by saving the data on a JSON, fetching and using making a for loop

import './ProjectsPage.css';
import pdf from '../../Data/Profile.pdf';

import {useEffect} from 'react';

const ProjectsPage = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  },[]);

  return(
    <div>
      <div className="container-fluid">

        <div className="row mt-5 projectsRow">
          <div className="col-md-12">
            <a className='text-decoration-none' href={pdf}>
              <div className="container-fluid px-0">
                <div className="row">
                  <div className="col-md-6 px-0 projectPageColImage"><img src="https://static.wixstatic.com/media/f59373_6602849d021c4d268a1dcd143c0660ad~mv2.jpg/v1/fill/w_953,h_453,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f59373_6602849d021c4d268a1dcd143c0660ad~mv2.jpg" alt=""/></div>
                  <div className="col-md-6 projectPageColText"><h3 className='projectsPageText'>RED CIKEL BRAZIL PROJECT</h3></div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="row mt-5 projectsRow">
          <div className="col-md-12">
            <a className='text-decoration-none' href={pdf}>
              <div className="container-fluid px-0">
                <div className="row">
                  <div className="col-md-6 projectPageColText"><h3 className=' text-decoration-none projectsPageText'>ISHASHA HYDROPOWER UGANDA PROJECT</h3></div>
                  <div className="col-md-6 px-0 projectPageColImage"><img src="https://static.wixstatic.com/media/f59373_bd04bd2d970141cdbacf6b31c1330974~mv2.jpg/v1/fill/w_953,h_425,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f59373_bd04bd2d970141cdbacf6b31c1330974~mv2.jpg" alt=""/></div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="row mt-5 projectsRow">
          <div className="col-md-12">
            <a className='text-decoration-none' href={pdf}>
              <div className="container-fluid px-0">
                <div className="row">
                  <div className="col-md-6 px-0 projectPageColImage"><img src="https://static.wixstatic.com/media/f59373_ca5b300bd8004445bc0c896a2589c1c6~mv2.png/v1/fill/w_953,h_425,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/f59373_ca5b300bd8004445bc0c896a2589c1c6~mv2.png" alt=""/></div>
                  <div className="col-md-6 projectPageColText"><h3 className='projectsPageText'>PICHACAY BIOGÁS ECUADOR PROJECT</h3></div>
                </div>
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProjectsPage;
