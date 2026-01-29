import bcrypt from 'bcrypt'

export const hashPass = async (password: string) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}
export const checkPass = async (enteredPass: string, hashPass: string) => { 
    return await bcrypt.compare(enteredPass, hashPass)
}