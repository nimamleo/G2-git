const $ = document;
let email_input = $.querySelector(".email");
let pass_input = $.querySelector(".pass");
let btn = $.querySelector(".btn");
let error = $.querySelector(".error");

email_input.addEventListener("input", () => {
    const emailValue = email_input.value;
    const validateRes = ValidateEmail(emailValue);
    if (!validateRes) {
        email_input.style = ` border: 1px solid red;`;
        error.innerHTML = "email is not valid";
    } else {
        email_input.style = ` border: 1px solid green;`;
        error.innerHTML = "";
    }
});

pass_input.addEventListener("input", () => {
    const passValue = pass_input.value;
    const validateRes = Validatepassword(passValue);
    if (!validateRes) {
        pass_input.style = ` border: 1px solid red;`;
        error.innerHTML = "password must be more than 6 char";
    } else {
        pass_input.style = ` border: 1px solid green;`;
        error.innerHTML = "";
    }
});

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const validateRes = finalValidate();
    if (!validateRes) {
        alert("please check error");
    } else {
        const newUser = {
            email: email_input.value,
            password: pass_input.value,
        };
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const UserExist = users.find((user) => {
            return user.email === newUser.email;
        });
        if (UserExist) {
            if (UserExist.password === pass_input.value) {
                alert("login");
                localStorage.setItem("login" , true)
                window.location.href = "http://127.0.0.1:5500/index.html";
            } else {
                alert("creadentials not valid");
            }
        } else {
            alert("creadentials not valid");
        }
    }
});

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
    } else {
        return false;
    }
}

function Validatepassword(pass) {
    if (pass.length >= 6) {
        return true;
    } else {
        return false;
    }
}

// function finalValidate() {
//     if (
//         ValidateEmail(email_input.value) &&
//         Validatepassword(pass_input.value)
//     ) {
//         return true;
//     }
//     return false;
// }
