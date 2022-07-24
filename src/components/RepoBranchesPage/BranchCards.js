import React from 'react';
import cardImg from '../../images/laptop.webp'
import '../ReposPage/repos.css'
import cardAlt from '../../staticTexts/cardAlt';
import { useNavigate } from 'react-router-dom';

function BranchCards({ res, repo}) {
  const repoName = repo.repo;
  const userName = repo.owner;

  console.log(repoName, userName);

  const navigate = useNavigate();

  return (
  <section className="section">
  
    <div className="container">
      <h3 className="title has-text-centered is-size-4">

        {`${repoName} Repositories:`}

      </h3>
      <div className="mt-5 columns is-centered is-8 is-variable">
        <div className="column is-4-tablet is-3-desktop">

        {res.map((branch) => (
          <div className="card mb-2 " key={ branch.name }>
            <div className="card-image has-text-centered px-6 ">
              <img src={cardImg} alt={cardAlt } />
            </div>
            <div className="card-content">
              <p className="title is-size-6 has-text-centered">{ branch.name }</p>
            </div>
            <footer className="card-footer">
              <button
                className="button card-footer-item is-primary is-rounded has-text-grey mb-3"
                onClick={() => {
                  navigate(`/${userName}/repos/${repoName}/${branch.name}`);
                }}
              >
                View Commits
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

export default BranchCards;