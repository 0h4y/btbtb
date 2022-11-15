import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns/";
import sv from "date-fns/locale/sv";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const InputDateForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      minDate={new Date()}
      maxDate={addDays(new Date(), 31)}
      locale={sv}
      showWeekNumbers
      inline
    />
  );
};

export default InputDateForm;
