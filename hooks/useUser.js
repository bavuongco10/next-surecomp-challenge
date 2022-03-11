import { loginUser } from "atoms/userState";

import { useRecoilState } from "recoil";

const useUser = () => {
  const [loginUserData, setLoginUserData] = useRecoilState(loginUser);

  const { data } = loginUserData;
  const setLoginUser = (newData) => setLoginUserData({ data: newData });

  return { data, setLoginUser };
};

export default useUser;
