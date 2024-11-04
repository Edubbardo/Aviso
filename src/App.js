import React, {useState}  from 'react';

var cont = 0
function BotUm() {
    const [showImage, setShowImage] = useState(false); 

    function Clique() {
        alert('Considere um aviso '+ cont);
        setShowImage(true); 
        cont = cont + 1
    }

    return (
        <div>
            <button type="button" onClick={Clique}>Clique aqui para ser avisado</button>
            {showImage && ( 
                <img src="aviso.jpg" alt="Imagem ao clicar" />
            )}
        </div>
        
    );
}
function Conteudo(){
  return(
    <div className="tds">
    <BotUm />
    </div>
  );
}

export default Conteudo;