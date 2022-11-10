import React from "react";
import { useForm } from "react-hook-form";

{
  /*https://react-hook-form.com/form-builder */
}

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
    <div className="card text-left m-5">
      <div className="card-header text-center">
        {" "}
        Boka bastu/bord/omkäldningsrum
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-check ms-5 mt-5">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            placeholder="sauna"
            {...register("sauna", {})}
          />
          <label class="form-check-label" for="flexCheckDefault">
            Bastu
          </label>
        </div>

        <div class="form-check ms-5">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            placeholder="table"
            {...register("table", {})}
          />
          <label class="form-check-label" for="flexCheckDefault">
            Bastu
          </label>
        </div>

        <div class="form-check ms-5">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            placeholder="lockerroom"
            {...register("lockerroom", {})}
          />
          <label class="form-check-label" for="flexCheckDefault">
            Bastu
          </label>
        </div>

        {/* register your input into the hook by invoking the "register" function */}
        <div className="form-floating m-5">
          <input
            {...register("example", { required: true })}
            className="form-control"
            id="floatingInput"
          />
          <label for="floatingInput">Namn</label>
        </div>
        {/* include validation with required or other standard HTML validation rules */}
        <div className="form-floating m-5">
          <input
            {...register("exampleRequired", { required: true })}
            className="form-control"
            id="floatingInput"
          />

          <label for="floatingInput"></label>
        </div>
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" className="btn  btn-light m-5" />
      </form>
    </div>
  );
}

export default BookingForm;
