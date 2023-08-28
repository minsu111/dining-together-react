import React from 'react';
import { styled } from 'styled-components';

type StoreForm1stProps = {
    name: Record<string,string>;
    handleChangeName: (k:string, v:string) => void;
}

function StoreForm1st({name, handleChangeName}:StoreForm1stProps) {
    return (
        <section>
            <input type="text" value={name.name} onChange={(e) => {handleChangeName('name', e.target.value)}} />
        </section>
    );

}

export default StoreForm1st;



