function OurReactApp() {
  return React.createElement("div", null, [
    React.createElement("h2", null, "Our amazing App Header"),
    React.createElement(
      "p",
      null,
      `The current time is ${new Date().toLocaleString()}.`
    ),
    React.createElement("small", null, "Footer text"),
  ]);
}

setInterval(
  () =>
    ReactDOM.render(
      React.createElement(OurReactApp),
      document.querySelector("#react-app")
    ),
  1000
);
