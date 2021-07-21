import settings from "../settings";
import colors from "../colors";
import { createTheme } from "@material-ui/core/styles";

const themeFromOptions = (themeOptions) => {
  /* Return a MUI-Theme object from string-valued `themeOptions`.
   * Looks up color objects/ imports from our `colors` module. */
  let primaryColorImport = settings.theme.primaryColor.import;
  let primaryColor = colors.find(
    (color) => color.id === themeOptions.primaryColor
  );
  if (primaryColor) {
    primaryColorImport = primaryColor.import;
  }

  let secondaryColorImport = settings.theme.secondaryColor.import;
  let secondaryColor = colors.find(
    (color) => color.id === themeOptions.secondaryColor
  );
  if (secondaryColor) {
    secondaryColorImport = secondaryColor.import;
  }

  return createTheme({
    typography: {
      fontSize: 14,
      h1: { fontSize: 28, fontWeight: "fontWeightBold" },
      h2: { fontSize: 28, fontWeight: "fontWeightBold" },
      h3: { fontSize: 18, fontWeight: "fontWeightBold" },
      h4: { fontSize: 14, fontWeight: "fontWeightBold" },
      h5: { fontSize: 14, fontWeight: "fontWeightBold" },
      h6: { fontSize: 14, fontWeight: "fontWeightBold" },
      p: { fontSize: 14 },
      span: { fontSize: 14 },
      code: { fontSize: 14 },

      fontFamily: ["-apple-system", "BlinkMacSystemFont", "Roboto"].join(","),
    },
    palette: {
      primary: primaryColorImport,
      secondary: secondaryColorImport,
      type: themeOptions.type,
      background: {
        default: themeOptions.type === "dark" ? "#212121" : "#F5F5F5",
        paper: themeOptions.type === "dark" ? "#303030" : "white",
      },
    },
  });
};

const updateTheme = (state, action) => {
  /* Apply `action.changes` to our themeOptions and theme */
  const { changes } = action;
  const themeOptions = {
    ...state.options,
    ...changes,
  };
  // FIXME! Redux seems to really, really not like this.
  localStorage.setItem("theme", JSON.stringify(themeOptions));
  return {
    options: themeOptions,
    obj: themeFromOptions(themeOptions),
  };
};

const createInitialState = () => {
  /* Create and return our initial index-state. */

  // Check the OS dark/light setting at startup
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const themetype = prefersDarkMode ? "dark" : "light";

  // Load all other theme & color settings from localStorage
  let themeOptions = JSON.parse(localStorage.getItem("theme"));
  if (!themeOptions) {
    themeOptions = {
      primary: settings.theme.primaryColor.name,
      secondary: settings.theme.secondaryColor.name,
    };
  }
  // Regardless of whethere colors are read from localStorage or not,
  // Take the OS-preferred light/dark theme.
  themeOptions.type = themetype;
  return {
    options: themeOptions,
    obj: themeFromOptions(themeOptions),
  };
};

const initialState = createInitialState();

export function themeReducer(state = initialState, action) {
  if (!action) {
    return state;
  }
  switch (action.type) {
    case "UPDATE_THEME":
      return updateTheme(state, action);
    default:
      return state;
  }
}
