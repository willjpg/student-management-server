import { GraphQLList } from 'graphql'
import { Students } from '../../Entities/Students';
import {UserType} from '../TypeDefs/Student'

export const GET_ALL_STUDENTS = {
    type: new GraphQLList(UserType),
    resolve(){
        return Students.find();
    },
};