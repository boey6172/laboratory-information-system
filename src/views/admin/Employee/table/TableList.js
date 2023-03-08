/* Core Imports */
import React, { useState, useContext, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import moment from "moment";

/* UI Imports */
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  MenuItem,
  Button,
  Grid,
  InputBase,
  IconButton,
} from "@material-ui/core";
import { Search as SearchIcon } from "react-feather";
import { AddBox } from "@material-ui/icons";
import PerfectScrollbar from "react-perfect-scrollbar";

/* Api Imports */
// import { useQuery } from "@apollo/client";

/* Query Imports */
// import { GET_BIRTH_MONTH } from "./Query";

/* Context Instance */
import { ParentContext } from "../index";

/* Create Styles */
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  searchBar: {
    alignItems: "center",
    width: "100%",
    borderRadius: "50px",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow:
      "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
  },

  gridView: {
    "&:hover": {
      transition: "transform .2s, filter .2s ease-in-out",
      filter: " grayscale(100%)",
      transform: "scale(1.03)",
      cursor: "pointer",
    },
  },
  boxShadow: {
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow:
      "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
    borderRadius: "16px",
    marginTop: "25px",
  },
  addBtn: {
    color: "#616161",
    padding: "8px 0 8px 0",
    "&:hover": {
      color: "#000",
    },
  },
  iconButtonStyle: {
    padding: 10,
    marginBottom: "2px",
    marginRight: "-15px",
  },
  inputStyle: {
    marginLeft: theme.spacing(1),
    flex: 1,
    padding: 10,
    width: "85%",
  },
}));

const months = [
  { value: 1, name: "January" },
  { value: 2, name: "February" },
  { value: 3, name: "March" },
  { value: 4, name: "April" },
  { value: 5, name: "May" },
  { value: 6, name: "June" },
  { value: 7, name: "July" },
  { value: 8, name: "August" },
  { value: 9, name: "September" },
  { value: 10, name: "October" },
  { value: 11, name: "November" },
  { value: 12, name: "December" },
];

export default ({ className, ...rest }) => {
  const classes = useStyles();
  const { dispatch, employee } = useContext(ParentContext);
  const [search, setSearch] = useState("");
  const [filterMonth, setState] = useState();
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  const useFormInstance = useForm({
    shouldFocusError: false,
  });

  // const { handleSubmit, errors, getValues, control } = useFormInstance;

  // const { loading, error, data, refetch } = useQuery(
  //   GET_BIRTH_MONTH,
  //   {
  //     variables: { month: filterMonth },
  //   },
  //   {
  //     errorPolicy: "all",
  //   }
  // );

  const { getValues, control } = useFormInstance;

  // const { data, refetch } = useQuery(
  //   GET_BIRTH_MONTH,
  //   {
  //     variables: { month: filterMonth },
  //   },
  //   {
  //     errorPolicy: "all",
  //   }
  // );
  console.log(employee)
  useEffect(() => {
    if (search == "") {
      setFilteredEmployees(employee);
    } else {
      setFilteredEmployees(
        employee?.filter((employee) =>
          employee.firstname
            .concat(
              " ",
              employee.lastname,

            )
            .toLowerCase()
            .includes(search.toLowerCase())
        )
      );
    }
    // refetch();
    if (filterMonth != undefined && filterMonth != "") {
      // const filteredData = data?.employeesBirthMonth
      //   ?.filter((e) => {
      //     return e.applicant_status.code == 6 && e.status.name == "Hired";
      //   })
      //   .reverse();

      // setFilteredEmployees(filteredData);
    }
  }, [filterMonth, search, employee]);

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} md={2} lg={2}>
          <Button
            className={classes.addBtn}
            size="large"
            fullWidth
            startIcon={<AddBox />}
            onClick={(e) => dispatch({ type: "create" })}
          >
            Add Employee
          </Button>
        </Grid>{" "}
        <Grid item md={1} lg={1}></Grid>
        <Grid item md={4} xs={12}>
          <Controller
            control={control}
            name="birthMonth"
            rules={{ required: "Birth Month is required" }}
            render={({
              field: { onBlur },
              fieldState: { error },
            }) => (
              <>
                <FormControl
                  variant="outlined"
                  error={error !== undefined}
                  fullWidth
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Filter Birth Month
                  </InputLabel>
                  <Select
                    onChange={(e) => setState(e.target.value)}
                    onBlur={onBlur}
                    defaultValue={getValues("")}
                    label="Filter Birth Month"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                  >
                    <MenuItem value={""}>Select Month</MenuItem>
                    {months?.map((month, index) => (
                      <MenuItem value={month.value} key={index}>
                        {month.name}
                      </MenuItem>
                    ))}
                  </Select>
                  {error && <FormHelperText>{error?.message}</FormHelperText>}
                </FormControl>
              </>
            )}
          />
        </Grid>
        <Grid item md={1} lg={1}></Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Box justifyContent="flex-end" display="flex">
            <Card className={classes.searchBar}>
              <InputBase
                className={classes.inputStyle}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Employee"
                inputProps={{ "aria-label": "Search Employee ID Number" }}
              />
              <IconButton
                type="submit"
                className={classes.iconButtonStyle}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </Card>
          </Box>
        </Grid>
      </Grid>
      <Card className={clsx(classes.boxShadow)} {...rest}>
        <PerfectScrollbar>
          <Table>
            <TableHead>
              <TableRow style={{ background: "#e0e0e0" }}>
                <TableCell>No</TableCell>
                <TableCell>Employee&apos;s Name</TableCell>
                {/* <TableCell>Contract Number</TableCell>
                <TableCell>ID Number</TableCell> */}

                <TableCell>Rank</TableCell>
                {/* <TableCell>Company</TableCell> */}
                <TableCell>Assigned Region</TableCell>
                {/* <TableCell>Department</TableCell> */}
                <TableCell>Start Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredEmployees &&
                filteredEmployees.map((employee, index) => (
                  <TableRow
                    hover
                    key={employee?._id}
                    onClick={() => {
                      dispatch({ type: "view", payload: employee });
                    }}
                    className={classes.gridView}
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      <Box alignItems="center" display="flex">
                        <Typography color="textPrimary" variant="body1">
                          {`${employee?.firstname} ${employee?.middlename} ${employee?.lastname}`}
                        </Typography>
                      </Box>
                    </TableCell>
                    {/* <TableCell>
                      {employee?.employee_info?.contract_number}
                    </TableCell>
                    <TableCell>
                      {employee?.employee_info?.identification_number}
                    </TableCell> */}
                    <TableCell>
                      {employee?.Rank?.rank}
                    </TableCell>
                    {/* <TableCell>
                      {employee?.employee_info?.company?.name}
                    </TableCell> */}
                    <TableCell>
                      {employee?.RegionAssignment.regionAssignment}
                    </TableCell>
                    {/* <TableCell>
                      {employee?.employee_info?.department?.name}
                    </TableCell> */}
                    <TableCell>
                      {moment(employee?.empDate).format(
                        "DD/MM/YYYY"
                      )}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </PerfectScrollbar>
      </Card>
    </>
  );
};
