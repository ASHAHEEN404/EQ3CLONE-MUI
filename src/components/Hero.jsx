import { Box, Typography } from "@mui/material";

const Hero = () => {
  return (
    <div className="relative p-7">
      {" "}
      {/* Added "relative" to the div for positioning */}
      <img
        className="w-full h-auto"
        src="/src/assets/heroImage.jpeg"
        alt="Hero"
      />
      {/* Overlay Box */}
      <Box
        sx={{
          position: "absolute",
          padding: "28px",
          top: 29,
          left: 29,
          right: 0,
          height: "93%",
          width: "96.2%",
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 70%, rgba(0, 0, 0, 0.8) 100%)", // Lighter gradient overlay
        }}
      />
      {/* Text Box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
          position: "absolute",
          bottom: "9%",
          left: "52.5%",
          transform: "translateX(-50%)",
          width: "80%",
        }}
      >
        <Typography variant="h2"> IT&apos;S IN THE DETAILS</Typography>
        <Typography
          sx={{
            fontSize: "15px",
            letterSpacing: "5px",
          }}
          variant="body1"
        >
          As we welcome falling leaves and cooler breezes, explore designs to
          curate your next get-together.
        </Typography>
      </Box>
    </div>
  );
};

export default Hero;
