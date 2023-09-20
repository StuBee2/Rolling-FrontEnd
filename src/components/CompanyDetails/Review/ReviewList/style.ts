import styled from "styled-components";

export const CompanyReviewListContainer = styled.div`
  margin-top: 13%;
  margin-left: 8%;
  @media screen and (max-width: 1393px) {
    margin-left: 9%;
  }
  @media screen and (max-width: 1221px) {
    margin-left: 4%;
  }
  @media screen and (max-width: 1170px) {
    margin-left: 5%;
  }
  @media screen and (max-width: 1045px) {
    margin-left: 7%;
  }
  @media screen and (max-width: 800px) {
    margin-left: 10%;
  }
  @media screen and (max-width: 670px) {
    margin-left: 12%;
  }
  @media screen and (max-width: 610px) {
    margin-left: 17%;
  }
`;

export const CompanyReviewListTitleBox = styled.div`
  display: flex;
`;

export const CompanyReviewListTitle = styled.h1`
  color: #090a0a;
  font-family: "Pretendard";
  font-size: 2rem;
  font-weight: 700;
  margin-right: 1.5%;
`;
export const CompanyReviewListCount = styled.h1`
  color: #4869f6;
  font-family: "Pretendard";
  font-size: 2rem;
  font-weight: 700;
`;

export const CompanyRevieBox = styled.div`
  margin-top: 5%;
  width: 1000px;
  height: 200px;
  border-radius: 10px;
  background: #f7f9fa;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 30px 30px 30px 30px;
  @media screen and (max-width: 1393px) {
    width: 900px;
    height: 100%;
  }
  @media screen and (max-width: 1221px) {
    width: 850px;
    height: 100%;
  }
  @media screen and (max-width: 1170px) {
    width: 750px;
    height: 100%;
  }
  @media screen and (max-width: 1045px) {
    width: 700px;
    height: 100%;
  }
  @media screen and (max-width: 800px) {
    width: 580px;
    height: 100%;
  }
  @media screen and (max-width: 670px) {
    width: 500px;
    height: 100%;
  }
  @media screen and (max-width: 610px) {
    width: 400px;
    height: 100%;
  }
`;

export const RevieMemberProfileImage = styled.img`
  width: 65px;
  height: 65px;
  background-color: #e0e0e0;
  border-radius: 100%;
`;

export const ReviewMemberName = styled.p`
  color: #090a0a;
  font-family: "Pretendard";
  font-size: 1rem;
  font-weight: 400;
  margin-top: 2%;
  margin-left: 2%;
`;

export const MemberCompanyReviewContent = styled.pre`
  color: #72777a;
  font-family: "Pretendard";
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.5;
  margin-left: 200px;
  margin-top: 12px;

  @media screen and (max-width: 1221px) {
    display: none;
  }
`;

export const MemberCompanyContentBox = styled.div`
  margin-top: -40px;
  margin-left: 10px;
  @media screen and (max-width: 1221px) {
    display: none;
  }
`;

export const MemberCompanyContentTitle = styled.h1`
  color: #61677e;
  font-family: "Pretendard";
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 2.5;
`;

export const MemberCompanyContentDetail = styled.p`
  color: #999898;
  font-family: "Pretendard";
  font-size: 1rem;
  font-weight: 400;
  line-height: 2.3;
  margin-left: 3px;
`;
