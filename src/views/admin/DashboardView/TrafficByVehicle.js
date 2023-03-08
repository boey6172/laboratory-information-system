/* Core Imports */
import React, { useState, useEffect} from "react";
import PropTypes from "prop-types";

/* UI Imports */
// import { Doughnut } from "react-chartjs-2";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  colors,
  makeStyles,
  useTheme,
} from "@material-ui/core";

// /* Api Imports */
// import { useQuery } from "@apollo/client";

// /* Query Imports */
// import { GET_EMPLOYEE_BY_APPLICANT_STATUS } from "./Query";

/* Create Styles */
import clsx from "clsx";
const useStyles = makeStyles({
  root: {
    height: "auto",
  },
});

const TrafficByDevice = ({ applicantStatuses, employeeStatuses, className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [ totalData, setTotalData ] = useState([0,0,0,0]) 
  const OrientationApplicantStatus = applicantStatuses?.filter(e => e.code == 2)?.[0]._id;
  const OrientationEmployeeStatus = employeeStatuses?.filter(e => e.name == "Hired")?.[0]._id;
  const ContractSigningApplicantStatus = applicantStatuses?.filter(e => e.code == 3)?.[0]._id;
  const ContractSigningEmployeeStatus = employeeStatuses?.filter(e => e.name == "Hired")?.[0]._id;
  const IssuanceApplicantStatus = applicantStatuses?.filter(e => e.code == 4)?.[0]._id;
  const IssuanceEmployeeStatus = employeeStatuses?.filter(e => e.name == "Hired")?.[0]._id;
  const BiometricsApplicantStatus = applicantStatuses?.filter(e => e.code == 5)?.[0]._id;
  const BiometricsEmployeeStatus = employeeStatuses?.filter(e => e.name == "Hired")?.[0]._id;
  
  // const { data: dataEmployeeOrientation } = useQuery(GET_EMPLOYEE_BY_APPLICANT_STATUS, {
  //   variables:{
  //     status: OrientationEmployeeStatus,
  //     applicant_status: OrientationApplicantStatus
  //   }
  // });

  // const { data: dataEmployeeContractSigning } = useQuery(GET_EMPLOYEE_BY_APPLICANT_STATUS, {
  //   variables:{
  //     status: ContractSigningEmployeeStatus,
  //     applicant_status: ContractSigningApplicantStatus
  //   }
  // });

  // const { data: dataEmployeeIssuance } = useQuery(GET_EMPLOYEE_BY_APPLICANT_STATUS, {
  //   variables:{
  //     status: IssuanceEmployeeStatus,
  //     applicant_status: IssuanceApplicantStatus
  //   }
  // });

  // const { data: dataEmployeeBiometrics } = useQuery(GET_EMPLOYEE_BY_APPLICANT_STATUS, {
  //   variables:{
  //     status: BiometricsEmployeeStatus,
  //     applicant_status: BiometricsApplicantStatus
  //   }
  // });

  // useEffect(() => {
  //   if(dataEmployeeOrientation && dataEmployeeContractSigning && dataEmployeeIssuance && dataEmployeeBiometrics){
  //     setTotalData([
  //       dataEmployeeOrientation.employeesWtApplicantStatus.length,
  //       dataEmployeeContractSigning.employeesWtApplicantStatus.length,
  //       dataEmployeeIssuance.employeesWtApplicantStatus.length,
  //       dataEmployeeBiometrics.employeesWtApplicantStatus.length
  //     ])
  //   }
  // }, [dataEmployeeOrientation,dataEmployeeContractSigning, dataEmployeeIssuance, dataEmployeeBiometrics])  

  const data = {
    datasets: [
      {
        data: totalData,
        backgroundColor: [
          colors.indigo[500],
          colors.red[600],
          colors.orange[600],
          colors.teal[500]
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white,
      },
    ],
    labels: ["Orientation", "Contract Signing", "Issuance", "Biometrics"],
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: theme.palette.text.primary,
    },
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
      style={{
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        boxShadow:
          "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
        borderRadius: "16px",
      }}
    >
      <CardHeader title="Analytics" />
      <Divider />
      <CardContent>
        <Box height={300} position="relative">
          {/* <Doughnut data={data} options={options} /> */}
        </Box>
      </CardContent>
    </Card>
  );
};

TrafficByDevice.propTypes = {
  className: PropTypes.string,
};

export default TrafficByDevice;