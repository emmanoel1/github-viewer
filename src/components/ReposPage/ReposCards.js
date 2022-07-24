import React from 'react';
import userLogoAlt from '../../staticTexts/userLogoAlt';
import cardImg from '../../images/laptop.webp'
import './repos.css'
import cardAlt from '../../staticTexts/cardAlt';
import { useNavigate } from 'react-router-dom';


function ReposCards({ res }) {

  const name = res[0].owner.login;
  const avatar = res[0].owner.avatar_url;

  const navigate = useNavigate();

  return (
  <section className="section is-hidden-mobile">

    <img
        className="center"
        src={ avatar }
        alt={ userLogoAlt }
    />
  
    <div className="container">
      <h3 className="title has-text-centered is-size-4">

        {`${name} Repositories:`}

      </h3>
      <div className="mt-5 columns is-centered is-8 is-variable">
        <div className="column is-4-tablet is-3-desktop">

        {res.map((repo) => (
          <div className="card mb-2 " key={ repo.name }>
            <div className="card-image has-text-centered px-6 ">
              <img src={cardImg} alt={cardAlt } />
            </div>
            <div className="card-content">
              <p className="title is-size-6 has-text-centered">{ repo.name }</p>
            </div>
            <footer className="card-footer">
              <button
                className="button card-footer-item is-primary is-rounded has-text-grey mb-3"
                onClick={() => {
                  navigate(`/${name}/repos/${repo.name}`);
                }}
              >
                View Repository
              </button>
            </footer>
          </div>
        ))}

        </div>
      </div>
    </div>
  </section>
  )
}

export default ReposCards;