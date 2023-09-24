import { React, useState, useEffect } from "react";
import { Container, Nav } from "react-bootstrap";
import Modal from "react-modal";

const aboutContent = (
  <div>
    <h2>About Our Site</h2>
    <p>Welcome to our Minnesota Planting Guide, your go-to resource for cultivating a thriving garden in the Land of 10,000 Lakes. Discover the native flora of Minnesota and learn the when and how of planting these beautiful plants to create a vibrant and sustainable garden that thrives in our unique climate.</p>
    <p>Enjoy!</p>
  </div>
);

const contactContent = (
  <div>
    <h2>Contact Information</h2>
    <p>If you encounter any bugs or issues, please contact us at:</p>
    <p>Email: WeLovePlants247@garden.com</p>
    <p>Phone: +1 (651) 867-5309</p>
  </div>
);

const AboutModal = ({ isOpen, onClose, aboutContent }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="About content"
      className="about-content"
      overlayClassName="modal-overlay"
    >
      <div>{aboutContent}</div>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </Modal>
  );
};

const ContactModal = ({ isOpen, onClose, contactContent }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Contact content"
      className="contact-content"
      overlayClassName="modal-overlay"
    >
      <div>{contactContent}</div>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </Modal>
  );
};

const quotes = [
  {
    text: "Acts of kindness are restful to witness. They transcend personal emotions and conflicts.",
    author: "Sigmund Freud",
  },
  {
    text: "To engage in a community is to believe in its future.",
    author: "Audrey Hepburn",
  },
  {
    text: "There are no community mistakes, only learning experiences.",
    author: "Janet Kilburn Phillips",
  },
  {
    text: "There is a sense of community in every childhood, an enchanted place where connections are deeper, spirits higher, and the future more hopeful.",
    author: "Elizabeth Lawrence",
  },
  {
    text: "Community work is full of challenges, almost all of them heartwarming and many of them enlightening.",
    author: "Henry Mitchell",
  },
  {
    text: "In every philanthropist, there's a heart that believes in the Power of Good.",
    author: "Robert Brault",
  },
  {
    text: "Community work suggests there might be a place where we can meet humanity halfway.",
    author: "Michael Pollan",
  },
  {
    text: "A setback is but a challenge that hasn't found its place in the grand scheme of community.",
    author: "Doug Larson",
  },
  {
    text: "A community in its infancy shows immense potential, and then, with time, it grows into a mosaic of diverse and enriching experiences.",
    author: "Gertrude Stein",
  },
  {
    text: "Despite one's best intentions, the community will evolve in its own unique way.",
    author: "Michael P. Garofalo",
  },
  {
    text: 'Communities are not built by simply saying "oh, how wonderful" and watching from afar.',
    author: "Rudyard Kipling",
  },
  {
    text: "Life's a community, be a part of it!",
    author: "Joe Dirt",
  }
];


const Footer = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    // Automatically cycle through quotes every 5 seconds
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const currentQuote = quotes[currentQuoteIndex];

  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [aboutModalContent, setAboutModalContent] = useState("");
  const [contactModalContent, setContactModalContent] = useState("");

  const openAboutModal = () => {
    setAboutModalContent(aboutContent);
    setIsAboutModalOpen(true);
  };

  const openContactModal = () => {
    setContactModalContent(contactContent);
    setIsContactModalOpen(true);
  };

  const closeAboutModal = () => {
    setIsAboutModalOpen(false);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <footer className="footer" style={{ borderTop: "1px solid #333" }}>
      <Container fluid>
        <div className="quote-container text-center">
          <p style={{ fontStyle: "italic", margin: 0 }}>"{currentQuote.text}" -{currentQuote.author}</p>
        </div>
          <div className="footer-content">
            <div className="footer-links">
              <Nav className="d-flex flex-row">
                <Nav.Link href="/" >Home</Nav.Link>
                <Nav.Link 
                onClick={openAboutModal}
                    >About
                </Nav.Link>
                <Nav.Link 
                onClick={openContactModal} 
                    >Contact
                </Nav.Link>
              </Nav>
            </div>
          <div className="footer-info text-center">
            <span className="faded-text">&copy; MinneGrowta @2023</span>
          </div>
        </div>
      </Container>
      <AboutModal isOpen={isAboutModalOpen} onClose={closeAboutModal} aboutContent={aboutModalContent} />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} contactContent={contactModalContent} />
    </footer>
  );
};

export default Footer;