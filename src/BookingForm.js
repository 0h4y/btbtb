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
    <div className="card text-center m-5">
      <div className="card-header"> Boka bastu/bord/omkäldningsrum</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div className="form-floating m-5">
          <input
            defaultValue="test"
            {...register("example")}
            className="form-control"
            id="floatingInput"
          />
          <label for="floatingInput">Förnamn</label>
        </div>
        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
}

export default BookingForm;
