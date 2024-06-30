function alegere() {
  let opt = document.getElementById("platforma").value;
  let button = document.getElementById("redirectButton");
  let p = document.getElementById("bun");

  button.style.display = "none";

  if (opt === "Instagram") {
    button.textContent = "Instagram";
    button.className = "button button-instagram";
    button.style.display = "inline-block";
    button.onclick = function () {
      window.location.href = "https://www.instagram.com/lu391n";
    };
  } else if (opt === "E-mail") {
    p.textContent = "E-mail:lucianrujan97@gmail.com";
    button.textContent = "E-mail";
    button.className = "button button-email";
    button.style.display = "inline-block";
    button.onclick = function () {
      window.location.href =
        "https://mail.google.com/mail/u/0/#inbox?compose=new";
    };
  } else if (opt === "Facebook") {
    button.textContent = "Facebook";
    button.className = "button button-facebook";
    button.style.display = "inline-block";
    button.onclick = function () {
      window.location.href = "https://www.facebook.com/lucian.rujan.16";
    };
  }
}

document.getElementById("platforma").addEventListener("change", alegere);
