import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { IApplicationState } from "../../store/types";
import { orderActions } from "../../store/orders/action";
import { OrderInterface } from "../../store/orders/types";
import OrderTable from "./Table";
import Header from "../../ui/Header";

const filterString = (filter: string, str: number | string | void) => {
  if (typeof str === "string" || typeof str === "number")
    return str.toString().toLowerCase().includes(filter.toLowerCase());
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      margin: theme.spacing(2),
      maxWidth: 500,
      marginLeft: "auto",
    },
    loader: {
      margin: "auto",
      display: "block",
    },
    addButton: {
      margin: theme.spacing(2),
      marginLeft: "auto",
    },
  })
);

const Orders = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  let history = useHistory();
  const { orders, load } = useSelector((state: IApplicationState) => ({
    orders: state.orders.orders,
    load: state.application.load,
  }));

  const [filter, setFilter] = useState("");
  const filterdData = useMemo(
    () =>
      orders?.filter((item: OrderInterface) => {
        return (
          filterString(filter, item.number) ||
          filterString(filter, item.date) ||
          filterString(filter, item.companyName) ||
          filterString(filter, item.fullName) ||
          filterString(filter, item.phone) ||
          filterString(filter, item?.comment) ||
          filterString(filter, item.ati)
        );
      }),
    [filter, orders]
  );

  const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilter(value);
  };

  const addHandler = () => {
    history.push("/create");
  };

  useEffect(() => {
    dispatch(orderActions.fetchOrdersAsync());
  }, [dispatch]);
  return (
    <>
      <Header />
      <TextField
        variant="outlined"
        className={classes.search}
        onChange={handlerOnChange}
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
      />
      {load ? (
        <CircularProgress className={classes.loader} />
      ) : (
        <OrderTable filterdData={filterdData} setFilter={setFilter} />
      )}
      <Button
        onClick={addHandler}
        className={classes.addButton}
        variant="contained"
        color="primary"
      >
        Добавить
      </Button>
    </>
  );
};

export default Orders;
