//city validators
//  cityRouter.validator(citySchema)
import { z } from 'zod'

export const citySchema = z.object({
    name: z.string(),
    id: z.string(),
    state_id: z.string(),
    
})