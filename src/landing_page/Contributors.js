import React, { useEffect, useState } from "react";
import "./home/image.css";

const Contributors = () => {
  const [contributors, setContributors] = useState([]);
  const myUsername = "ritikamahato924";

  useEffect(() => {
    fetch("https://api.github.com/repos/ritikamahato924/Agri-Project/contributors")
      .then((res) => res.json())
      .then((data) => {
        // filter out our own account
        const filtered = data.filter((c) => c.login !== myUsername);
        setContributors(filtered);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="contributors">
      <h2>Contributors</h2>
      <p>Thanks to everyone who contributed!</p>
      <div className="contributors-grid">
        {contributors.map((c) => (
          <div className="contributor" key={c.id}>
            <img src={c.avatar_url} alt={c.login} />
            <h3>{c.login}</h3>
            <a href={c.html_url} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contributors;