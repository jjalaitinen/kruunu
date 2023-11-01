window.addEventListener("load", function () {
  const input = document.getElementById("syote");
  const output = document.getElementById("euro");

  input.addEventListener("input", updateValue);

  function updateValue(e) {
    let kruunut = e.target.value;
    let eurot = kruunut * 0.08470771602;
    output.textContent = (Math.round(eurot * 100) / 100).toFixed(2);
  }
});
