import React, { useContext } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { VerticalAlignBottom } from "@material-ui/icons";
import { Context } from "./index";
import {
  Box,
  Card,
  CardHeader,
  Divider,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import UpdateAttachment from "./update/Attachments/Attachment";
import Loading from "../../../../widgets/loading"

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: "3%",
  },
  downloadBtn: {
    color: "#fff",
    cursor: "pointer",
    background: "#232526" /* fallback for old browsers */,
    background:
      "-webkit-linear-gradient(to bottom, #9e9e9e, #000)" /* Chrome 10-25, Safari 5.1-6 */,
    background:
      "linear-gradient(to bottom, #9e9e9e, #000)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,

    width: "40px",
    height: "40px",
    padding: "8px",
    borderRadius: "50%",
  },
}));

const Sales = ({ className, ...rest }) => {
  const classes = useStyles();
  const { attachments, employeeInfo } = useContext(Context);

if(attachments){
  console.log(attachments)
  return (
    <Card
      className={clsx(classes.root)}
      {...rest}
      style={{
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        boxShadow:
          "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
        borderRadius: "16px",
      }}
    >
      <CardHeader
        action={
          <UpdateAttachment
            style={{ cursor: "pointer" }}
            employeeData={employeeInfo}
            attachments={attachments}
          />
        }
        title="Attachments"
        style={{ background: "#e2e2e2" }}
      />
      <Divider />
      <Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  textAlign: "center",
                }}
              >
                Document Type
              </TableCell>
              <TableCell style={{ textAlign: "center" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attachments?.map((attachment, index) => (
                <TableRow hover key={index}>
                  <TableCell
                    style={{
                      width: "300px",
                      textAlign: "center",
                    }}
                  >
                    {attachment.DocumentType.documentType}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    <a
                      href={`${process.env.REACT_APP_FILE_SERVER}${attachment.file}`}
                      download
                    >
                      <VerticalAlignBottom className={classes.downloadBtn} />
                    </a>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
}else{
  return(
    <Loading />
  )
}

};

Sales.propTypes = {
  className: PropTypes.string,
};

export default Sales;
