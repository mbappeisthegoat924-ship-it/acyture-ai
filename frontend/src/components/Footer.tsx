import React from 'react'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h4>Acyture</h4>
          <p style={{color:'var(--muted)'}}>Intelligence, Evolved.</p>
        </div>

        <div>
          <h4>Product</h4>
          <a href="#features">Features</a>
          <br />
          <a href="#preview">Product Preview</a>
        </div>

        <div>
          <h4>Company</h4>
          <a href="#vision">About</a>
          <br />
          <a href="#pricing">Careers</a>
        </div>

        <div>
          <h4>Resources</h4>
          <a href="#">Docs</a>
          <br />
          <a href="#">Blog</a>
        </div>

        <div>
          <h4>Legal</h4>
          <a href="#">Privacy</a>
          <br />
          <a href="#">Terms</a>
        </div>

        <div>
          <h4>© {new Date().getFullYear()} Acyture</h4>
        </div>
      </div>
    </footer>
  )
}
