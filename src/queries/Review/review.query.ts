import {
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseQueryOptions,
  UseQueryResult,
  useInfiniteQuery,
  useMutation,
  useQuery,
} from "react-query";
import ReviewRepositoryImpl from "@src/repositories/Review/review.repositoryImpl";
import {
  ReviewInfiniteScrollListType,
  ReviewInfoIdInfiniteScrollListType,
  ReviewInfoIdType,
  ReviewMyStatusResponse,
} from "@src/types/Review/review.type";
import { AxiosError } from "axios";
import { CommonIdParam } from "@src/repositories/common.param";
import { QUERY_KEYS } from "../queryKey";

import { ReviewParam } from "@src/repositories/Review/review.repository";

export const useGetMyReviewQuery = (
  options?: UseInfiniteQueryOptions<
    ReviewInfiniteScrollListType,
    AxiosError,
    ReviewInfiniteScrollListType,
    ReviewInfiniteScrollListType,
    string
  >
): UseInfiniteQueryResult<ReviewInfiniteScrollListType, AxiosError> =>
  useInfiniteQuery(
    QUERY_KEYS.review.getMyReview,
    ({ pageParam = 1 }) =>
      ReviewRepositoryImpl.getMyReviewList({ page: pageParam }),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );

export const useGetReviewListMemberIdQuery = (
  { id }: CommonIdParam,
  options?: UseInfiniteQueryOptions<
    ReviewInfiniteScrollListType,
    AxiosError,
    ReviewInfiniteScrollListType,
    ReviewInfiniteScrollListType,
    string[]
  >
): UseInfiniteQueryResult<ReviewInfiniteScrollListType, AxiosError> =>
  useInfiniteQuery(
    QUERY_KEYS.review.getReviewListMemberId(id),
    ({ pageParam = 1 }) =>
      ReviewRepositoryImpl.getListReviewMemberId({ id }, { page: pageParam }),
    {
      enabled: !!id,
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );

export const useGetReviewListCompanyIdQuery = (
  { id }: CommonIdParam,
  options?: UseInfiniteQueryOptions<
    ReviewInfoIdInfiniteScrollListType,
    AxiosError,
    ReviewInfoIdInfiniteScrollListType,
    ReviewInfoIdInfiniteScrollListType,
    string[]
  >
): UseInfiniteQueryResult<ReviewInfoIdInfiniteScrollListType, AxiosError> =>
  useInfiniteQuery(
    QUERY_KEYS.review.getReviewListCompanyId(id),
    ({ pageParam = 1 }) =>
      ReviewRepositoryImpl.getListReviewCompanyId({ id }, { page: pageParam }),
    {
      ...options,
      enabled: !!id,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );

export const useGetReviewInfoIdQuery = (
  { id }: CommonIdParam,
  options?: UseQueryOptions<
    ReviewInfoIdType,
    AxiosError,
    ReviewInfoIdType,
    string[]
  >
): UseQueryResult<ReviewInfoIdType, AxiosError> =>
  useQuery(
    QUERY_KEYS.review.getReviewInfoId(id),
    () => ReviewRepositoryImpl.getReviewInfoId({ id }),
    {
      enabled: !!id,
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const useGetReviewMyStatusQuery = (
  options?: UseQueryOptions<
    ReviewMyStatusResponse,
    AxiosError,
    ReviewMyStatusResponse,
    string
  >
): UseQueryResult<ReviewMyStatusResponse, AxiosError> =>
  useQuery(
    QUERY_KEYS.review.getReviewMyStatus,
    () => ReviewRepositoryImpl.getReviewMyStatus(),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const usePostReviewMutation = () => {
  const mutation = useMutation((reviewInfo: ReviewParam) =>
    ReviewRepositoryImpl.postReview(reviewInfo)
  );
  return mutation;
};

export const useDeleteMyReviewMutation = () => {
  const mutation = useMutation((reviewId: string) =>
    ReviewRepositoryImpl.deleteMyReview(reviewId)
  );
  return mutation;
};
