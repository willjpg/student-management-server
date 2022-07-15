import { GraphQLID, GraphQLString } from "graphql";
import { Students } from "../../Entities/Students";
import { UserType } from "../TypeDefs/Student";


export const CREATE_STUDENT = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        cpf: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { name, email, cpf } = args;
        await Students.insert({ name, email, cpf });
        return args;
    },
}

export const UPDATE_STUDENT = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        newEmail: { type: GraphQLString },
        newCpf: { type: GraphQLString },
        newName: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const {name, newEmail, newCpf, newName } = args;
        await Students.findOne({ where:{name: name }}); 
        await Students.update({name: name }, { email:newEmail});
        await Students.update({name: name }, { cpf:newCpf});
        await Students.update({name: name }, { name:newName});
        return;
            
    },
}

export const DELETE_STUDENT = {
    type: UserType,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(parent: any, args: any) {
        const id = args.id;
        await Students.delete(id);
    },
}    
