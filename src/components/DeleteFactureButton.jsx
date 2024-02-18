import PropTypes from 'prop-types';

function DeleteFactureButton({ factureId, onFactureDeleted }) {
  const apiUrl = import.meta.env.VITE_APP_API_BASE_URL;
  const handleDelete = async () => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette facture ?")) {
      const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
        const token = userInfo?.token; // S'assurer d'utiliser le token actuel
      try {
        const response = await fetch(`${apiUrl}/api/invoice/${factureId}`, {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        }
        }); 
        const data = await response.json();
        if (data.success) {
          onFactureDeleted(); // Rafraîchir la liste des factures
        } else {
          alert("Erreur lors de la suppression de la facture.");
        }
      } catch (error) {
        console.error('Erreur lors de la suppression de la facture:', error);
      }
    }
  };

  return (
    <button className="btn btn-error btn-sm mx-2" onClick={handleDelete}>
      Supprimer
    </button>
  );
}

DeleteFactureButton.propTypes = {
  factureId: PropTypes.string.isRequired,
  onFactureDeleted: PropTypes.func.isRequired,
};

export default DeleteFactureButton;
