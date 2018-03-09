$(function()  {
    let d = new Date();
    let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    let n = weekday[d.getDay()];
    document.getElementById("day").innerHTML = n;
})

$(function()  {
    let d = new Date();
    let n = d.toLocaleDateString();
    document.getElementById("date").innerHTML = n;

})
