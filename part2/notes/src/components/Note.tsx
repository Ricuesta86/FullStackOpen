import { note } from "../types"

type noteProps={
    note:note
}

const Note =({note}:noteProps)=>{
    return <li>{note.content}</li>
}

export default Note