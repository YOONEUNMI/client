import React from "react";
import "./App.css";
import {Layout} from "./component";
import {useSelector} from "react-redux";
import {RootState} from "./service/store";
import {UserState} from "./service/store/user/userSlice";
import {Login} from "./component/login";

function App() {
  const {userInfo} = useSelector(
    (state: RootState) =>
      ({
        userInfo: state.userInfo,
      } as {userInfo: UserState})
  );

  return (
    <div className="App">
      {userInfo.userId.length > 0 ? <Layout /> : <Login />}
    </div>
  );
}

export default App;
