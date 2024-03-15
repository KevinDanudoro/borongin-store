const priceFormatter = (value: string) => {
  if (value === "") return "";

  const unformatedValue = value.replaceAll(",", "");
  const numberTypeValue = Number(unformatedValue);
  if (isNaN(numberTypeValue)) return value.slice(0, -1);

  const formatedValue = numberTypeValue.toLocaleString();
  return formatedValue;
};

export { priceFormatter };
