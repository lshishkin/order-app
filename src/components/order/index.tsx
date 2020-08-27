import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { IApplicationState } from "../../store/types";
import { orderActions } from "../../store/orders/action";
import Header from "../../ui/Header";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useFormik } from "formik";
import { OrderInterface } from "../../store/orders/types";

const getNewNumber = (orders: OrderInterface[]) => {
  if (orders.length === 0) {
    return 1;
  }
  const numbers = orders.map((item) => item.number);
  return Math.max.apply(null, numbers) + 1;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { maxWidth: 500 },
    form: {
      display: "flex",
      flexDirection: "column",
      "&>*": {
        margin: theme.spacing(2),
      },
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "space-between",
    },
  })
);

const Order = () => {
  const classes = useStyles();
  let history = useHistory();
  let { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(orderActions.fetchOrdersAsync());
  }, [dispatch, id]);
  const { order, orders, load } = useSelector((state: IApplicationState) => ({
    orders: state.orders.orders,
    order: id ? state.orders.orders.find((order) => order._id === id) : null,
    load: state.application.load,
  }));

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      number: order?.number || getNewNumber(orders),
      date: order?.date || "",
      companyName: order?.companyName || "",
      fullName: order?.fullName || "",
      phone: order?.phone || "",
      comment: order?.comment || "",
      ati: order?.ati || "",
    },
    onSubmit: (params: OrderInterface) => {
      id
        ? dispatch(orderActions.fetchUpdataOrderAsync({ id, params, history }))
        : dispatch(orderActions.fetchCreateOrderAsync({ params, history }));
    },
  });

  const handleCancel = () => {
    history.push("/");
  };

  return (
    <>
      <Header />
      <div className={classes.root}>
        {load ? (
          <CircularProgress />
        ) : (
          <form onSubmit={formik.handleSubmit} className={classes.form}>
            <TextField
              required
              disabled
              name="number"
              variant="outlined"
              label="Номер заявки"
              //onChange={formik.handleChange}
              defaultValue={formik.values.number}
            />
            <TextField
              required
              name="date"
              type="datetime-local"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              label="Дата"
              onChange={formik.handleChange}
              value={formik.values.date}
            />
            <TextField
              required
              name="companyName"
              variant="outlined"
              label="Название фирмы"
              onChange={formik.handleChange}
              value={formik.values.companyName}
            />
            <TextField
              required
              name="fullName"
              variant="outlined"
              label="ФИО перевозчика"
              onChange={formik.handleChange}
              value={formik.values.fullName}
            />
            <TextField
              required
              name="phone"
              type="tel"
              variant="outlined"
              label="Телефон"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            <TextField
              name="comment"
              multiline
              variant="outlined"
              label="Комментарий"
              onChange={formik.handleChange}
              value={formik.values.comment}
            />
            <TextField
              required
              type="number"
              name="ati"
              variant="outlined"
              label="ATI"
              onChange={formik.handleChange}
              value={formik.values.ati}
            />
            <div className={classes.buttonContainer}>
              <Button variant="contained" color="primary" type="submit">
                {id ? "Сохранить" : "Добавить"}
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleCancel}
              >
                Отмена
              </Button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default Order;
