let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");

let string = "";
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let btnValue = e.target.innerText;

        if (btnValue === "=") {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } 
        else if (btnValue === "AC") {
            string = "";
            input.value = "";
        } 
        else if (btnValue === "DEL") {
            string = string.slice(0, -1);
            input.value = string;
        } 
        else {
            string += btnValue;
            input.value = string;
        }
    });
});
