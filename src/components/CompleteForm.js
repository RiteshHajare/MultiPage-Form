import React from "react";
import "../App.css";

function CompleteForm({ forms }) {
  console.log(forms);
  return (
    <div className="px-4 completeformpage">
      <h1 className="text-5xl text-center mb-4">Application</h1>
      <div className="py-8 card">
        <h1 className="text-4xl text-center mb-5">Basic Details</h1>
        <div className="flex justify-start gap-3 sm:justify-around flex-wrap ">
          <div className="left">
            <p className="my-2">
              <strong>First Name : </strong>
              {forms.basicdetails.firstname}{" "}
            </p>
            <p className="my-2">
              <strong>Email : </strong>
              {forms.basicdetails.email}{" "}
            </p>
            <p className="my-2">
              <strong>Ph Number : </strong>
              {forms.basicdetails.phno}{" "}
            </p>
            <p className="my-2">
              <strong>DOB : </strong>
              {forms.basicdetails.dob}{" "}
            </p>
          </div>
          <div className="right">
            <p className="my-2">
              <strong>Last Name : </strong>
              {forms.basicdetails.lastname}{" "}
            </p>
            <p className="my-2">
              <strong>Gender : </strong>
              {forms.basicdetails.gender}{" "}
            </p>
            <p className="my-2">
              <strong>Nationality : </strong>
              {forms.basicdetails.nationality}{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="py-8 card">
        <h1 className="text-4xl text-center mb-5">Address Details</h1>
        <div className="flex justify-start gap-3 sm:justify-around flex-wrap ">
          <div className="left">
            <p className="my-2">
              <strong>Country : </strong>
              {forms.addressdetails.country}{" "}
            </p>
            <p className="my-2">
              <strong>Address 1 : </strong>
              {forms.addressdetails.address1}{" "}
            </p>
            <p className="my-2">
              <strong>Address 2 : </strong>
              {forms.addressdetails.address2}{" "}
            </p>
          </div>
          <div className="right">
            <p className="my-2">
              <strong>City : </strong>
              {forms.addressdetails.city}{" "}
            </p>
            <p className="my-2">
              <strong>State : </strong>
              {forms.addressdetails.state}{" "}
            </p>
            <p className="my-2">
              <strong>Zip code : </strong>
              {forms.addressdetails.zipcode}{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="py-8 card">
        <h1 className="text-4xl text-center mb-5">Professional Details</h1>
        <div className="flex justify-start gap-3 sm:justify-around flex-wrap ">
          <div className="left">
            <p className="my-2">
              <strong>Company Name : </strong>
              {forms.professionaldetails.company}{" "}
            </p>
            <p className="my-2">
              <strong>Title : </strong>
              {forms.professionaldetails.title}{" "}
            </p>
            <p className="my-2">
              <strong>Employee ID : </strong>
              {forms.professionaldetails.id}{" "}
            </p>
            <p className="my-2">
              <strong>Department : </strong>
              {forms.professionaldetails.department}{" "}
            </p>
          </div>
          <div className="right">
            <p className="my-2">
              <strong>Start date : </strong>
              {forms.professionaldetails.startdate}{" "}
            </p>
            <p className="my-2">
              <strong>Salary : </strong>
              {forms.professionaldetails.salary}{" "}
            </p>
            <p className="my-2">
              <strong>Working eligibility(IN) : </strong>
              {forms.professionaldetails?.radio
                ? forms.professionaldetails?.radio
                : "No Data"}{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="py-8 card mb-4">
        <h1 className="text-4xl text-center mb-5">Payment Details</h1>
        <div className="flex justify-start gap-3 sm:justify-around flex-wrap ">
          <div className="left">
            <p className="my-2">
              <strong>Bank : </strong>
              {forms.paymentdetails.passbook_name}{" "}
            </p>
            <p className="my-2">
              <strong>Account Number : </strong>
              {forms.paymentdetails.accountnumber}{" "}
            </p>
            <p className="my-2">
              <strong>IFSC code : </strong>
              {forms.paymentdetails.ifsc}{" "}
            </p>
          </div>
          <div className="right">
            <p className="my-2">
              <strong>Bank : </strong>
              {forms.paymentdetails.bank}{" "}
            </p>
            <p className="my-2">
              <strong>Amount : </strong>
              {forms.paymentdetails.amount}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompleteForm;
