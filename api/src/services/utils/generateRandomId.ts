export const generateRandomId = (): number => {
  let text = "";
  const possible = "0123456789";
  for (let i = 0; i < 8; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return parseInt(text);
}
