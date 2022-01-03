interface ITheme {
  breakpoints: {
    S: number;
    M: number;
    L: number;
    XL: number;
  };
}

export const mainTheme: ITheme = {
  breakpoints: {
    S: 0,
    M: 600,
    L: 1024,
    XL: 1584,
  },
};
