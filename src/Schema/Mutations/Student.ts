import { GraphQLString } from "graphql";
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
        const { name, email, cpf} = args;
        await Students.insert({name, email, cpf});
        return args;
    },
}