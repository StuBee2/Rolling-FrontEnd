import User from "@src/components/User";
import Review from "@src/components/User/Review";
import Profile from "@src/components/User/Profile";
import { jwtDecoding } from "@src/utils/Auth/jwtDecoding";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface Props {
  page: number;
}

export default function UserPage({ page }: Props) {
  const memberRole = jwtDecoding("authority");
  const navigate = useNavigate();
  return (
    <User>
      {page === 0 && <Profile />}
      {page === 1 &&
        (memberRole === "MEMBER" ? (
          <Review />
        ) : (
          <AlumniCheck>
            <p>동문인증이 필요한 기능입니다.</p>
            <Authenticate onClick={() => navigate("/graduate/certification")}>
              인증하러 가기
            </Authenticate>
          </AlumniCheck>
        ))}
    </User>
  );
}

const AlumniCheck = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 10px;
  font-size: 18px;
`;

const Authenticate = styled.p`
  color: rgba(72, 105, 246, 1);
  cursor: pointer;
  &:active {
    color: rgba(86, 103, 193, 1);
  }
`;
