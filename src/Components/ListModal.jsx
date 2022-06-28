import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import ListForm from './ListForm';
import Fire from '../Fire';

 const ListModal = (props) => {
    const [name, setName] = useState("");
    const [color, setColor] = useState("#3B97FF")
    
    //state error lié à l'instance de la class Fire dans le handleSubmit
    const [error, setError] = useState(null)

    const handleSubmit = () => {
        const firebase = new Fire((error) => {
            if (error) {
                setError(error);
            }
            else {
                const list = {
                    "name" : name,
                    "color" : color,
                    "tasks" : []
                    }
                firebase.addList(list);
                }
            });
        props.handleCancel();
    }

    return(
        <Modal 
            title={props.title} 
            visible={props.isVisible}
            onOk={props.handleOk} 
            onCancel={props.handleCancel}
            footer={[
                <Button type="primary" onClick={handleSubmit} >
                    Créer une liste
                </Button>
            ]}
        >
            {error && <p>Une erreur est survenue</p>}
            <ListForm 
                name={name} 
                color={color} 
                setName={setName} 
                setColor={setColor}
            />
        </Modal>
    )
}

export default ListModal;