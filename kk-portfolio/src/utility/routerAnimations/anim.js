import { spring } from 'react-router-transition';
export const bounce =(val)=>{
    return spring(val, {
        stiffness: 330,
        damping: 22
    })
}