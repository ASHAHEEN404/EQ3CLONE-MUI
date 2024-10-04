import { Box, Typography } from "@mui/material";
import IconBreadcrumbs from "./IconBreadcrumbs.jsx";
import Appbar from "./Appbar.jsx";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between px-6 py-2">
        <Box>
          {/* Corrected the sx prop */}
          <Typography sx={{ fontWeight: "light", fontSize: "1.9rem" }}>
            EQ3
          </Typography>
        </Box>
        <Box>
          <IconBreadcrumbs />
        </Box>
      </div>
      <Appbar />
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          backgroundColor: "#FFA500",
          padding: "6px",
          fontWeight: "bold",
          letterSpacing: "1.5px",
        }}
      >
        Labour Day: Enjoy 30% off EQ3
      </Box>
    </>
  );
};

export default Header;
