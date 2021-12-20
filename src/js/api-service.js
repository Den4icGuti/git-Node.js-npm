import joi from 'joi';
console.log(joi)

const schemaName = joi.string().min(4).max(12);

export default function changeNameUser(name) { 
  return schemaName.validate(name)
};
