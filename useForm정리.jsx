import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register, // input 의 변경 감지
    handleSubmit, // form 의 submit 이벤트 발생시 호출
    watch, // 특정 필드의 값을 실시간 관찰
    formState: { errors },
  } = useForm();

  const userNameRegister = register("username");

  const onValid = (data) => {
    console.log("유효한 데이터", data);
  };

  const onInValid = (err) => {
    console.log("유효하지 않은 데이터", err);
    // 폼 내부에 작성한 유효성 검사가 실패했을 때의 코드 작성
  };

  return (
    <form
      style={{ border: "1px solid salmon" }}
      onSubmit={handleSubmit(onValid, onInValid)}
    >
      <input
        type="text"
        placeholder="username"
        {...register("username", {
          required: "이름을 입력해주세요",
          minLength: {
            message: "이름은 최소 두글자 이상으로 입력해주세요.",
            value: 2, // minLength
          },
        })}
      />

      {errors.username?.message}
      <br />

      <input
        type="email"
        placeholder="email(gmail)"
        {...register("email", {
          required: "이메일을 입력해주세요.",
          validate: {
            useGmail: (value) => {
              // 인자로 들어오는 value는 input.value
              return (
                value.includes("gmail.com") || "gmail로만 가입 가능합니다."
              );
            },
          },
        })}
      />

      {errors.email?.message}
      <br />

      <input
        type="password"
        placeholder="password"
        {...register("password", {
          required: "비밀번호를 입력하세요",
          pattern: {
            value:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,20}$/,
            message:
              "비밀번호는 8~20자, 대문자/소문자/숫자/특수문자를 포함해야 합니다.",
          },
        })}
      />
      <br />

      <button type="submit">submit</button>
    </form>
  );
}
