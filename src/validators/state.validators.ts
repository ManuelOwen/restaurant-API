//state validators
//  stateRouter.validator(userSchema)

 import { z } from 'zod'


export const userSchema = z.object({
    name: z.string(),
    id: z.string(),
    code: z.string(),
    
})
