
const UserForm = (props) => {
    const [firstname, setFirstName] = useState("");
    const [firstnameError, setFirstnameError] = useState("Firstname required");
    const [lastname, setLastname] = useState("");
    const [lastnameError, setLastnameError] = useState("Lastname required");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("Email required");
    const [password, setPassword] = useState("");  
    const [passwordError, setPasswordError] = useState("Password required");  
    const [confirmPassword, setConfirmPassword] = useState(""); 
    const [confirmPasswordError, setConfirmPasswordError] = useState("Confirm Password required");   
    
    const createUser = (e) => {
        e.preventDefault();
        if(firstnameError === "" && lastnameError === "" && emailError === "" && passwordError === "" && confirmPasswordError === ""){
            const newUser = { firstname, lastname, email, password, confirmPassword };
            console.log("Welcome", newUser);
            setFirstnameError("Firstname required")
            setLastnameError("Lastname required")
            setEmailError("Email required")
            setPasswordError("Password required")
            setConfirmPasswordError("Confirm Password required")
            clearForm()
        }
    };

    const clearForm = () => {
        setFirstName("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }
    
    const validationFirstname = (e) => {
        setFirstName(e.target.value ); 
        if(e.target.value.length  < 1) {
            setFirstnameError("Firstname required")
        }else if(e.target.value.length  < 2) {
            setFirstnameError("Firstname must be at least 2 charactors")
        }else{
            setFirstnameError(""); 
        }
    };

    const validationLastname = (e) => {
        setLastname(e.target.value ); 
        if(e.target.value.length  < 1) {
            setLastnameError("Lastname required")
        }else if(e.target.value.length  < 2) {
            setLastnameError("Lastname must be at least 2 charactors")
        }else{
            setLastnameError(""); 
        }
    };

    const validationEmail = (e) => {
        setEmail(e.target.value ); 
        if(e.target.value.length  < 1) {
            setEmailError("Email required")
        }else if(e.target.value.length  < 5) {
            setEmailError("Email must be at least 5 charactors")
        }else{
            setEmailError(""); 
        }
    };

    const validationPassword = (e) => {
        setPassword(e.target.value ); 
        if(e.target.value.length  < 1) {
            setPasswordError("Password required")
        }else if(e.target.value.length  < 8) {
            setPasswordError("Password must be at least 8 charactors")
        }else{
            setPasswordError(""); 
        }
    };

    const validationConfirmPassword = (e) => {
        setConfirmPassword(e.target.value); 
        if(e.target.value.length  < 1) {
            setConfirmPasswordError("Confirm Password required")
        }else if(e.target.value !== password) {
            setConfirmPasswordError("Password must match")
        }else{
            setConfirmPasswordError(""); 
        }
    };

    return(

    <div>
        <form onSubmit={ createUser } className={styles.form}>
        <div>
            <label>Firstname: </label> 
            <input type="text" onChange={ validationFirstname } />
            {firstnameError ? <p>{ firstnameError }</p> :""}
        </div>
        <div>
            <label>Lastname: </label> 
            <input type="text" onChange={ validationLastname } />    
            {lastnameError ? <p> { lastnameError }</p> :' '}
        </div>
        <div>
            <label>Email: </label> 
            <input type="text" onChange={ validationEmail } />
                {emailError?<p>{ emailError }</p> :' '}
        </div>
        <div>
            <label>Password: </label>
            <input type="text" onChange={ validationPassword } />
            {passwordError ?<p>{ passwordError }</p> :''}
        </div>
        <div>
        <label>Confirm Password: </label>
        <input type="text" onChange={ validationConfirmPassword } />
        {confirmPasswordError ?<p>{  confirmPasswordError }</p> :' '}
        </div>
        <div className={styles.group} >
            <input className={styles.btn1} type="submit" value="Create User" />
        </div>
        </form>

            <p>You Form Data</p>
            <p>Firstname: {firstname}</p>
            <p>Lastname:{lastname}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password:{confirmPassword}</p>

    </div>

    );
};
    
export default UserForm;

