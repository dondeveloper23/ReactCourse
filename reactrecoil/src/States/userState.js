import {atom} from "jotai"
import { atomWithStorage } from "jotai/utils"

export const userAtom = atomWithStorage('user_data', {
  email: "",
  password: "",
  isLoggedIn: false
})
