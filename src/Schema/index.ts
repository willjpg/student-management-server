import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_STUDENTS, GET_BY_CPF, GET_BY_EMAIL, GET_BY_NAME } from './Queries/QueryStudent'
import { CREATE_STUDENT, DELETE_STUDENT, UPDATE_STUDENT } from './Mutations/MutationStudent'

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllStudents: GET_ALL_STUDENTS,
        getByName: GET_BY_NAME,
        getByEmail: GET_BY_EMAIL,
        getByCpf: GET_BY_CPF,
    },
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createStudent: CREATE_STUDENT,
        deleteStudent: DELETE_STUDENT,
        updateStudent: UPDATE_STUDENT,
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
})