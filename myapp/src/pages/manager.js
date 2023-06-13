import { useState } from "react";

export default function ManagerPage() {
  const [pName, setPName] = useState('');
  const [pPrice, setPPrice] = useState(0);
  const [pImage, setPImage] = useState(null);

  function sendForm(e) {
    e.preventDefault();
    console.log(pName);
    console.log(pPrice);

    var reader = new FileReader();

    reader.onloadend = function () {
      var imageData = reader.result;

      // Use the imageData variable to send the Base64 image data to your API or perform further actions.
      var imageExtension = pImage.name.split('.').pop();
      console.log(imageExtension);

      var product = {
        pName,
        pPrice,
        image: imageData,
        imageExtension: imageExtension,
      }
      console.log(product);

      fetch('http://localhost:4000/add-product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product),
      })
        .then(response => response.json())
        .then(data => {
          console.log('API Response:', data);
          // Handle the API response here
        })
        .catch(error => {
          console.error('Error:', error);
          // Handle errors here
        });
    };

    if (pImage) {
      reader.readAsDataURL(pImage);
    }
  }

  return (
    <form onSubmit={sendForm}>
      <label htmlFor="pName">Product Name: </label>
      <input type="text" name="pName" className="form" value={pName} onChange={(e) => { setPName(e.target.value) }} /><br /><br />
      <label htmlFor="pPrice">Product Price: </label>
      <input type="number" name="pPrice" className="form" value={pPrice} onChange={(e) => { setPPrice(parseFloat(e.target.value)) }} /><br /><br />
      <label htmlFor="pPrice">Product Image: </label>
      <input type="file" name="pImage" className="form" onChange={(e) => { setPImage(e.target.files[0]) }} /><br /><br />
      <button type="submit">ADD Product</button>
    </form>
  );
}
