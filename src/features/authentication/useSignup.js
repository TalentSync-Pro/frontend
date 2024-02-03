/* eslint-disable no-unused-vars */
import { useMutation } from "react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address"
      );
    },
    onError: (error) => {
      // console.log("i am", String(error), "type is ,", typeof error);
      // console.log("modified", typeof error.toString());
      toast.error(error.toString());
    },
  });
  return { signup, isLoading };
}
