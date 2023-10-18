tailwind.config = {
  theme: {
    extend: {
      colors: {
        black: "#021112",
        primary: "#13a6ba",
        secondary: "#f93633",
        "accent-1": "#b3c41d",
        "accent-2": "#f3c98b",
        "accent-3": "#772d8b",
        "accent-2 (Shade)": "#fbedda",
        black_shade: "#677071",
        black_shade_2: "#cccfd0",
        black_shade_3: "#e0e2e3",
        primary_shade: "#c8f3f9",
        secondary_shade: "#feeceb",
        "accent-2_shade": "#fdf6ed",
        "accent-1_shade": "#fbfced",
      },
      fontSize: {
        base: "1.125rem",  // 18px
        lg: "1.25rem",     // 20px
        xl: "1.5rem",      // 24px
        "2xl": "1.625rem", // 26px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem",  // 36px
        "5xl": "2.625rem", // 42px
        "6xl": "3.625rem", // 54px
        "7xl": "5rem",     // 70px
      },
      fontFamily: { "noto-serif": "Noto Serif" },
      borderRadius: {
        none: "0",
        xs: "0.3125rem", // 5px
        sm: "0.5rem", // 8px
        default: "0.5625rem", // 9px
        lg: "0.625rem", // 10px
        xl: "0.9375rem", // 15px
        "2xl": "1.25rem", // 20px
        "3xl": "2.131927490234375rem", // 30px
        "4xl": "2.5rem", // 40px
      },
    },

    screens: {
      sm: "366px",
      md: "880px",
      lg: "1620px",
    },
  },
};
