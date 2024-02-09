import  { useState } from 'react';

function AddClientForm() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(true);
   
     // Assurez-vous que votre variable d'environnement est définie dans votre fichier .env
    // Exemple: REACT_APP_API_BASE_URL=https://invoice-api-app.onrender.com
    const apiUrl = process.env.APP_API_BASE_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();
        

        try {
            const response = await fetch(`${apiUrl}/api/client`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, address, email, telephone })
            });

            if (response.ok) {
                setToastMessage("Client ajouté avec succès");
                setIsSuccess(true);
                setName('');
                setAddress('');
                setEmail('');
                setTelephone('');
            } else {
                setToastMessage("Échec de l'ajout du client");
                setIsSuccess(false);
            }
        } catch (error) {
            setToastMessage("Erreur lors de l'envoi du formulaire");
            setIsSuccess(false);
        }

        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000); // Cache le toast après 3 secondes
    };

    return (
        <>
            {showToast && (
                <div className="toast toast-center toast-middle">
                    <div className={`alert ${isSuccess ? 'alert-success' : 'alert-error'}`}>
                        <span className="text-white">{toastMessage}</span>
                    </div>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='text-sm font-medium base-content'>Nom</label><br /> 
                    <input 
                        type="text" 
                        value={name} 
                        onChange={e => setName(e.target.value)} 
                        required
                        className='mt-2 w-80 rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 base-content focus:border-primary focus-visible:outline-none dark:border-strokedark bg-base-300  dark:focus:border-primary'
                    />
                </div>
                <div>
                    <label className='text-sm font-medium base-content'>Adresse</label><br />
                    <input 
                        type="text" 
                        value={address} 
                        onChange={e => setAddress(e.target.value)} 
                        required
                        className='w-80 mt-2 rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 base-content focus:border-primary focus-visible:outline-none dark:border-strokedark bg-base-300  dark:focus:border-primary'
                    />
                </div>
                <div>
                    <label className='text-sm font-medium base-content'>Email</label><br />
                    <input 
                        type="email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        className='w-80 mt-2 rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 base-content focus:border-primary focus-visible:outline-none dark:border-strokedark bg-base-300  dark:focus:border-primary'
                    />
                </div>
                <div>
                    <label className='text-sm font-medium base-content'>Téléphone</label><br />
                    <input 
                        type="tel" 
                        value={telephone} 
                        onChange={e => setTelephone(e.target.value)} 
                        required
                        className='w-80 mt-2 rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 base-content focus:border-primary focus-visible:outline-none dark:border-strokedark bg-base-300  dark:focus:border-primary'
                    />
                </div>
                <button type="submit" className='mt-2 mb-2 btn btn-primary'>Ajouter le client</button>
            </form>
        </>
    );
}

export default AddClientForm;
