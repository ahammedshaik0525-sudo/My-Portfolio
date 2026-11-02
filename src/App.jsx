import "./App.css";

function App() {
  return (
    <main className="page">
      <nav className="navigation">
        <a className="logo" href="#home">Ahammed Shaik</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <p className="eyebrow">Aspiring Software Engineer</p>
        <h1>Hi, I’m Ahammed Shaik.</h1>
        <p className="intro">
          I’m learning to build useful web applications with React, Node.js,
          Express, and MongoDB.
        </p>
        <a className="button" href="#projects">See my projects</a>
      </section>

      <section className="section" id="about">
        <h2>About me</h2>
        <p>
          I’m an Aspiring Software Engineer. I enjoy
          learning by building projects and improving them step by step.
        </p>
      </section>

      <section className="section" id="projects">
        <h2>Projects</h2>
        <article className="project-card">
          <p className="project-status">Coming soon</p>
          <h3>My first portfolio</h3>
          <p>This is the first project in my full-stack development journey.</p>
        </article>
      </section>

      <section className="section" id="contact">
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:ahammedshaik0525@example.com">ahammedshaik0525@example.com</a>
        </p>
        <p>
          GitHub: <a href="https://github.com/ahammedshaik0525-sudo">https://github.com/ahammedshaik0525-sudo</a>
        </p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/">Add your LinkedIn profile link</a>
        </p>
      </section>

      <footer className="footer">
        <p>Built by Ahammed Shaik · 2026</p>
      </footer>

    </main>
  );
}

export default App;