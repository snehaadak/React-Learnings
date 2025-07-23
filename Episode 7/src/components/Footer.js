
const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-section contact">
          <h3>Food Express</h3>
          <p>123 Food Street, Pune, India - 110001</p>
          <p>Phone: +91 98765 43210</p>
          <p>Email: contact@foodieexpress.com</p>
        </div>

        <div>
            <p>Copyright &copy; {currYear}, Made with 💗 by <strong>Sneha</strong></p>
        </div>
        
    </footer>
  );
};

export default Footer;