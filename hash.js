const sha256 = require("js-sha256");

function getGravatarURL(email) {
  // Trim leading and trailing whitespace from
  // an email address and force all characters
  // to lower case
  const address = String(email).trim().toLowerCase();

  // Create a SHA256 hash of the final string
  const hash = sha256(address);

  // Grab the actual image URL
  return `https://www.gravatar.com/avatar/${hash}`;
}
console.log(getGravatarURL("1349955700@qq.com"));
