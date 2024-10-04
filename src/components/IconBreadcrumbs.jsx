import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LanguageIcon from "@mui/icons-material/Language";
import { Button, Box } from "@mui/material";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function IconBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/"
        >
          <FmdGoodIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        </Link>
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          <HelpOutlineIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        </Link>

        <FavoriteBorderIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/"
        >
          <PersonOutlineIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Join/login to EQ3
        </Link>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <LanguageIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          ENG/CAD
          {/* Button aligned next to the last breadcrumb */}
          <Button
            variant="outlined"
            startIcon={<ShoppingCartIcon />}
            sx={{
              ml: 1,
              borderColor: "black",
              color: "black",
            }}
          >
            Cart (0)
          </Button>
        </Box>
      </Breadcrumbs>
    </div>
  );
}
