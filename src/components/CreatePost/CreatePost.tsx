// import { useState } from "react"
import {
  Box,
  Modal,
  Typography,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import profile from "../../assets/images/profile-picture.svg";
import face from "../../assets/images/face.svg";
import gallery from "../../assets/images/gallery.svg";
import video from "../../assets/images/video-square.svg";
import link from "../../assets/images/link.svg";
import hashtag from "../../assets/images/hashtag.svg";
import close from "../../assets/images/close-circle.svg";
import lock from "../../assets/images/lock.svg";
// import arrow from '../../assets/images/drop-down-arrow.svg'
// import { useModal } from "../../hooks/useModal";

const items = [
  { name: "Image", icon: gallery },
  { name: "Video", icon: video },
  { name: "Attachment", icon: link },
  { name: "Hashtag", icon: hashtag },
];

function CreatePost() {
  // const { open, handleOpen, handleClose } = useModal();

  return (
    <Box
      sx={{
        background: "#FFF",
        borderRadius: "20px",
        width: "584px",
        padding: "24px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "100%", height: "100%" }}>
        <Box sx={{ display: "flex" }}>
          <Box component="img" src={profile} alt="profile" width="44px" />
          <Box
            sx={{
              borderRadius: "30px",
              height: "44px",
              marginLeft: "10px",
              background: "#F5F5F5",
              borderStyle: "none",
              width: "100%",
              padding: "0px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              "&:hover": {
                cursor: "pointer",
                background: "#F2F2F2",
              },
            }}
          // onClick={handleOpen}
          >
            <Typography
              sx={{ fontWeight: 400, fontSize: "14px", color: "#C8C8C8" }}
            >
              Share something...
            </Typography>
            <Box component="img" src={face} alt="face" />
          </Box>
          {/* <Modal
            open={open}
            // onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          > */}
          <Box
            sx={{
              width: "792px",
              height: "544px",
              background: "#FFF",
              borderRadius: "20px",
              margin: "auto",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              position: "absolute",
            }}
          >
            <Box
              component="img"
              src={close}
              alt="close"
              sx={{
                width: "24px",
                position: "absolute",
                top: "24px",
                right: "24px",
                "&:hover": { cursor: "pointer" },
              }}
            // onClick={handleClose}
            />
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "28px",
                color: "#29282B",
                textAlign: "center",
                marginTop: "32px",
              }}
            >
              Create post
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "26px",
                marginLeft: "47px",
              }}
            >
              <Box component="img" src={profile} alt="profile" width="67px" />
              <Box
                sx={{
                  marginLeft: "16px",
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <Typography
                  sx={{ fontWeight: 600, fontSize: "14px", color: "#29282B" }}
                >
                  Nguyễn Quỳnh Anh
                </Typography>
                <Select
                  defaultValue={10}
                  sx={{ background: "#F5F5F5", height: "35px" }}
                >
                  <MenuItem value={10}>
                    {" "}
                    <Box
                      component="img"
                      src={lock}
                      alt="lock"
                      marginRight="5.75px"
                    />
                    Only me
                  </MenuItem>
                </Select>
              </Box>
            </Box>
            <Box
              sx={{
                marginTop: "25px",
                marginLeft: "50px",
                marginRight: "50px",
              }}
            >
              <TextField
                fullWidth
                placeholder="What's on your mind?"
                multiline
                minRows={6}
                maxRows={6}
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                inputProps={{ style: { fontSize: "24px", fontWeight: 400 } }}
                InputLabelProps={{
                  style: { color: "#C8C8C8" },
                }}
              />
            </Box>
            <Box
              sx={{
                border: "1px solid #C8C8C8",
                borderRadius: "10px",
                padding: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginLeft: "42px",
                marginRight: "42px",
                marginTop: "20px",
              }}
            >
              <Typography
                sx={{ fontWeight: 500, fontSize: "16px", color: "#29282B" }}
              >
                Add to your post
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "24px",
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                >
                  <Box component="img" src={gallery} alt="image" />
                  <Typography sx={{ marginLeft: "6px" }}>Image</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "24px",
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                >
                  <Box component="img" src={video} alt="video" />
                  <Typography sx={{ marginLeft: "6px" }}>Video</Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                marginTop: "25px",
                marginLeft: "42px",
                marginRight: "42px",
              }}
            >
              <Button
                fullWidth
                sx={{
                  background: "#C18FF5",
                  boxShadow: "0px 8px 25px rgba(114, 56, 207, 0.15)",
                  borderRadius: "10px",
                  textTransform: "none",
                  color: "#FFF",
                  fontWeight: 700,
                  fontSize: 14,
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  "&:hover": {
                    background: "#C080F0",
                  },
                }}
              >
                Post
              </Button>
            </Box>
          </Box>
          {/* </Modal> */}
        </Box>
        <Box
          component="div"
          sx={{
            borderTop: "1px solid #F1F1F1",
            margin: "24px 0px",
            width: "100%",
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          {items.map((item) => (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginRight: "24px",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <Box component="img" src={item.icon} alt="icon" />
              <Typography sx={{ marginLeft: "6px" }}>{item.name}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box >
  );
}

export default CreatePost;
