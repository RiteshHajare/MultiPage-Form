import React, { useState } from "react";
import InputDiv from "../components/InputDiv";
import Progress from "../components/Progress";
import Radio from "../components/Radio";
import { useLocation, useNavigate } from "react-router-dom";

function ProfessionalDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const [ProfessionalDetailstForm, setProfessionalDetailstForm] = useState({
    company: "",
    title: "",
    id: "",
    department: "",
    startdate: "",
    salary: null,
    radio: "",
  });
  const [selectedOption, setSelectedOption] = useState(null);

  function handleChange(e, name) {
    setSelectedOption(name);
    setProfessionalDetailstForm((prev) => {
      return { ...prev, radio: e.target.name };
    });
  }

  function handleClick(e) {
    if (e.target.form.checkValidity()) {
      navigate("/paymentdetails", {
        state: {
          basicdetails: location.state.basicdetails,
          addressdetails: location.state.addressdetails,
          professionaldetails: ProfessionalDetailstForm,
        },
      });
    }
  }

  return (
    <form className=" px-8 sm:px-15 md:px-20 flex flex-col gap-5 py-8">
      <Progress progress={"75%"} />
      <h1 className="text-5xl text-center">Professional Details</h1>
      <InputDiv
        form={ProfessionalDetailstForm}
        setForm={setProfessionalDetailstForm}
        type={"text"}
        name={"company"}
        label={"Company name"}
      />
      <InputDiv
        form={ProfessionalDetailstForm}
        setForm={setProfessionalDetailstForm}
        type={"text"}
        name={"title"}
        label={"Title"}
      />
      <InputDiv
        form={ProfessionalDetailstForm}
        setForm={setProfessionalDetailstForm}
        type={"text"}
        name={"id"}
        label={"Employee ID"}
      />
      <InputDiv
        form={ProfessionalDetailstForm}
        setForm={setProfessionalDetailstForm}
        type={"text"}
        name={"department"}
        label={"Department"}
      />
      <InputDiv
        form={ProfessionalDetailstForm}
        setForm={setProfessionalDetailstForm}
        type={"date"}
        name={"startdate"}
        label={"Start date"}
      />
      <InputDiv
        form={ProfessionalDetailstForm}
        setForm={setProfessionalDetailstForm}
        type={"number"}
        name={"salary"}
        label={"Salary"}
      />

      <div className="flex flex-wrap gap-4">
        <span>Are you Legally elligible to work in India</span>
        <div className="flex gap-4 flex-wrap justify-end ">
          <Radio
            form={ProfessionalDetailstForm}
            handleChange={(e) => handleChange(e, "option1")}
            checked={selectedOption === "option1"}
            label={"Yes"}
            name={"yes"}
          />
          <Radio
            form={ProfessionalDetailstForm}
            handleChange={(e) => handleChange(e, "option2")}
            checked={selectedOption === "option2"}
            label={"No"}
            name={"no"}
          />
        </div>
      </div>

      <button
        onClick={handleClick}
        className="w-fit px-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Next
      </button>
    </form>
  );
}

export default ProfessionalDetails;
