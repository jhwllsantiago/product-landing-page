(() => {
  const dataName = document.querySelector("[data-name]");
  const qStr = window.location.search;
  const urlParams = new URLSearchParams(qStr);
  const name = urlParams.get("name");

  dataName.textContent = `Thank you for subscribing, ${name}!`;


  const dataEmail = document.querySelector("[data-email]");
  const qStr2 = window.location.search;
  const urlParams2 = new URLSearchParams(qStr2);
  const email = urlParams2.get("email");

  dataEmail.textContent = `The latest news and updates will be sent to (${email}).`;
})();
