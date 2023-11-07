import React, {useState} from "react";
import {styled} from "styled-components";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Card,
  CardBody,
  Button,
} from "@chakra-ui/react";
import {useDispatch} from "react-redux";
import {setUserId} from "../../service/store/user/userSlice";

const LoginWrap = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ButtonBox = styled.div`
  text-align: center;
  margin-top: 10px;
`;

export const Login = (): JSX.Element => {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  return (
    <LoginWrap>
      <Card>
        <CardBody>
          <FormControl>
            <FormLabel>ID</FormLabel>
            <Input
              type="email"
              onChange={e => {
                setId(e.target.value);
              }}
            />
            <FormHelperText>
              임시이기 때문에 아무값이나 입력후 버튼을 눌러주시면 redux에
              해당값이 저장됩니다.
            </FormHelperText>
            <ButtonBox>
              <Button
                colorScheme="blue"
                onClick={() => {
                  dispatch(setUserId(id));
                }}
              >
                로그인
              </Button>
            </ButtonBox>
          </FormControl>
        </CardBody>
      </Card>
    </LoginWrap>
  );
};
