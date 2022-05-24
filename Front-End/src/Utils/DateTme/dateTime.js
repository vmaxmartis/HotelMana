import dayjs from "dayjs";

export const formatDate = (date) => {
  return dayjs(date).format("DD/MM/YYYY");
};
export const formatDateInput = (date) => {
  return dayjs(date).format("YYYY-MM-DD");
};
