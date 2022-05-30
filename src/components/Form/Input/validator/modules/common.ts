import { Validator } from "../interface/producer"


export const required: Validator = value => Boolean(value) || 'Поле обязательно!'

