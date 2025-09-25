import React from 'react';

function LinkItem({ href, children }) {
  return (
    <a className="link" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default function App() {
  return (
    <main className="page">
      <section className="card">
        <header className="header">
          <div className="avatar" aria-hidden="true">A</div>
          <div>
            <h1 className="title">Ade Surya Ramadhani <span className="nickname">(Ade)</span></h1>
            <p className="subtitle">Software Engineer — Backend · Infra · 5+ years experience</p>
          </div>
        </header>

        <div className="content">
          <p className="now">Currently: Software Engineer at Traveloka</p>
          <p className="edu">Graduate: Bandung Institute of Technology — Computer Science</p>
          <p className="more">{`{Other Information will be added soon}`}</p>
        </div>

        <div className="divider" />

        <section className="contacts">
          <h2>Contact</h2>
          <ul>
            <li>
              <LinkItem href="https://wa.me/6281313903388?text=Hello%20Ade">WA: (+62) 813-1390-3388</LinkItem>
            </li>
            <li>
              <LinkItem href="mailto:adesuramadhan@gmail.com">Email: adesuramadhan@gmail.com</LinkItem>
            </li>
            <li>
              <LinkItem href="https://twitter.com/adesuramadhan">Twitter: @adesuramadhan</LinkItem>
            </li>
            <li>
              <LinkItem href="https://instagram.com/adesuramadhan">IG: @adesuramadhan</LinkItem>
            </li>
            <li>
              <LinkItem href="https://www.linkedin.com/in/adesuryaramadhani">LinkedIn</LinkItem>
            </li>
          </ul>
        </section>

        <footer className="footer">
          <small>© {new Date().getFullYear()} Ade Surya Ramadhani. Built with React + Vite.</small>
        </footer>
      </section>
    </main>
  );
}

