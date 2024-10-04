import { Box, Button, Typography } from "@mui/material";

const FeaturesCard = () => {
  return (
    <div className="p-10">
      <Box sx={{ backgroundColor: "#FAFAFA", display: "flex", gap: "50px" }}>
        <img className="max-w-[50%]" src="/assets/featurecard2.webp" />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
            gap: "24px",
            padding: "132px 32px 132px 112px",
            height: "100%",
          }}
        >
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: "32px",
            }}
            variant="h2"
          >
            AS LOW AS 0% APR FINANCING UPON APPROVAL WITH AFFIRM
          </Typography>
          <Typography sx={{}} variant="span">
            Affirm provides flexible payment solutions, allowing you to buy
            better and pay over time.
          </Typography>
          <Button
            sx={{
              backgroundColor: "black",
              color: "white",
              padding: "7px 18px",
              display: "inline-block",
              textAlign: "start",
              textTransform: "capitalize",
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#FAFAFA",
          display: "flex",
          gap: "50px",
          flexDirection: "row-reverse",
          marginTop: "50px",
        }}
      >
        <img className="max-w-[50%]" src="/assets/featruecard3.webp" />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
            gap: "24px",
            padding: "132px 32px 132px 112px",
            height: "100%",
          }}
        >
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: "32px",
            }}
            variant="h2"
          >
            CHOOSE WITH CONFIDENCE
          </Typography>
          <Typography sx={{}} variant="span">
            Remove the guesswork in choosing your upholstery design by ordering
            complimentary swatches.
          </Typography>
          <Button
            sx={{
              backgroundColor: "black",
              color: "white",
              padding: "7px 18px",
              display: "inline-block",
              textAlign: "start",
              textTransform: "capitalize",
            }}
          >
            Order Swatches
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#FAFAFA",
          display: "flex",
          gap: "50px",

          marginTop: "50px",
        }}
      >
        <img className="max-w-[50%]" src="/assets/featurecard1.jpeg" />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
            gap: "24px",
            padding: "132px 32px 132px 112px",
            height: "100%",
          }}
        >
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: "32px",
            }}
            variant="h2"
          >
            Complimentary Design Services.
          </Typography>
          <Typography sx={{}} variant="span">
            Let&apos;s create your dream space together
          </Typography>
          <Button
            sx={{
              backgroundColor: "black",
              color: "white",
              padding: "7px 18px",
              display: "inline-block",
              textAlign: "start",
              textTransform: "capitalize",
            }}
          >
            Book A Consultation
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default FeaturesCard;
