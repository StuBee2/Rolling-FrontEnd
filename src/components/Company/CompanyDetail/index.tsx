import { CompanyReviewRegistModalAtom } from "@src/stores/company/company.store";
import { ReviewCompanyInfoType } from "@src/types/Review/review.type";
import { useAuthTopScroll } from "@stubee2/stubee2-rolling-util";
import { Suspense, useState } from "react";
import { useRecoilState } from "recoil";
import ErrorBoundary from "../../Common/ErrorBoundary";
import Portal from "../../Common/Portal";
import CompanyDetailSkeleton from "../../Common/Skeleton/CompanyDetail";
import CompanyDetailItem from "./CompanyDetailItem";
import CompanyReviewRegistModal from "./CompanyReviewRegistModal";
import * as S from "./style";

interface Props {
  id: string;
}

export default function CompanyDetail({ id }: Props) {
  /** 리뷰등록 모달에서 쓰이는 useState */
  const [reviewCompanyInfo, setReviewCompanyInfo] =
    useState<ReviewCompanyInfoType>({
      companyId: "",
      companyName: "",
      companyLogo: "",
    });

  const [companyReviewRegisterModal, setCompanyReviewRegisterModal] =
    useRecoilState(CompanyReviewRegistModalAtom);

  useAuthTopScroll();
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <ErrorBoundary fallback={<>회사정보를 갖고오지 못했습니다.</>}>
            <Suspense fallback={<CompanyDetailSkeleton />}>
              <CompanyDetailItem
                id={id}
                setReviewCompanyInfo={setReviewCompanyInfo}
              />
            </Suspense>
          </ErrorBoundary>
        </S.Wrapper>
      </S.Container>
      {companyReviewRegisterModal && (
        <Portal>
          <CompanyReviewRegistModal
            setReviewModal={setCompanyReviewRegisterModal}
            reviewCompanyInfo={reviewCompanyInfo}
          />
        </Portal>
      )}
    </>
  );
}
