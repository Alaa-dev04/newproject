"use client";
import { TypeLoginSchema, LoginSchema } from "@/zod/loginZod";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type Loginuser = {
  body: TypeLoginSchema;
};

const loginUser = async ({ body }: Loginuser) => {
  const response = await fetch("https://dummyjson.com/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then((res) => res.json());
};

const useLogin = () => {
  const queryClient = useQueryClient();

  const mutatelogin = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userlogin"] });
      form.reset();
      toast.success("Login successful");
    },
    onError: () => {
      toast.error("error login ");
    },
  });

  const form = useForm<TypeLoginSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      password: "",
      username: "",
    },
  });
  const OnSubmit = (data: TypeLoginSchema) => {
    (mutatelogin.mutate({
      body: {
        username: data.username,
        password: data.password,
      },
    }),
      form.reset());
  };
  const OnCancel = () => {
    form.reset();
  };
  return { form, OnSubmit, OnCancel };
};

export default useLogin;
