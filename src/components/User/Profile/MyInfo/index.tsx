import { AiFillGithub } from "react-icons/ai";
import { Explain, Title } from "../style";
import * as S from "./style";
import { MemberType } from "../../../../types/member.type";

interface Props {
  data: MemberType;
}

export default function MyInfo({ data }: Props) {
  return (
    <S.MyInfoContainer>
      <S.BasicInfoContainer>
        <Title>
          <div style={{ fontSize: "25px", color: "#000" }}>기본 정보</div>
          <Explain>
            롤링에서 제공되는 맞춤 콘텐츠의 기본 데이터로 활용됩니다
          </Explain>
        </Title>
        <S.GitUserContainer>
          <S.GitUserLogo src={data?.socialDetails.imageUrl} />
          <S.GitUserInfo>
            <S.GitUserName>{data?.socialDetails.name}</S.GitUserName>
            <S.GitUserEmail>{data?.socialDetails.email}</S.GitUserEmail>
          </S.GitUserInfo>
        </S.GitUserContainer>
      </S.BasicInfoContainer>

      <S.GitContainer>
        <S.GitLink
          onClick={() =>
            window.open(
              `https://github.com/${data?.socialDetails.socialId}`,
              "_blank"
            )
          }
        >
          <AiFillGithub size={25} />
          <div style={{ fontWeight: "500" }}>
            {data?.socialDetails.socialId}
          </div>
        </S.GitLink>
        <S.GitLoginType>
          {data?.socialDetails.loginType} 로그인 중
        </S.GitLoginType>
      </S.GitContainer>
    </S.MyInfoContainer>
  );
}
