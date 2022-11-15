import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns/";
import sv from "date-fns/locale/sv";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const InputTimeForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Tid"
      dateFormat="hh:mm"
      locale={sv}
      wrapperClassName="style={color: red;}"
    />
  );
};

export default InputTimeForm;
