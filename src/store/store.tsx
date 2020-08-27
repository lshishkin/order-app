import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import { composeEnhancers, middleware, sagaMiddleware } from "./middleware";
import { rootSaga } from "./rootSaga";

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export { store };
