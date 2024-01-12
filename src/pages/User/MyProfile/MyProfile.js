import { api } from "API";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import "./MyProfile.css";

const Button = styled.button`
`;

export default function MyProfile() {
  const { register, handleSubmit, reset } = useForm();

  async function updateUser(data, event) {
    event.preventDefault();
    const params = { ...data };
    console.log("data : " + JSON.stringify(params));

    try {
      const response = await api.put("user", params);
      const { data } = response;
      if (response.status === 200) {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
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
          <div className="profile-img"></div>
          <div className="update-area">
            <textarea
              className="username"
              rows={1}
              {...register("username", {
                minLength: { value: 2, message: "2자 이상 이어야 합니다" },
                maxLength: { value: 24, message: "24자 이하 이어야 합니다" },
              })}
              value={register.username}
            ></textarea>
          </div>
        </div>
        <div className="delete-account">
          <Button onClick={deleteAccount}>회원 탈퇴</Button>
        </div>
      </form>
    </div>
  );
}
