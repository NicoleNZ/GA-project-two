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
        <button type="submit" class="btn btn-success" id="submit-login">Login</button>
        <button type="submit" class="btn btn-warning" id="submit-register">Register</button>
    </form> 
`;

/*
const loginUser = () => {
    $(document).on("submit", "#login-user", async (e) => {
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
    return form;
};
*/
const loginOrRegisterUser = () => {
    $(document).ready(function() {
        $("#login-register-login button").click(async (e) => {
            e.preventDefault();
            if ($(this).attr("id") == "submit-login") {            
                $("#login-register-user").submit();

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
            };
            if ($(this).attr("id") == "submit-register") {            
                $("#login-register-user").submit();

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
            };
        });
    });
    return form;
};

export default loginOrRegisterUser;