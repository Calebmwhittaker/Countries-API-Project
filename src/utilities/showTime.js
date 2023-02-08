const showTime = () => {
  const time = Intl.DateTimeFormat("en-US", { timeStyle: "medium" }).format(
    new Date()
  );
  return time;
};

export default showTime;
