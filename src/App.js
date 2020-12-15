import "./App.css";
import { useEffect, useState } from "react";
import { Link, BrowserRouter } from "react-router-dom";

function App() {
  const [repos, setRepos] = useState([{}]);
  const api = "https://api.github.com/users/SamratGhale/repos";
  useEffect(() => {
    setRepos([{}]);
    fetch(api)
      .then((x) => x.json())
      .then((y) => setRepos(y));
  }, [api]);
  return (
    <div className="App ">
      <a
        style={{ color: "black", fontSize: "larger" }}
        href="http://github.com/SamratGhale"
      >
        Samrat Ghale
      </a>
      <p>bio: student, </p>
      <BrowserRouter>
        <div className="center-screen">
          links:
          <a href="http://twitter.com/samrat_ghale">@twitter</a>
          <a href="malito: samrat.biz19@gmail.com">@gmail</a>
          <Link to="/blog">@blog</Link>
        </div>
        <div className="center-screen">
          repos:
          <br />
          {repos.map((item, idx) => {
            return (
              <div>
                <a href={item.html_url}>{item.name}</a>
                <br />
                <br />
              </div>
            );
          })}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
