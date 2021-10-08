function toggle() {
    var x = document.getElementById("navigation-items");
    if (x.className === "navigation") {
      x.className += " responsive";
    } else {
      x.className = "navigation";
    }
  }

  const datefield = document.querySelector("date");
  const now = new Date();
  const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );
  
  datefield.textContent = fulldate;