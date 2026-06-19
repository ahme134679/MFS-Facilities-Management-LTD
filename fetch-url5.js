fetch("https://photos.app.goo.gl/UsnYPRNad1dZYLjKA")
  .then(res => res.text())
  .then(data => {
    const matches = data.match(/https:\/\/lh3\.googleusercontent\.com\/pw\/[a-zA-Z0-9_-]+/g) || data.match(/https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9_-]+/g);
    console.log("Matches:", matches ? matches[0] : "None");
  }).catch(err => console.error(err));
