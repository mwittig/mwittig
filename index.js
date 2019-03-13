const boxen = require("boxen")
const {stripIndent} = require("common-tags")
const style = require('ansi-styles')
const {red, gray, bold, reset} = require('ansi-styles')

console.log(
  boxen(
    stripIndent`
      ${red.open}${bold.open}Marcus Wittig${reset.open}
      ${gray.open}Software Enthusiast${reset.open}
      https://github.com/mwittig
    `
    ,
    {
      borderColor: "gray",
      dimBorder: true,
      margin: 1,
      padding: 1
    }
  )
)