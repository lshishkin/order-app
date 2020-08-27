import React from "react";
import { useDispatch } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";
import { OrderInterface } from "../../../store/orders/types";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import { orderActions } from "../../../store/orders/action";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      margin: theme.spacing(2),
    },
  })
);

interface TableInterface {
  filterdData: OrderInterface[];
  setFilter: (value: string) => void;
}

export default function OrderTable({ filterdData, setFilter }: TableInterface) {
  const classes = useStyles();
  let history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className={classes.container}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Номер заявки</TableCell>
              <TableCell align="left">Дата</TableCell>
              <TableCell align="left">Название фирмы</TableCell>
              <TableCell align="left">ФИО перевозчика</TableCell>
              <TableCell align="left">Телефон</TableCell>
              <TableCell align="left">Комментарий</TableCell>
              <TableCell align="left">ATI</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filterdData.map((row) => (
              <TableRow key={row.number}>
                <TableCell align="left">{row.number}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">{row.companyName}</TableCell>
                <TableCell align="left">{row.fullName}</TableCell>
                <TableCell align="left">{row.phone}</TableCell>
                <TableCell align="left">{row.comment}</TableCell>
                <TableCell align="left">
                  <a href={`https://ati.su/firms/${row.ati}/info`}>{row.ati}</a>
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    onClick={() => history.push(`/order/${row._id}`)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    onClick={() =>
                      dispatch(
                        orderActions.fetchDeleteOrderAsync(row._id as string)
                      )
                    }
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
