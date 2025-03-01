import { addons } from "@storybook/manager-api";

addons.setConfig({
  theme: create({
    base: "light",

    brandTitle: "Agnikul",
    brandUrl: "http://localhost:6006/  ",
    brandImage: "download.png",
    brandTarget: "_self",
  }),
});
