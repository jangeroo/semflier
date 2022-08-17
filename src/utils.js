import { add, format } from "date-fns";

export const setDatesFromSession = (session, startDate, allDates) => {
  const datesToReplace = allDates.slice(session);

  const newDates = datesToReplace.map((date, i) => {
    return format(add(startDate, { weeks: i }), "yyyy-MM-dd");
  });

  allDates.splice(session, allDates.length - session, ...newDates);

  return allDates;
};
