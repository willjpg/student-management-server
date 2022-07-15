import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_STUDENTS } from './Queries/Student'
import { CREATE_STUDENT } from './Mutations/Student'

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllStudents: GET_ALL_STUDENTS,
    },
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createStudent: CREATE_STUDENT,
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
})