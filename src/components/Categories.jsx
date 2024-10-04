import { ImageList, ImageListItem, Typography } from "@mui/material";

const itemData = [
  {
    img: "/assets/image1.png",
    title: "Ready to Ship Upholstery",
  },
  {
    img: "/assets/image2.png",
    title: "Dining",
  },
  {
    img: "/assets/image3.png",
    title: "Storage Beds",
  },
  {
    img: "/assets/image4.png",
    title: "Lighting",
  },
  {
    img: "/assets/image5.png",
    title: "Accent Tables",
  },
  {
    img: "/assets/image6.png",
    title: "Rugs",
  },
  {
    img: "/assets/iamge7.png",
    title: "Bar & Counter Stools",
  },
  {
    img: "/assets/image8.png",
    title: "Accent Stools",
  },
  {
    img: "/assets/iamge9.png",
    title: "Accessories",
  },
  {
    img: "/assets/image10.png",
    title: "Accent Chairs",
  },
  {
    img: "/assets/image11.png",
    title: "Outdoor",
  },
  {
    img: "/assets/image12.png",
    title: "Media & Storage",
  },
];

const Categories = () => {
  return (
    <div className="p-6">
      <Typography
        sx={{ textTransform: "uppercase", padding: "18px" }}
        variant="h4"
      >
        Shop by Category
      </Typography>
      <ImageList
        sx={{ width: "100%", height: "auto" }}
        cols={4}
        rowHeight="auto"
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} sx={{ margin: "16px" }}>
            {" "}
            {/* Added margin for spacing */}
            <div
              style={{
                backgroundColor: "#FAFAFA",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "30px", // Optional padding
                borderRadius: "8px", // Optional rounded corners
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Optional shadow for depth
              }}
            >
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{
                  marginBottom: "8px",
                  maxWidth: "70%",
                  height: "auto",
                }} // Ensures image fits and is centered
              />
              <Typography
                variant="subtitle1"
                align="center"
                sx={{ color: "black", marginTop: "8px" }} // Change color if needed
              >
                {item.title}
              </Typography>
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Categories;
