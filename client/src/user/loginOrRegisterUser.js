const form = `
    <form id="login-register-user">
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" class="form-control" placeholder="Enter your username" name="username">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="text" id="password" class="form-control" placeholder="Enter your password" name="password">
        </div>
        <button type="button" class="btn btn-success" id="submit-login">Login</button>
        <button type="button" class="btn btn-warning" id="submit-register">Register</button>
    </form> 
`;

const loginOrRegisterUser = () => {
    $(document).on("click", "#submit-login", async (e) => {
        e.preventDefault();

        const formData = {
            username: $("input[name='username']").val(),
            password: $("input[name='password']").val(),
        };
        
        const response = await $.ajax({
            type: "POST",
            url: "/api/user/login",
            contentType: "application/json",
            data: JSON.stringify(formData),
        });
        console.log("response: ", response);
    });

    $(document).on("click", "#submit-register", async (e) => {
        e.preventDefault();

        const formData = {
            username: $("input[name='username']").val(),
            password: $("input[name='password']").val(),
        };
        console.log("formData", formData);

        const response = await $.ajax({
            type: "POST",
            url: "/api/users/register",
            contentType: "application/json",
            data: JSON.stringify(formData),
        });
        console.log("response: ", response);
    });
    return form;
};

export default loginOrRegisterUser;