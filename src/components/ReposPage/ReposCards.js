import React from 'react';

function ReposCards({ res }) {
  return (
    <div>
      { 
        res.map((repo) => (
          <li key={ repo.name }>
            <p>
              { repo.name }
            </p>
          </li>
        ))
      }
    </div>
  )
}

export default ReposCards;