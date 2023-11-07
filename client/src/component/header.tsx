import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {styled} from "styled-components";
import {RootState} from "../service/store";
import {UserState, setUserId} from "../service/store/user/userSlice";

import {Button} from "@chakra-ui/react";
import {useDispatch} from "react-redux";

const HeaderDiv = styled.div`
  display: flex;
  height: 50px;
  font-size: 20px;
  justify-content: space-between;
  border-bottom: 1px solid #222;
  a {
    margin-right: 10px;
  }
`;

export const Header = (): JSX.Element => {
  const dispatch = useDispatch();
  const {userInfo} = useSelector(
    (state: RootState) =>
      ({
        userInfo: state.userInfo,
      } as {userInfo: UserState})
  );

  return (
    <HeaderDiv>
      <div>
        <Link to="/">page 이동</Link>
        <Link to="/page2">page2 이동</Link>
      </div>
      <div>
        {userInfo.userId} 님{" "}
        <Button
          colorScheme="blue"
          onClick={() => {
            dispatch(setUserId(""));
          }}
        >
          로그아웃
        </Button>
      </div>
    </HeaderDiv>
  );
};
