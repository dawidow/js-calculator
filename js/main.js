function pobierzZPrzycisku(btn) {
  if (btn == "=") {
    document.getElementById("polekalkulatora").value = eval(
      document.getElementById("polekalkulatora").value
    );
  } else if (btn == "c") {
    document.getElementById("polekalkulatora").value = "";
  } else {
    document.getElementById("polekalkulatora").value += btn;
  }
}
