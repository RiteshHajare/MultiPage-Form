import React, { useState } from "react";
import InputDiv from "../components/InputDiv";
import Progress from "../components/Progress";
import { useLocation } from "react-router-dom";
import CompleteForm from "../components/CompleteForm";

function PaymentDetails() {
  const location = useLocation();
  const [renderComp, setRenderComp] = useState(false);
  const [paymentForm, setPaymentForm] = useState({
    passbook_name: "",
    accountnumber: "",
    ifsc: "",
    bank: "",
    amount: null,
  });

  function handleClick(e) {
    e.preventDefault();
    setRenderComp(true);
  }

  if (renderComp) {
    return (
      <CompleteForm
        forms={{
          basicdetails: location.state.basicdetails,
          addressdetails: location.state.addressdetails,
          professionaldetails: location.state.professionaldetails,
          paymentdetails: paymentForm,
        }}
      />
    );
  }
  return (
    <form className=" px-8 sm:px-15 md:px-20 flex flex-col gap-5 py-8">
      <Progress progress={"50%"} />
      <h1 className="text-5xl text-center">Payment Details</h1>
      <InputDiv
        form={paymentForm}
        setForm={setPaymentForm}
        type={"text"}
        name={"passbook_name"}
        label={"Bank name"}
      />
      <InputDiv
        form={paymentForm}
        setForm={setPaymentForm}
        type={"text"}
        name={"accountnumber"}
        label={"Account Number"}
      />
      <InputDiv
        form={paymentForm}
        setForm={setPaymentForm}
        type={"text"}
        name={"ifsc"}
        label={"IFSC code"}
      />
      <InputDiv
        form={paymentForm}
        setForm={setPaymentForm}
        type={"text"}
        name={"bank"}
        label={"Bank name"}
      />
      <InputDiv
        form={paymentForm}
        setForm={setPaymentForm}
        type={"number"}
        name={"amount"}
        label={"Amount"}
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

export default PaymentDetails;
