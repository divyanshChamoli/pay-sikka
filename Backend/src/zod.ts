import z from "zod"

export const SignupBodySchema=z.object({
    firstName: z.string().min(1),
    lastName: z.string(),
    password: z.string(),
    username: z.string().email()
})

export type SignupBodyType=z.infer<typeof SignupBodySchema>

export const SigninBodySchema=z.object({
    username: z.string().email(),
    password: z.string()
})

export type SigninBodyType=z.infer<typeof SigninBodySchema>

export const UserUpdateBodySchema=z.object({
    password: z.string(),
	firstName: z.string().min(1),
	lastName: z.string(),
})

export type UserUpdateBodyType=Partial<z.infer<typeof UserUpdateBodySchema>>

export const TransferBodySchema=z.object({
    to: z.string(),
    amount: z.number().positive()
})

export type TransferBodyType=z.infer<typeof TransferBodySchema>