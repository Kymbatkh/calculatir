function code() {
    let education = document.getElementById("education");
    let family = document.getElementById("family");
    let skills = document.getElementsByClassName('skills');
    let result = document.getElementById('result');
    let btnShow = document.querySelector("button");
    let sum = 500;
    sum = sum * education.value;
    sum = sum * family.value;
    for (i = 0; i < 4; i++) {
        if (skills[i].checked === true) {
            sum = sum + parseInt(skills[i].value);
        }
    }
    for (i = 0; i < 3; i++) {
        let gossip = 'gossip' + i;
        let age = 'age' + i;
        let gossips = document.getElementById(gossip);
        let ages = document.getElementById(age);
        if (gossips.checked === true) {
            if (gossips.value !== "200") {
                sum = sum * Number(gossips.value);
            } else {
                sum = sum - Number(gossips.value);
            }
        }
        if (ages.checked === true) {
            sum = sum * Number(ages.value);
        }
    }
    result.innerText = "Qalyn Mal: " + sum + "$";
};
