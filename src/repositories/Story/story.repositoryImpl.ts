import { customAxios, rollingAxios } from "@src/libs/Axios/customAxios";
import {
  StoryInfiniteScrollListType,
  StoryInfoIdInfiniteScrollListType,
  StoryInfoIdType,
  StoryMyStatusResponse,
  StoryPostResponse,
} from "@src/types/Story/story.type";
import { CommonIdParam, CommonPageParam } from "../common.param";
import { StoryParam, StoryRepository } from "./story.repository";

class StoryRepositoryImpl implements StoryRepository {
  public async getMyStoryList({
    page,
  }: CommonPageParam): Promise<StoryInfiniteScrollListType> {
    const { data } = await rollingAxios.get(`/story/my?page=${page}&size=10`);
    return { ...data, nextPage: page + 1 };
  }

  public async getListStoryMemberId(
    { id }: CommonIdParam,
    { page }: CommonPageParam
  ): Promise<StoryInfiniteScrollListType> {
    const { data } = await rollingAxios.get(
      `/story/list/member/${id}?page=${page}&size=10`
    );
    return { ...data, nextPage: page + 1 };
  }

  public async getListStoryCompanyId(
    { id }: CommonIdParam,
    { page }: CommonPageParam
  ): Promise<StoryInfoIdInfiniteScrollListType> {
    const { data } = await customAxios.get(
      `/story/list/company/${id}?page=${page}&size=10`
    );
    return { ...data, nextPage: page + 1 };
  }

  public async getStoryInfoId({
    id,
  }: CommonIdParam): Promise<StoryInfoIdType> {
    const { data } = await customAxios.get(`/story/info/${id}`);
    return data;
  }

  public async getStoryMyStatus(): Promise<StoryMyStatusResponse> {
    const { data } = await rollingAxios.get("/story/my/status");
    return data;
  }

  public async postStory(
    StoryInfo: StoryParam
  ): Promise<StoryPostResponse> {
    const { data } = await rollingAxios.post("/story", StoryInfo);
    return data;
  }

  public async deleteMyStory(StoryId: string): Promise<void> {
    await rollingAxios.delete(`/story/${StoryId}`);
  }
}

export default new StoryRepositoryImpl();
