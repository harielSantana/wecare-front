import React, { useState } from 'react'

const Information = () => {

    
    const [baseImage, setBaseImage] = useState("");
    
    
    function handleSubmit(base64){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Client-ID aa5f9a15c7101dd");
        
        var formdata = new FormData();
        formdata.append("image", base64.split(",")[1]);
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };
        
        fetch("https://api.imgur.com/3/image", requestOptions)
          .then(response => response.text())
          .then(result => 
            {
                var a = JSON.stringify(result)
                console.log(a)
                console.log(result)
            })
          .catch(error => console.log('error', error));
    }

    const uploadImage = async (e) => {
      const file = e.target.files[0];
      const base64 = await convertBase64(file);
      setBaseImage(base64);
      handleSubmit(base64)
    };

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
    });
  };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="file"
                onChange={(e) => {
                uploadImage(e);
                }}
            />
            <br></br>
            <img src={baseImage} height="200px" />
            <button>Enviar</button>
        </form>
    )
}

export default Information;
