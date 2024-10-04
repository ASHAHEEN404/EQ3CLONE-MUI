import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar
          style={{
            backgroundColor: "white",
            borderTop: "1px solid lightgray",
            borderBottom: "1px solid lightgray",
            boxShadow: "none",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "black",
              fontSize: "15px",
            }}
          >
            <Box sx={{ display: "inline-block", mr: 2 }}>
              <Link href="#" underline="hover" color="inherit">
                Living
              </Link>
            </Box>
            <Box sx={{ display: "inline-block", mr: 2 }}>
              <Link href="#" underline="hover" color="inherit">
                Dining
              </Link>
            </Box>
            <Box sx={{ display: "inline-block", mr: 2 }}>
              <Link href="#" underline="hover" color="inherit">
                Bedroom
              </Link>
            </Box>
            <Box sx={{ display: "inline-block", mr: 2 }}>
              <Link href="#" underline="hover" color="inherit">
                Outdoor
              </Link>
            </Box>
            <Box sx={{ display: "inline-block", mr: 2 }}>
              <Link href="#" underline="hover" color="inherit">
                Office
              </Link>
            </Box>
            <Box sx={{ display: "inline-block", mr: 2 }}>
              <Link href="#" underline="hover" color="inherit">
                Lighting
              </Link>
            </Box>
            <Box sx={{ display: "inline-block", mr: 2 }}>
              <Link href="#" underline="hover" color="inherit">
                Rugs
              </Link>
            </Box>
            <Box sx={{ display: "inline-block", mr: 2 }}>
              <Link href="#" underline="hover" color="inherit">
                Accessories
              </Link>
            </Box>
            <Box sx={{ display: "inline-block", mr: 2 }}>
              <Link href="#" underline="hover" color="inherit">
                Brands
              </Link>
            </Box>
            <Box sx={{ display: "inline-block", mr: 2 }}>
              <Link href="#" underline="hover" color="inherit">
                Inspiration
              </Link>
            </Box>
            <Box sx={{ display: "inline-block", mr: 2 }}>
              <Link href="#" underline="hover" color="inherit">
                Gifts
              </Link>
            </Box>
            <Box sx={{ display: "inline-block", mr: 2 }}>
              <Link href="#" underline="hover" color="inherit">
                Sale
              </Link>
            </Box>
          </Typography>
          <Search
            sx={{
              color: "balck",
              border: "1px solid lightgray",
              width: "50%",
            }}
          >
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "lightgray" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              sx={{
                color: "black", // Text color
                "::placeholder": { color: "black" }, // Placeholder color
              }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
