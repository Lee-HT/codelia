import { api } from "API";
import ProfileImg from "components/User/ProfileImg/ProfileImg";
import { LoginContext } from "contexts/Login/LoginContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./MyProfile.css";

const Button = styled.button``;

const ErrorMessage = styled.div`
  margin-top: 10px;
  font-size: 14px;
  flex-basis: 100%;
  color: red;
`;

export default function MyProfile() {
  const { userInfo, setUserInfo } = useContext(LoginContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  async function updateUser(data, event) {
    event.preventDefault();
    const params = { ...data };
    console.log("data : " + JSON.stringify(params));

    try {
      const response = await api.patch("user", params);
      const { data } = response;
      if (response.status === 200) {
        setUserInfo("username",data.username)
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleNavigate() {
    navigate("/");
  }

  async function deleteAccount() {
    try {
      const response = await api.delete("user");
      const { data } = response;
      if (response.status === 200) {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="my-profile">
      <form onSubmit={handleSubmit(updateUser)}>
        <h3>프로필 수정</h3>
        <div className="profile-box">
          <div className="profile-img-area">
            <div className="img-area">
              <ProfileImg imgLink={userInfo.profileImg} />
            </div>
          </div>
          <div className="update-area">
            <div className="username-area">
              <div>유저명 : </div>
              <textarea
                className="username-text"
                rows={1}
                {...register("username", {
                  required: "이름을 입력 해주세요",
                  minLength: { value: 2, message: "2자 이상 이어야 합니다" },
                  maxLength: { value: 16, message: "16자 이하 이어야 합니다" },
                })}
                value={register.username}
              ></textarea>
              <ErrorMessage>{errors.username?.message}</ErrorMessage>
            </div>
            <div className="commit-btn">
              <Button type="submit">수정</Button>
              <Button onClick={handleNavigate}>취소</Button>
            </div>
          </div>
        </div>
        <div className="delete-btn">
          <Button onClick={deleteAccount}>회원 탈퇴</Button>
        </div>
      </form>
    </div>
  );
}
