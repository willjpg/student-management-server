import{GraphQLObjectType, GraphQLID, GraphQLString} from 'graphql';


export const UserType = new GraphQLObjectType({
    name: "Student",
    fields: () => ({
       id: { type: GraphQLID},
       name: { type: GraphQLString},
       email: { type: GraphQLString},
       cpf: { type: GraphQLString},    
    }),
});