import { api } from "API";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import "./MyProfile.css";
import ProfileImg from "components/User/ProfileImg/ProfileImg";
import { useNavigate } from "react-router-dom";

const Button = styled.button``;

export default function MyProfile() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  async function updateUser(data, event) {
    event.preventDefault();
    const params = { ...data };
    console.log("data : " + JSON.stringify(params));

    try {
      const response = await api.patch("user", params);
      const { data } = response;
      if (response.status === 200) {
        console.log(data);
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
              <ProfileImg imgLink="https://images.pexels.com/photos/4310835/pexels-photo-4310835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            </div>
          </div>
          <div className="update-area">
            <div className="username-area">
              <div>유저명 : </div>
              <textarea
                className="username-text"
                rows={1}
                {...register("username", {
                  required: true,
                  minLength: { value: 2, message: "2자 이상 이어야 합니다" },
                  maxLength: { value: 16, message: "16자 이하 이어야 합니다" },
                })}
                value={register.username}
              ></textarea>
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
