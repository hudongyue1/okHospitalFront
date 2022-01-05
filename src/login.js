import React, { useState } from 'react';
export default ({ saveToken }) => {
    const [account, setAccount] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        // 判断输入帐号和密码
        if (account == '1' && password == '1') {
            saveToken(account);
        } else {
            alert('Invalid account or password!');
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={ handleSubmit }>
                <label>
                    <p>Account:</p>
                    <input type="text" onChange={ e => setAccount(e.target.value) } />
                </label>
                <label>
                    <p>Password:</p>
                    <input type="password" onChange={ e => setPassword(e.target.value) } />
                </label>
                <p>
                    <button type="submit">Submit</button>
                </p>
            </form>
        </div>
    );
}