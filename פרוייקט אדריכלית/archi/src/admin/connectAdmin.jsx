
import { useState ,useContext} from 'react';
import {Link} from "react-router-dom";
import {ManagerContext} from '../context/managerContext'


export const Connect = () => {
    const [entermanager, setenterManager]=useState(false)
    const manager = useContext(ManagerContext)
    // const [error, setError] = useState('');
    const [password, setpassword] = useState('');


    const toCheck = (event) => {
        event.preventDefault();

        if (password === '1234') {
            manager[0]=true
            console.log( manager[0])
            setenterManager(true)
            console.log(entermanager)
            console.log("Redirecting to another component");
            history.push('admin');
        } else {
            alert("סיסמא לא נכונה")
            setError('The username or password is incorrect');
        }
    };

    return (
<div>
            <h1>hello manager</h1>
            <input onBlur={toCheck}
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
            />
              {entermanager&& <Link to={'/admin'}> <button>Login</button></Link>}
        </div>

            );
};

