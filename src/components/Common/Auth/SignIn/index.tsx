import * as S from "./style";
import { useCloseModal } from "@stubee2/stubee2-rolling-util";
import { useSetRecoilState } from "recoil";
import { SignInModalAtom } from "@src/stores/auth/auth.store";
import wave from "@src/assets/images/Auth/wave.svg";
import close from "@src/assets/images/Auth/close.svg";
import github from "@src/assets/images/Auth/github.svg";
import { gitSignInUrl } from "@src/constants/Auth/auth.constant";
import { turnOffModal } from "@src/utils/Modal/turnOnOffModal";

export default function SignIn() {
  const setSignInModal = useSetRecoilState(SignInModalAtom);
  useCloseModal(setSignInModal);
  return (
    <S.Container onClick={() => turnOffModal(setSignInModal)}>
      <S.Wrapper onClick={(e) => e.stopPropagation()}>
        <S.Close
          src={close}
          onClick={() => turnOffModal(setSignInModal)}
          alt="이미지 없음"
        />

        <S.Start>시작하기</S.Start>

        <S.Explain>
          <p>지금 로그인하고 맞춤 롤링 콘텐츠를 활성화하세요.</p>
          <p>수 많은 선배들의 이야기가 롤링에서 펼쳐집니다.</p>
        </S.Explain>

        <S.SignInButton onClick={() => (window.location.href = gitSignInUrl)}>
          <img src={github} alt="이미지 없음" />
          <p>Github 간편 로그인</p>
        </S.SignInButton>

        <S.Wave src={wave} alt="이미지 없음" />
      </S.Wrapper>
    </S.Container>
  );
}
