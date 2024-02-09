
import NavigationBreadcrumb from '../components/NavigationBreadcrumb';

const Instruction = () => {
  return (
    <>
      <div className="bg-base-100">
        <NavigationBreadcrumb pageName="Instructions" />
        <div className="p-5">
          <h2 className="text-lg font-bold mb-4">Comment utiliser l application</h2>
          <div className="space-y-4">
            <div className="border border-stroke p-4 rounded-lg shadow">
              <h3 className="font-medium">Étape 1: Connexion</h3>
              <p>Commencez par vous connecter à votre compte pour accéder aux fonctionnalités.</p>
            </div>

            <div className="border border-stroke p-4 rounded-lg shadow">
              <h3 className="font-medium">Étape 2: Navigation</h3>
              <p>Utilisez la barre de navigation pour trouver différentes sections comme les paramètres, les profils, etc.</p>
            </div>

            <div className="border border-stroke p-4 rounded-lg shadow">
              <h3 className="font-medium">Étape 3: Personnalisation</h3>
              <p>Accédez aux paramètres de votre compte pour personnaliser vos informations personnelles.</p>
            </div>

            <div className="border border-stroke p-4 rounded-lg shadow">
              <h3 className="font-medium">Étape 4: Utilisation des fonctionnalités</h3>
              <p>Explorez les différentes fonctionnalités offertes par l application, comme la gestion des données, l analyse, etc.</p>
            </div>

            <div className="border border-stroke p-4 rounded-lg shadow">
              <h3 className="font-medium">Support et aide</h3>
              <p>Pour toute assistance, n hésitez pas à contacter notre support ou à consulter notre FAQ.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instruction;
