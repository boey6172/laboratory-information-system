/* Core Imports */
import React, { useState, useContext, useEffect } from "react";

/* UI Imports */
import {
  Divider,
  Box,
  Button,
  makeStyles,
  CardHeader,
  Card,
} from "@material-ui/core";

import { Backup } from "@material-ui/icons";

/* Validation Imports */

/* Context Import */

const useStyles = makeStyles((theme) => ({
  uploadButton: {
    marginBottom: 5,
    marginTop: 5,
  },
  input: {
    display: "none",
  },
}));

export default ({ image, setImage, disabled = false }) => {
  /* Initialization & Instance   */
  const classes = useStyles();

  /* Component Functions */

  const convertToImageUrl = (image) => {
    if (typeof image === "object" && image !== null) {
      return URL.createObjectURL(image);
    } else if (image === "") {
      return "";
    }
    const imagePath = `${process.env.REACT_APP_SERVER_BASE_URL}${image}`;
    return imagePath;
  };

  return (
    <Box ml={2} mr={2} mt={1}>
      <Card>
        <CardHeader subtitle="" title="Photo" />
        <Divider />
        <Box display="flex" justifyContent="center" m={2}>
          <Box component="span" display="inline-grid">
            <img
              src={convertToImageUrl(image)}
              alt=""
              width={250}
              height={250}
            />
            <input
              accept="image/*"
              className={classes.input}
              id="upload-button"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
              type="file"
            />
            <label htmlFor="upload-button">
              {!disabled && (
                <Button
                  fullWidth
                  className={classes.uploadButton}
                  startIcon={<Backup />}
                  variant="contained"
                  color="primary"
                  component="span"
                >
                  Upload
                </Button>
              )}
            </label>
          </Box>
        </Box>
        <Divider />
      </Card>
    </Box>
  );
};
