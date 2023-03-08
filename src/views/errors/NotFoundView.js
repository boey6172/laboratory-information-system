import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  makeStyles
} from '@material-ui/core';
import Page from '../../components/Page';
import { Link as RouterLink, useNavigate } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  image: {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    width: 560
  }
}));

const NotFoundView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="404"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="md">
          <Typography
            align="center"
            color="textPrimary"
            variant="h1"
          >
            404: You did an Oppsiee
          </Typography>
          <Typography
            align="center"
            color="textPrimary"
            variant="subtitle2"
          >
            You either tried some shady route or you came here by mistake.
            Whichever it is, try using the navigation
          </Typography>
          <Box textAlign="center">
            <img
              alt="Under development"
              className={classes.image}
              src="/static/images/undraw_page_not_found_su7k.svg"
            />
          </Box>
          <Box textAlign="center">
            {/* <a
              className="App-link"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Go back Home 
            </a> */}
            <Link
              component={RouterLink}
              to="/"
              variant="h6"
              style={{ color: "#1e88e5" }}
            >
              Go Back Home
            </Link>
          </Box>
        </Container>
      </Box>
    </Page>
  );
};

export default NotFoundView;
