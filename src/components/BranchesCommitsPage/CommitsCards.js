import React from 'react';
import cardImg from '../../images/laptop.webp'
import '../ReposPage/repos.css'
import cardAlt from '../../staticTexts/cardAlt';

function CommitsCards({ res, repo}) {
  const repoName = repo;

  const api_response = res[0];

  return (
  <section className="section">
  
    <div className="container">
      <h3 className="title has-text-centered is-size-4">

        {`${repoName} Commits:`}

      </h3>
      <div className="mt-5 columns is-centered is-8 is-variable">
        <div className="column is-4-tablet is-3-desktop">

        {api_response.map((commit) => (
          <div className="card mb-2 " key={ commit.sha }>
            <div className="card-image has-text-centered px-6 ">
              <img src={cardImg} alt={cardAlt } />
            </div>
            <div className="card-content">
              <p className="title is-size-6 has-text-centered">{ commit.commit.message }</p>
            </div>
            <footer className="card-footer">
              
            </footer>
          </div>
        ))}

        </div>
      </div>
    </div>
  </section>
  )
}

export default CommitsCards;