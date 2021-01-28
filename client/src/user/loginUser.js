const form = `
    <form id="login-user">
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" class="form-control" placeholder="Enter your username" name="username">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="text" id="password" class="form-control" placeholder="Enter your password" name="password">
        </div>
        <button type="submit" class="btn btn-primary" id="submit-login">Submit</button>
    </form> 
`;

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

export default loginUser;