import { combineReducers } from 'redux';
import authReducer from './components/Login/authReducer';
import loginReducer from './components/Login/loginReducer';
import homeReducer from './components/Home/reducer';
import joinReducer from './components/Join/reducer';
import gameReducer from './components/Game/reducers';
import errorReducer from './components/Errors/reducer';

export default combineReducers({
  auth: authReducer,
  login: loginReducer,
  home: homeReducer,
  join: joinReducer,
  game: gameReducer,
  error: errorReducer
});
