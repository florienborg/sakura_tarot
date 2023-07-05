import React from "react";
import ApiText from "../../components/apitext/apitext";
import TitleAndPic from "../../components/MockupPag3-TitleAndPic/titleandpic";


export default function Page3() {
    // este componente deberia tener una forma de acceder a la carta seleccionada y una forma de hacer eso es usar el id de la carta en el Path.
    return (
        <div className="Mockup3">
        <TitleAndPic/>
        <ApiText/>
        </div>
    )
};