import React, { useState } from "react";
import Progress from "../components/Progress";
import InputDiv from "../components/InputDiv";
import { useNavigate } from "react-router-dom";

function BasicDetails() {
  const navigate = useNavigate();
  const [basicForm, setBasicForm] = useState({
    firstname: "",
    lastname: "",
    phno: null,
    dob: "",
    email: "",
    gender: "",
    nationality: "",
  });

  function handleClick(e) {
    if (e.target.form.checkValidity()) {
      navigate("/address", { state: basicForm });
    }
  }

  return (
    <form className=" px-8 sm:px-15 md:px-20 flex flex-col gap-5 py-8">
      <Progress progress={"1%"} />
      <h1 className="text-5xl text-center">Basic Details</h1>
      <div className="grid md:grid-cols-2 md:gap-6">
        <InputDiv
          form={basicForm}
          setForm={setBasicForm}
          type={"text"}
          name={"firstname"}
          label={"First name"}
        />
        <InputDiv
          form={basicForm}
          setForm={setBasicForm}
          type={"text"}
          name={"lastname"}
          label={"Last name"}
        />
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <InputDiv
          form={basicForm}
          setForm={setBasicForm}
          type={"text"}
          name={"phno"}
          label={"Phone number (12345-67890)"}
        />
        <InputDiv
          form={basicForm}
          setForm={setBasicForm}
          type={"date"}
          name={"dob"}
          label={"Birth date"}
        />
      </div>
      <InputDiv
        form={basicForm}
        setForm={setBasicForm}
        type={"email"}
        name={"email"}
        label={"Email"}
      />

      <InputDiv
        form={basicForm}
        setForm={setBasicForm}
        type={"text"}
        name={"gender"}
        label={"Gender"}
      />
      <InputDiv
        form={basicForm}
        setForm={setBasicForm}
        type={"text"}
        name={"nationality"}
        label={"Nationality"}
      />

      <button
        onClick={handleClick}
        className="w-fit px-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Next
      </button>
    </form>
  );
}

export default BasicDetails;
