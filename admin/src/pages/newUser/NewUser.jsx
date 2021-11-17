import './newUser.css'

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUser-title">New User</h1>
            <form className="newUser-form">
                <div className="newUser-item">
                    <label>Username</label>
                    <input type="text" placeholder="User name" />
                </div>
                <div className="newUser-item">
                    <label>Full Name</label>
                    <input type="text" placeholder="Full Name" />
                </div>
                <div className="newUser-item">
                    <label>Email</label>
                    <input type="email" placeholder="Email" />
                </div>
                <div className="newUser-item">
                    <label>Password</label>
                    <input type="password" placeholder="Password" />
                </div>
                <div className="newUser-item">
                    <label>Phone</label>
                    <input type="text" placeholder="Phone" />
                </div>
                <div className="newUser-item">
                    <label>Address</label>
                    <input type="text" placeholder="Address" />
                </div>
                <div className="newUser-item">
                    <label>Gender</label>
                    <div className="newUser-gender">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label htmlFor="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other" />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
                <div className="newUser-item">
                    <label>Active</label>
                    <select name="active" id="active" className="newUser-select">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUser-btn">Create</button>
            </form>
        </div>
    )
}
