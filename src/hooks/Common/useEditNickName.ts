import { useState } from "react";
import { usePatchMyNickNameMutation } from "@src/queries/Member/Member.query";
import { useQueryClient } from "react-query";
import { QUERY_KEYS } from "@src/queries/queryKey";
import { AxiosError } from "axios";

export const useEditNickName = (nickName: string) => {
  const patchNickNameMutation = usePatchMyNickNameMutation();
  const [isEditNickName, setIsEditNickName] = useState(false);
  const [editNickName, setEditNickName] = useState<string>(nickName);
  const queryClient = useQueryClient();

  const handleEditNickNameQuestion = () => {
    const answer = window.confirm("닉네임을 수정하시겠습니까?");
    if (answer) {
      setIsEditNickName(true);
    }
  };

  const handleEditNickNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditNickName(e.target.value);
  };

  const hanldeEditNickNameCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const answer = window.confirm("닉네임 수정을 취소하시겠습니까?");
    if (answer) {
      setIsEditNickName(false);
      setEditNickName(nickName);
    }
  };

  const handleNickNameSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editNickName) {
      return window.alert("닉네임을 입력해주세요.");
    }

    if (nickName === editNickName) {
      return window.alert("닉네임을 수정해주세요.");
    }

    patchNickNameMutation.mutate(
      { nickName: editNickName },
      {
        onSuccess: () => {
          window.alert("닉네임이 수정되었습니다");
          queryClient.invalidateQueries(QUERY_KEYS.member.getMyMember);
          setIsEditNickName(false);
        },
        onError: (error: unknown) => {
          const axiosError = error as AxiosError;
          if (axiosError.response?.status === 500) {
            window.alert("닉네임이 중복되었습니다.");
          }
        },
      }
    );
  };

  return {
    handleEditNickNameQuestion,
    handleEditNickNameChange,
    handleNickNameSubmit,
    hanldeEditNickNameCancel,
    isEditNickName,
    editNickName,
  };
};
