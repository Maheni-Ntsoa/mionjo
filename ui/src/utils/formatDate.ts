import moment from "moment";

export const formatDate = (date: any) => {
  return moment(date).format("DD/MM/YYYY HH:mm");
};

export const formatDateOnly = (date: any) => {
  return moment(date).format("DD/MM/YYYY");
};

export const formatDateInputDate = (date: any) => {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(date.getDate()).padStart(2, "0")}T${String(
    date.getHours()
  ).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
};
