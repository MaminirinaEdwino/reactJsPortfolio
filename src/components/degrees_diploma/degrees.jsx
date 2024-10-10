import { GiDiploma } from "react-icons/gi"
import Degree from "../degree_diploma/degree_diploma"

export default function  DegreesAndDiploma() {
    var degrees_liste = [
        {
            degree : "Software developper Licence",
            date : "2024",
            palce: "Athénée Saint Joseph Antsirabe"
        },
        {
            degree : "Hardware maintenance",
            date : "2021",
            palce: "CFPMM"
        },
        {
            degree : "High School Diploma",
            date : "2020",
            palce: "Lycée privé les Aiglons Moramanga"
        }
    ]
    return <>
        <section id="degree">
            <h1>Degrees and Diploma <GiDiploma/></h1>
            <Degree degree={degrees_liste[0].degree} date={degrees_liste[0].date}
            place={degrees_liste[0].palce}/>
            
            <Degree degree={degrees_liste[1].degree} date={degrees_liste[1].date}
            place={degrees_liste[1].palce}/>
            
            <Degree degree={degrees_liste[2].degree} date={degrees_liste[2].date}
            place={degrees_liste[2].palce}/>
            
        </section>
    </>
}