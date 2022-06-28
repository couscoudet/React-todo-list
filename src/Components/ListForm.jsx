import React from 'react';
import { Input } from 'antd'

const ListForm = (props) => {
    
    function handleChange(event){
        switch (event.target.name) {
            case "name":
                props.setName(event.target.value);
                break;
            case "color":
                props.setColor(event.target.value);
                break;
            default:
                break;
        }
    }

    return(
        <form>
            <label htmlFor="name">Nom</label>
            <Input placeholder="Nom de la liste" value={props.name} onChange={handleChange} name="name" id="name" />
            <label htmlFor="color">Couleur de la liste</label>
            <Input type="color" name="color" id="color" value={props.color} onChange={handleChange}/>
            {props.footer}
        </form>
    )
}

export default ListForm;