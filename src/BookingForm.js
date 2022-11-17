import React from "react";
import { useForm } from "react-hook-form";
import InputDateForm from "./components/InputDateForm";
import InputTimeForm from "./components/InputTimeForm";
import { v4 as uuidv4 } from "uuid";
import { axios } from "axios";

{
  /*https://react-hook-form.com/form-builder */
}

const iduuid = uuidv4();
console.log(iduuid);

function BookingForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="container mt-5">
      <div className="row justify-content-md-center">
        <div
          className="card text-left mt-5 text-center"
          style={{ opacity: "0.9", backgro }}
        >
          <div className="card-header text-center pt-3">
            <h5>Boka bastu/bord/omkäldningsrum</h5>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body d-inline-flex flex-column">
              <h4 className="ms-5 mt-5">Vad vill du boka?</h4>
              <div className="form-check ms-5 mt-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  placeholder="sauna"
                  {...register("sauna", {})}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  <h5>Bastu</h5>
                </label>
              </div>

              <div className="form-check ms-5">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  placeholder="table"
                  {...register("table", {})}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  <h5>Bordtennisbord</h5>
                </label>
              </div>

              <div className="form-check ms-5">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  placeholder="lockerroom"
                  {...register("lockerroom", {})}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  <h5>Omklädningsrum</h5>
                </label>
              </div>
            </div>

            <div className="d-inline-flex flex-column m-5">
              <h4>Vilken dag?</h4>
              <InputDateForm />
            </div>
            <div className="d-inline-flex flex-column m-5">
              <h4>Från tid?</h4>
              <InputTimeForm />
            </div>

            <div className="d-inline-flex flex-column m-5">
              <h4>Till tid?</h4>
              <InputTimeForm />
            </div>

            {/* register your input into the hook by invoking the "register" function */}
            <div className="form-floating m-5">
              <input
                {...register("example", { required: true })}
                className="form-control"
                id="floatingInput"
              />
              <label htmlFor="floatingInput">Namn</label>
            </div>

            {/* include validation with required or other standard HTML validation rules */}
            <div className="form-floating m-5">
              <input
                {...register("exampleRequired", { required: true })}
                className="form-control"
                id="floatingInput"
              />

              <label htmlFor="floatingInput">E-post</label>
            </div>

            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && (
              <div className="text-center">
                <span className="mark">Informationen är obligatorisk!</span>
              </div>
            )}

            <input type="submit" className="btn  btn-light m-5" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
