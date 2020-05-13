import { createStore, combineReducers, applyMiddleware, Middleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';

import { menuReducer } from './features/menu/store/reducers';
import { contentReducer } from './features/content/store/reducers';
import { headerReducer } from './features/header/store/reducers';

const rootReducer = combineReducers({
  menu: menuReducer,
  content: contentReducer,
  header: headerReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares: Middleware[] = [thunkMiddleware];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }

  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
