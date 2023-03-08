import React, { useContext } from "react";
import { ParentContext } from "../../user";
import clsx from "clsx";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles,
  Typography, 
  Breadcrumbs, 
  Link 
} from "@material-ui/core";
import { Add, NavigateNext } from "@material-ui/icons";
import { Search as SearchIcon } from "react-feather";

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1),
  },
  exportButton: {
    marginRight: theme.spacing(1),
  },
}));

export default ({ setKeyWords, className, ...rest }) => {
  const { dispatch } = useContext(ParentContext);
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box mt={-2.5}>
        <Typography color="textSecondary" gutterBottom variant="h2">
          Maintenance
        </Typography>
        <Breadcrumbs
          separator={<NavigateNext fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link color="inherit" href="/admin/dashboard">
            Home
          </Link>
          <Link color="inherit">Maintenance</Link>
          <Link color="textPrimary">Users</Link>
        </Breadcrumbs>
      </Box>
      <Box display="flex" justifyContent="flex-end" mr={2} ml={2}>
        <Button
          color="primary"
          variant="contained"
          startIcon={<Add />}
          onClick={(e) => dispatch({ type: "create" })}
        >
          Create new user
        </Button>
      </Box>
      <Box mt={3}>
        <Card
          style={{
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            boxShadow:
              "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
            borderRadius: "16px",
          }}
        >
          <CardContent>
            <Box maxWidth={500}>
              <TextField
                onChange={(e) => setKeyWords(e.target.value)}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon fontSize="small" color="action">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  ),
                }}
                placeholder="Search user"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};
