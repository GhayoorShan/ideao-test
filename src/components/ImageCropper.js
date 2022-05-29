import { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import {
  Grid,
  Dialog,
  Box,
  Typography,
  Button,
  FormLabel,
} from "@mui/material";
import PublishIcon from "@mui/icons-material/Publish";
import CloseIcon from "@mui/icons-material/Close";

const ImageCropper = ({ onPicSet }) => {
  const [src, setSrc] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1 / 1 });
  const [image, setImage] = useState(null);
  const [output, setOutput] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileChange = (e) => {
    let image = e.target.files[0];
    if (image) {
      const imageReader = new FileReader();
      imageReader.readAsDataURL(image);
      imageReader.onloadend = () => {
        setSrc(imageReader.result);
        handleClickOpen();
      };
    }
  };

  const cropImageNow = () => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    const pixelRatio = window.devicePixelRatio;
    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    // Converting to base64
    const base64Image = canvas.toDataURL("image/jpeg");
    setOutput(base64Image);
    onPicSet(base64Image);
    handleClose();
  };

  return (
    <>
      {src && (
        <Dialog open={open} onClose={handleClose}>
          <Box width="400px" textAlign="center">
            <Grid container justifyContent="space-around" alignItems="baseline">
              <Grid textAlign="left">
                <Typography width="230px" fontWeight={700} px={4} py={2}>
                  Please Set the thumbnail for your Photo
                </Typography>
              </Grid>
              <Grid>
                <CloseIcon />
              </Grid>
            </Grid>

            <ReactCrop
              src={src}
              onImageLoaded={setImage}
              crop={crop}
              onChange={setCrop}
            ></ReactCrop>

            <Button
              onClick={cropImageNow}
              variant="contained"
              size="large"
              sx={{
                borderRadius: "0",
                my: 2,
                background: "linear-gradient(to right, #AEFB2A, #57EBDE)",
                color: "black",
              }}
            >
              Set Thumbnail
            </Button>
          </Box>
        </Dialog>
      )}
      <FormLabel sx={{ color: "#FFF" }}>Upload Your Profile Photo</FormLabel>
      <Button
        sx={{
          color: "white",
          background: "#2D2D2D",
          borderRadius: "0",
          mt: 1,
        }}
        fullWidth
        variant="contained"
        component="label"
        size="large"
        onChange={handleFileChange}
      >
        {" "}
        <PublishIcon fontSize="small" /> Upload photo
        <input type="file" hidden accept="image/*" />
      </Button>
      {/* <div>{output && <img src={output} alt="" />}</div> */}
    </>
  );
};

export default ImageCropper;
