import  { useState } from 'react';

function UploadExcelButton() {
    const [selectedFile, setSelectedFile] = useState(null);

    // Assurez-vous que l'URL de l'API est correctement définie dans vos variables d'environnement
    // Par exemple, VITE_APP_API_BASE_URL = 'http://localhost:5000'
    const apiUrl = import.meta.env.VITE_APP_API_BASE_URL;

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await fetch(`${apiUrl}/api/invoice/upload`, {
                method: 'POST',
                body: formData, // Pas besoin de définir 'Content-Type' manuellement
            });

            // Vérifier si la requête a réussi
            if (!response.ok) {
                const errorText = await response.text(); // Obtenez la réponse textuelle de l'erreur
                throw new Error(errorText || 'Erreur lors de l\'upload du fichier');
            }

            const jsonResponse = await response.json(); // Parsez la réponse JSON
            console.log('Success:', jsonResponse);
            alert('Fichier uploadé avec succès');
        } catch (error) {
            console.error('Erreur lors de l\'upload:', error.message);
            alert(`Erreur lors de l'upload du fichier: ${error.message}`);
        }
    };

    return (
        <div>

            <input className='file-input file-input-bordered file-input-primary' type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
            <button className='btn btn-primary mt-1' onClick={handleUpload} disabled={!selectedFile}>
                Upload Excel File
            </button>
        </div>
    );
}

export default UploadExcelButton;
