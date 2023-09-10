import { TypesPokemon } from "../types/TypesPokemon"
import { Stack } from "@mui/material";
import Chip from '@mui/material/Chip';


export const TypesPokemonList = ({ typeList }: { typeList: TypesPokemon[] }) => {
    return (
        <main className="flex flex-wrap place-content-center place-items-center bg-red-100 w-full">
            <Stack direction="row" spacing={1} className="mt-8 mb-8">    
                    {typeList?.map((type: TypesPokemon) => (
                    <Chip key={type.name} label={type.name} component="a" href="#basic-chip" clickable />
                ))}
            </Stack>
            
        </main>
    )
}