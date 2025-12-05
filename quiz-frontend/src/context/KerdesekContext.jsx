import axios from 'axios';
import { createContext, useState, useEffect } from 'react';


export const KerdesekContext = createContext();

export function KerdesekProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [kerdesLista, setKerdeslista] = useState([])

    function getKerdesek() {
        axios.get('http://127.0.0.1:8000/api/questions')
            .then(function (response) {
                console.log(response.data);
                setKerdeslista(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                setLoading(false);
            });
    }

    function postKerdes(quiz) {
        axios
            .post("http://127.0.0.1:8000/api/questions", quiz)
            .then((res) => {
                console.log("Kérdés mentve:", res.data);
                getKerdesek();
            })
            .catch((err) => console.log(err));
    }


    useEffect(() => {
        getKerdesek();
    }, []);

    return (
        <KerdesekContext.Provider value={{ loading, kerdesLista, getKerdesek,postKerdes}}>
            {children}
        </KerdesekContext.Provider>
    );
}

