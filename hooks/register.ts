"use client";
import { useForm } from "react-hook-form";
import { RegisterSchemaType, RegisterSchema } from "@/zod/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

//adding the body type
type AddUser = {
  body: RegisterSchemaType;
};
const register = () => {
  //muteated function to create new user
  const adduser = async ({ body }: AddUser) => {
    const response = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then(console.log);
  };
  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const QueryClient = useQueryClient();
  const mutatenew = useMutation({
    mutationFn:adduser,
    onSuccess:()=>{
        QueryClient.invalidateQueries({queryKey:["userdata"]});
        form.reset();
        toast.success('user added succefuly')

    },
    onError:()=>{
        toast.error('error adding user')
    },
  });
  const OnSubmit=(data : RegisterSchemaType)=> {
    mutatenew.mutate ({
        body :{
            name: data.name,
            email : data.email,
            password :data.password,
        },
    });
    form.reset();
  };
  const OnCancel=()=>{
    form.reset();
  };
  return{
    form,
    OnSubmit,
    OnCancel
  }
};

export default register;
