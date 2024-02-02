import React, { useState } from "react";
import InputDiv from "../components/InputDiv";
import Progress from "../components/Progress";
import { useLocation, useNavigate } from "react-router-dom";

function Address() {
  const location = useLocation();
  const navigate = useNavigate();
  const [addressForm, setAddressForm] = useState({
    country: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipcode: null,
  });

  function handleClick(e) {
    if (e.target.form.checkValidity()) {
      navigate("/professionaldetails", {
        state: { basicdetails: location.state, addressdetails: addressForm },
      });
    }
  }

  return (
    <form className=" px-8 sm:px-15 md:px-20 flex flex-col gap-5 py-8">
      <Progress progress={"25%"} />
      <h1 className="text-5xl text-center">Address Details</h1>
      <InputDiv
        form={addressForm}
        setForm={setAddressForm}
        type={"text"}
        name={"address1"}
        label={"Address line 1"}
      />
      <InputDiv
        form={addressForm}
        setForm={setAddressForm}
        type={"text"}
        name={"address2"}
        label={"Address line 2"}
      />
      <InputDiv
        form={addressForm}
        setForm={setAddressForm}
        type={"text"}
        name={"city"}
        label={"City"}
      />
      <InputDiv
        form={addressForm}
        setForm={setAddressForm}
        type={"text"}
        name={"state"}
        label={"State"}
      />
      <InputDiv
        form={addressForm}
        setForm={setAddressForm}
        type={"number"}
        name={"zipcode"}
        label={"Zipcode"}
      />
      <InputDiv
        form={addressForm}
        setForm={setAddressForm}
        type={"text"}
        name={"country"}
        label={"Country"}
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

export default Address;
