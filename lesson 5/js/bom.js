const input = document.querySelector("input");
    const num = document.getElementById("cTemp");
    const button = document.querySelector("button");
    const list = document.querySelector("ul");

    button.addEventListener('click', function() {

        const li = document.createElement("li");
        const dButton = document.createElement("button");
        

        li.textContent = input.value;
        dButton.textContent = "❌";

        li.appendChild(dButton);
        list.appendChild(li);

        input.focus();
        input.value = '';

        dButton.onclick = function(e) {
            list.removeChild(li);
        }

    });