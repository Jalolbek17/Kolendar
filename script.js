const date = new Date(), today = new Date();
const days = document.querySelectorAll(".date");
const monthsNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const buttons = document.querySelectorAll(".btn");

function changeWeek(nav) {
    date.setDate(date.getDate() + nav);
    days.forEach(d => {
        date.setDate(date.getDate() + 1);
        if (date.setDate(date.getDate()) === today.setDate(today.getDate())) {
            d.classList.add("bold");
        } else {
            d.classList.remove("bold");
        }
        d.innerHTML = `${monthsNames[date.getMonth()]} ${date.getDate()}`;
    });
}

changeWeek(-4);

buttons.forEach(b => {
    b.addEventListener("click", () => {
        if (b.dataset.nav === "previous") {
            changeWeek(-14);
        } else {
            changeWeek(0);
        }
    })
});