import bcrypt from "bcrypt";

const user = [
    {
    name:'Admin',
    email:"admin@gmail.com",
    password: bcrypt.hashSync('123456',10),
    isAdmin: true,
},
{
    name:'user1',
    email:"user1@gmail.com",
    password: bcrypt.hashSync('123456',10),
    isAdmin: false,
},
{
    name:'user2',
    email:"user2@gmail.com",
    password: bcrypt.hashSync('123456',10),
    isAdmin: false,
},
]
export default user;