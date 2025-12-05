import axios from 'axios';
import { createContext,useState } from 'react';


export const KerdesekContext = createContext();

export function KerdesekProvider({children}){
    const [loadling, setLoading] = useState(true);
    const [kerdeslista,setkerdeslista] = useState([])

    return(
        <KerdesekContext.Provider value = {kerdeslista}>
            {children}
        </KerdesekContext.Provider>
    );
}

function getKerdesek(){
    axios.get('http://127.0.0.1:8000/api/questions')
        .then(function(response){
            console.log(response.data);
            setkerdeslista(response.data)
        })
        .catch(function(error){
            console.log(error);
        })
        .finally(function(){

        });
}