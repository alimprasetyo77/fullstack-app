
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState =  {
    user : null,
    isError : false,
    isSuccess : false,
    isLoading : false,
    message : ''
}

export const LoginUser = createAsyncThunk('user/login', async (user, thunkApi) => {
    try {
        const response = await axios.post('http://localhost:5000/login', {
            email : user.email,
            password : user.password
        })
        return response.data
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg
            return thunkApi.rejectWithValue(message)
        }
    }
})

export const getMe = createAsyncThunk('user/getMe', async (_, thunkApi) => {
    try {
        const response = await axios.get('http://localhost:5000/me')
        return response.data
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg 
            return thunkApi.rejectWithValue(message)
        }
    }
})

export const LogOut = createAsyncThunk('user/logout', async () => {
    await axios.delete('http://localhost:5000/logout')
})




const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        reset : state => initialState
    },
    extraReducers : (builder) => {
        builder.addCase (LoginUser.pending, (state) => {
            state.isLoading = true 
        })
        builder.addCase(LoginUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload
        })
        builder.addCase(LoginUser.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        // get me 
        builder.addCase (getMe.pending, (state) => {
            state.isLoading = true 
        })
        builder.addCase(getMe.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload
        })
        builder.addCase(getMe.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})
export const {reset} = authSlice.actions // supaya fungsi ini bisa di gunakan 
export default authSlice.reducer