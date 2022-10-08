import React, { useReducer } from 'react'
import { User } from '../../type'

const INITIAL_STATE = {
    nick: '',
    salary: 0,
    avatar: '',
    description: '',
}

interface FormState{
    inputValues: User
}

type FormReducerAction = {
    type: "change_value",
    payload: {
        inputName: string,
        inputValues: string
    }
    
} | {
    type: "clear"
}

export const formReducer = (state: FormState["inputValues"], action: FormReducerAction) => {
    switch(action.type){
        case "change_value":
            const {inputName , inputValues} = action.payload;
            return {
                ...state,
                [inputName]: inputValues
            }
            case "clear":
                return INITIAL_STATE
              
             default:
                return state   
    }
}

const UseNewUsers = () => {
  return useReducer(formReducer, INITIAL_STATE)
}

export default UseNewUsers;