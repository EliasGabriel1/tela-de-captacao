import React from "react";
import Label from "./Label";
import Input from "./input"

const Text = ({label,type,name,register}) => (
    <Label>
        <Input type={type} name={name} {...register(name)}  placeholder={label} autoComplete="new-password" />
    </Label>
);

const Field ={ 
    Text,
};

export default Field;