import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  const [idInput,setIdInput]=useState('')
  const [pwInput,setPwInput]=useState('')
  const [checkPw,setCheckPw]=useState(false)
  const submitBtn=(e)=>{
    e.preventDefault();
    console.log(e);
  }
  const idInputHandler=(e)=>{
    setIdInput(e.target.value)
  }
  const passwordInputHandler=(e)=>{
    setPwInput(e.target.value)
  }
  const checkPassword=(e)=>{
    if(e.target.value===pwInput){
      setCheckPw(true)
    }
    setCheckPw(false)
  }
  const nickNameInput=(e)=>{
    console.log(e);
  }
      
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="Id">아이디</label>
          <input type="text" placeholder="Id" {...register("Id", {required: true, maxLength: 80})} />
          <label htmlFor="Id">비밀번호</label>
          <input type="password" placeholder="Password" {...register("Password", {})} />
          <label htmlFor="Id">비밀번호 확인</label>
          <input type="password" placeholder="CheckPassWord" {...register("CheckPassWord", {})} />
          <label htmlFor="Id">이메일</label>
          <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
          <label htmlFor="Id">닉네임</label>
          <input type="text" placeholder="NickName" {...register("NickName", {required: true, maxLength: 100})} />
          <input type="submit" />
        </form>
      );
}
export default Register;