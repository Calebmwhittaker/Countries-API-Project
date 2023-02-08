const showDate = () => {
  const date = Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
    new Date()
  );
  return date;
};

export default showDate;
