import React from 'react';
import './userform.scss';

function UserForm() {

    return(
        <section className='form'>
            <form className='form__box' action="http://localhost:3000/diss">
                <label htmlFor='username'>I have something to say about</label>
                <input type='text' name='username' placeholder='Your Name' className='form__feild' required></input>
                <button type='submit' className='form__button'>ENTER</button>
            </form>
        </section>
    )

}

export default UserForm;