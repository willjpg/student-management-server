import { GraphQLList, GraphQLString } from 'graphql'
import { Students } from '../../Entities/Students';
import { UserType } from '../TypeDefs/TypeStudent'

export const GET_ALL_STUDENTS = {
    type: new GraphQLList(UserType),
    resolve() {
        return Students.find();
    },
};

export const GET_BY_NAME = {
    type: new GraphQLList(UserType),
    args: {
        name: { type: GraphQLString },
    },
     async resolve(parent: any, args: any) {
        const {name} = args;
        const user = await Students.find({ where:{name: name }}); 
        return user;
    },

};

export const GET_BY_EMAIL = {
    type: new GraphQLList(UserType),
    args: {
        email: { type: GraphQLString },
    },
     async resolve(parent: any, args: any) {
        const {email} = args;
        const user = await Students.find({ where:{email: email }}); 
        return user;
    },
};    

export const GET_BY_CPF = {
    type: new GraphQLList(UserType),
    args: {
        cpf: { type: GraphQLString },
    },
     async resolve(parent: any, args: any) {
        const {cpf} = args;
        const user = await Students.find({ where:{cpf: cpf }}); 
        return user;
    },
};   