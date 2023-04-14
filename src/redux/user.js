import {createSlice} from '@reduxjs/toolkit'

const initialState={
    user:null,
    loading:null,
    err:null
}
const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        loginStart:(state)=>{
            state.loading=true;
        },
        loginSuccess:(state,action)=>{
            state.user=action.payload;
        },
        loginFailure:(state)=>{
            state.loading=false
            state.err=true
        },
        logout:(state)=>{
            return initialState
        }
    }
})
export const {loginStart,loginFailure,loginSuccess,logout}=userSlice.actions
export default userSlice.reducer