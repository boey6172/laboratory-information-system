import React, { useContext } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
// import { Bar } from "react-chartjs-2";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
  Typography,
  colors,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { Context } from "./index";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import UpdateSkills from "./update/Skills/Skills";

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: "3%",
  },
}));

const Skills = ({ className, ...rest }) => {
  const { skills, employeeInfo } = useContext(Context);
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root)}
      {...rest}
      style={{
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        boxShadow:
          "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
        borderRadius: "16px",
        marginTop: "24px",
      }}
    >
      <CardHeader
        title="Skills"
        action={
          <UpdateSkills style={{ cursor: "pointer" }} data={employeeInfo} />
        }
      />
      <Divider />
      <Box p={3}>
        <Table>
          <TableBody>
            {skills &&
              skills.map((skill, index) => (
                <TableRow key={skill._id}>
                  <TableCell
                    style={{
                      border: "none",
                      padding: "3px",
                      width: "10px",
                      color: "#616161",
                    }}
                  >
                    <FiberManualRecordIcon style={{ fontSize: "10px" }} />
                  </TableCell>
                  <TableCell style={{ border: "none" }}>{skill.name}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
};

Skills.propTypes = {
  className: PropTypes.string,
};

export default Skills;
