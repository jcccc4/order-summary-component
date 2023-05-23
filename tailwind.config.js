/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "pale-blue": "hsl(225, 100%, 94%)",
        "bright-blue": "hsl(245, 75%, 52%)",
        "desaturated-blue": "hsl(224, 23%, 55%)",
        "dark-blue": "hsl(223, 47%, 23%)",
        "very-pale-blue": "hsl(225, 100%, 98%)",
        "hover": "#766CF1",	
      },
      width: {
        card: "327px",
        "card-md": "450px",
      },
      height: {
        card: "567px",
        "card-md": "697px",
      },
      fontSize: {
        title: ["22px", "29px"],
        description: ["15px", "25px"],
        plan: ["14px", "19px"],
        link: ["13px", "17px"],
        button: ["15px", "20px"],
        "title-md": ["28px", "37px"],
        "description-md": ["16px", "26px"],
        "plan-md": ["16px", "21px"],
        "link-md": ["14px", "19px"],
      },
    },
    plugins: [],
  },
};
