import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./style";
import { USER_ITEMS } from "../../../constants/User/user.constants";
import { useLogout } from "../../../hooks/Auth/useLogout";
import { useGetMyInfoQuery } from "../../../queries/Member/Member.query";
import { MyMemberInfo } from "../../../store/member/member.store";
import { useSetRecoilState } from "recoil";
import { useEffect } from "react";
import EditNickname from "./EditNickname";

export default function Nav() {
  const navigate = useNavigate();
  const { handleLogout } = useLogout();
  const { pathname } = useLocation();
  const { data: myInfo } = useGetMyInfoQuery();

  const setMyMemberInfo = useSetRecoilState(MyMemberInfo);

  useEffect(() => {
    setMyMemberInfo(myInfo!!);
  }, [myInfo]);

  return (
    <S.UserNavBar>
      <S.MemberInfoContainer>
        <S.UserImg src={myInfo?.socialDetails.imageUrl} />
        <S.UserName>{myInfo?.socialDetails.name}</S.UserName>
        <S.UserNickName>
          <EditNickname nickName={myInfo?.memberDetails.nickName!!} />
        </S.UserNickName>
        <S.UserEmail>{myInfo?.socialDetails.email}</S.UserEmail>
      </S.MemberInfoContainer>

      <S.PageSelectContainer>
        <S.PageSelect>
          {USER_ITEMS.map((item) => (
            <S.PageSelectItem
              key={item.id}
              onClick={() => navigate(item.link)}
              isSelect={pathname === item.link}
            >
              <img src={item.image} alt="이미지 없음" />
              <p>{item.title}</p>
            </S.PageSelectItem>
          ))}
        </S.PageSelect>
        <S.Logout onClick={handleLogout}>🫥 로그아웃</S.Logout>
      </S.PageSelectContainer>
    </S.UserNavBar>
  );
}
