import axios from "axios";

const iconPrefix = "fa-";
const styleMap = { brands: "fab", regular: "far", solid: "fas" };

const fontAwesomeVersion = "5.13.0";
const jsonUrl = `https://raw.githubusercontent.com/FortAwesome/Font-Awesome/${fontAwesomeVersion}/metadata/icons.json`;

axios
  .get(jsonUrl)
  .then(function(response) {
    const icons = response.data;
    var parsedIcons = [];

    for (let [iconName, iconData] of Object.entries(icons)) {
      for (let iconStyle of Object.values(iconData.styles)) {
        parsedIcons.push(`${styleMap[iconStyle]} ${iconPrefix}${iconName}`);
      }
    }

    parsedIcons = parsedIcons.sort();

    console.log(parsedIcons);
    document.getElementById("app").textContent = JSON.stringify(parsedIcons);
  })
  .catch(function(error) {
    console.log(error);
  });
