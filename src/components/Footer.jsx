import { Box, Container, Typography, Button, SvgIcon } from "@mui/material";

const Footer = () => {
  return (
    <footer className="text-white bg-black">
      <Container maxWidth="lg" className="py-8">
        <Box className="flex flex-col justify-between md:flex-row">
          <Box className="flex items-center mb-4 md:mb-0 text-[4rem]">EQ3</Box>

          <Box className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <Typography variant="h6">About Us</Typography>
              <ul>
                <li>
                  <a
                    className="text-gray-400 hover:text-white"
                    href="/about-us"
                  >
                    Who We Are
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-400 hover:text-white"
                    href="/leadership"
                  >
                    Leadership
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white" href="/trade">
                    Trade
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-400 hover:text-white"
                    href="/wholesale"
                  >
                    Wholesale
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white" href="/careers">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <Typography variant="h6">Shop With Us</Typography>
              <ul>
                <li>
                  <a
                    className="text-gray-400 hover:text-white"
                    href="/find-store"
                  >
                    Find a Store
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-400 hover:text-white"
                    href="/design-services"
                  >
                    Design Services
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-400 hover:text-white"
                    href="/promo-rules"
                  >
                    Promo Rules
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-400 hover:text-white"
                    href="/gift-cards"
                  >
                    Gift Cards
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <Typography variant="h6">Questions</Typography>
              <ul>
                <li>
                  <a className="text-gray-400 hover:text-white" href="/contact">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-400 hover:text-white"
                    href="/shipping"
                  >
                    Shipping/Delivery
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white" href="/returns">
                    Returns/Exchanges
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white" href="/faq">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </Box>
        </Box>

        <Box className="flex flex-col items-start mt-8">
          <Button variant="outlined" color="secondary" className="mb-4">
            Live Chat
          </Button>
          <Typography variant="body2">Monday to Saturday</Typography>
          <Typography variant="body2">10:00 am - 6:00 pm (CST)</Typography>
          <Typography variant="body2">Excluding Holidays</Typography>
          <Typography variant="body2" className="mt-4">
            <a
              className="text-gray-400 hover:text-white"
              href="tel:+18889882014"
            >
              Call us at 1-888-988-2014
            </a>
          </Typography>
          <Typography variant="body2">Monday to Saturday</Typography>
          <Typography variant="body2">9:00 am - 5:00 pm (CST)</Typography>
        </Box>
      </Container>
      <p className="text-center">
        Created By{" "}
        <a href="https://www.linkedin.com/in/abdallahshaheen404/">
          Abdallah Shaheen
        </a>
      </p>
    </footer>
  );
};

export default Footer;
