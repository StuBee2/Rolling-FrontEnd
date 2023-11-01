import { BiDotsVerticalRounded } from "@react-icons/all-files/bi/BiDotsVerticalRounded";
import { USER_STORY_SETUP_ITEMS } from "@src/constants/User/user.constants";
import { useSetUpStory } from "@src/hooks/Story/useSetUpStory";
import { useRecoilState } from "recoil";
import { StoryModifiablePageAtom } from "@src/stores/story/story.store";

import * as S from "./style";

interface Props {
  storyId: string;
  companyId: string;
}

export default function StorySetUp({ ...attr }: Props) {
  const { isClickDots, setIsClickDots, hanldeStorySetUpClick } =
    useSetUpStory();
  const { storyId, companyId } = attr;

  const [currentPage, setCurrentPage] = useRecoilState(StoryModifiablePageAtom);

  return (
    <>
      {currentPage ? (
        <>
          {isClickDots && storyId !== null ? (
            <>
              {USER_STORY_SETUP_ITEMS.map((item) => (
                <S.Icon
                  key={item.id}
                  src={item.image}
                  onClick={() =>
                    hanldeStorySetUpClick(item.id, storyId, companyId)
                  }
                  alt="이미지 없음"
                />
              ))}
            </>
          ) : (
            <S.SetUpIconContainer>
              <BiDotsVerticalRounded
                size={25}
                cursor="pointer"
                onClick={() => setIsClickDots(true)}
              />
            </S.SetUpIconContainer>
          )}
        </>
      ) : (
        <>
          {isClickDots && storyId !== null ? (
            <>
              {USER_STORY_SETUP_ITEMS.slice(1).map((item) => (
                <S.Icon
                  key={item.id}
                  src={item.image}
                  onClick={() =>
                    hanldeStorySetUpClick(item.id, storyId, companyId)
                  }
                  alt="이미지 없음"
                />
              ))}
            </>
          ) : (
            <S.SetUpIconContainer>
              <BiDotsVerticalRounded
                size={25}
                cursor="pointer"
                onClick={() => setIsClickDots(true)}
              />
            </S.SetUpIconContainer>
          )}
        </>
      )}
    </>
  );
}
