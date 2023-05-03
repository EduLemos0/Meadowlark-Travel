const fortuneCookies = [
  "Conquer your fears or they will conquer you.",
  "Rivers need springs.",
  "Do what you ought and concentrate on what you are doing. ",
  "Whenever possible, keep it simple.",
  "Do not fear what you don't know.",
];

const getFortune = () => {
  const idx = Math.floor(Math.random() * fortuneCookies.length);
  return fortuneCookies[idx];
};

export { getFortune };
