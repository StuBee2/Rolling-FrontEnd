import * as S from "./header.style";
import { useNavigate } from "react-router-dom";
import { CATEGROY_ITEMS } from "../../../constants/Home/Home.constants";
import LogoImg from "../../../assets/Logo.png";
import Token from "../../../libs/Token/Token";
import { ACCESS_KEY } from "../../../constants/Auth/auth.constant";
import { useLogging } from "../../../hooks/Log/useLogging";
import { LOG_ITEM } from "../../../constants/Log/log.constants";

export default function Header() {
  const navigate = useNavigate();
  const { handleLoggingClick } = useLogging();
  return (
    <S.Header>
      <S.Logo onClick={() => navigate("/")}>
        <img src={LogoImg} alt="" />
        <div>Rolling</div>
      </S.Logo>

      <div>
        {CATEGROY_ITEMS.map((category) => {
          return (
            <div key={category.id}>
              {Token.getToken(ACCESS_KEY)
                ? category.id !== 1 && (
                    <>
                      {category.id === 4 ? (
                        <S.CategoryLink
                          onClick={() => {
                            Token.clearToken();
                            navigate("/");
                          }}
                        >
                          {category.categoryName}
                        </S.CategoryLink>
                      ) : (
                        <S.CategoryLink
                          onClick={() =>
                            handleLoggingClick(LOG_ITEM[category.id])
                          }
                        >
                          {category.categoryName}
                        </S.CategoryLink>
                      )}
                    </>
                  )
                : category.id === 1 && (
                    <S.CategoryLink onClick={() => navigate("/login")}>
                      {category.categoryName}
                    </S.CategoryLink>
                  )}
            </div>
          );
        })}
      </div>
    </S.Header>
  );
}
