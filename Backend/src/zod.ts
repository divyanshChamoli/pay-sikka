import z from "zod"

export const SignupBodySchema=z.object({
    firstName: z.string(),
    lastName: z.string(),
    password: z.string(),
    username: z.string()
})

export type SignupBodyType=z.infer<typeof SignupBodySchema>
