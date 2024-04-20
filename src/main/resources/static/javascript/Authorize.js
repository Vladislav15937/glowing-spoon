fetch('/user-data')
    .then(response => response.json())
    .then(user => {
        const emailHeader = document.getElementById("EmailHeader");
        const rolesHeader = document.getElementById("RolesHeader");
        const roles = user.roles.map(function (role) {
            return role.name;
        });
        emailHeader.innerText = user.username;
        rolesHeader.innerText = user.roles.map(function (role) {
            return ' ' + role.name;
        });

        if (!(roles.includes("ROLE_ADMIN"))) {
            document.getElementById("adminContent").remove();
            document.getElementById("admin").remove();
            document.getElementById("modalsWindow").remove();
            document.getElementById("user-tab").classList.add("active");
            document.getElementById("user").classList.add("show", "active");
        } else {
            getUserList();
            document.getElementById("admin-tab").classList.add("active");
            document.getElementById("admin").classList.add("show", "active");
        }
        const tableBody = document.getElementById("userData");

        let row = tableBody.insertRow();
        row.insertCell().innerHTML = user.id;
        row.insertCell().innerHTML = user.username;
        row.insertCell().innerHTML = user.password;
        row.insertCell().innerHTML = user.email;
        row.insertCell().innerHTML = user.roles.map(function (role) {
            return ' ' + role.name;
        });
    })
    .catch(error => console.error('Ошибка:', error));



