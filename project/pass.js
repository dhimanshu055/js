const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset = "abcdefghijklmnopqrstuvwxyz";
const numberset = "1234567890";
const symbolset = "!@#$%^&*()";

const passBox = document.getElementById("passbox");
const totalchar = document.getElementById("total-char");
const upperinput = document.getElementById("upper-case");
const lowerinput = document.getElementById("lower-case");
const numberinput = document.getElementById("numbers");
const symbolinput = document.getElementById("symbols");

const RandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
};

const generatepassword = (password = "") => {
    if (upperinput.checked) {
        password += RandomData(upperset);
    }
    if (lowerinput.checked) {
        password += RandomData(lowerset);
    }
    if (numberinput.checked) {
        password += RandomData(numberset);
    }
    if (symbolinput.checked) {
        password += RandomData(symbolset);
    }

    if (password.length < totalchar.value) {
        return generatepassword(password);
    }

    return password;
};

document.getElementById("btn").addEventListener(
    "click",
    function () {
        const generatedPassword = generatepassword();
        passBox.textContent = generatedPassword;
    }
);

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}