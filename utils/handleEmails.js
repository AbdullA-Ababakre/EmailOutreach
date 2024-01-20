export const handleEmails = (arr) => {
  return arr.flatMap((obj) =>
    Object.values(obj).filter((value) => value !== "" && value.includes("@"))
  );
};
