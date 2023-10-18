import { useRegistReview } from "@src/hooks/Reivew/useReigstReview";
import { searchPosition } from "@src/utils/Position/searchPosition";
import { Button, TextInput } from "@stubee2/stubee2-rolling-ui";
import PositionList from "./PositonList";
import regist from "@src/assets/images/Review/regist.svg";
import * as S from "./style";
import RegistStarGrades from "./RegistStarGrades";
import { Dispatch, SetStateAction } from "react";

interface Props {
  companyId: string;
  showPositionList: boolean;
  setShowPositionList: Dispatch<SetStateAction<boolean>>;
}

export default function Form({ ...attr }: Props) {
  const { ...hooks } = useRegistReview(attr.companyId);
  const positionList = searchPosition(hooks.reviewContents.position.trim());

  return (
    <S.Container onSubmit={hooks.handleCompanyReviewSubmit}>
      <S.InputContainer>
        <S.InputTitle>
          <p>포지션</p>
          <span>*</span>
        </S.InputTitle>
        <TextInput
          value={hooks.reviewContents.position}
          customStyle={S.InputStyle}
          name="position"
          autocomplete="off"
          placeholder="포지션을 입력해주세요. ex) 프론트엔드 개발자..."
          handleChange={(e) => {
            hooks.handleCompanyReviewChange(e);
            attr.setShowPositionList(true);
          }}
        />
        {attr.showPositionList && // 입력할 때 등장, 포지션 선택하면 사라짐
          positionList.length > 0 && ( //내가 입력한 포지션이 포지션리스트에 있을때 등장
            <PositionList
              positionList={positionList}
              setReviewContents={hooks.setReviewContents}
              setShowPositionList={attr.setShowPositionList}
            />
          )}
      </S.InputContainer>

      <S.InputContainer>
        <S.InputTitle>
          <p>입사경로</p>
          <span>*</span>
        </S.InputTitle>
        <TextInput
          value={hooks.reviewContents.careerPath}
          customStyle={S.InputStyle}
          name="careerPath"
          autocomplete="off"
          handleChange={hooks.handleCompanyReviewChange}
          placeholder="입사경로를 입력해주세요."
        />
      </S.InputContainer>

      <S.CompanySatisfaction>
        <S.InputTitle>
          <p>회사만족도</p>
          <span>*</span>
        </S.InputTitle>

        <RegistStarGrades
          reviewStarGrade={hooks.reviewStarGrade}
          handleStarGradeChange={hooks.handleStarGradeChange}
        />
      </S.CompanySatisfaction>

      <S.TextAreaContainer>
        <S.InputTitle>
          <p>리뷰내용</p>
          <span>*</span>
        </S.InputTitle>
        <TextInput
          textType="textarea"
          value={hooks.reviewContents.content}
          customStyle={S.TextAreaStyle}
          handleChange={hooks.handleCompanyReviewChange}
          name="content"
          placeholder="회사에 대한 리뷰내용을 작성해주세요."
        />
        <S.ReviewButtonContainer>
          <Button
            type="submit"
            ButtonType="custom"
            customStyle={S.RegistReviewButton}
          >
            <p>리뷰등록</p>
            <img src={regist} alt="이미지 없음" />
          </Button>
        </S.ReviewButtonContainer>
      </S.TextAreaContainer>
    </S.Container>
  );
}
