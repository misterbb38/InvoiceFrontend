// import jsPDF from 'jspdf';
// import PropTypes from 'prop-types';
// import logoLeft from '../images/cards/cards-01.png';
// import logoRight from '../images/cards/cards-02.png';

// function GeneratePDFButton({ invoice, currency }) {
//     const generatePDF = () => {
//         const doc = new jsPDF();
//         const marginBottom = 10;
    
//         // Ajout des logos et du texte central
//         const imgLeft = new Image();
//         imgLeft.src = logoLeft;
//         const imgRight = new Image();
//         imgRight.src = logoRight;
//         doc.addImage(imgLeft, 'PNG', 20, 15, 30, 30);
//         doc.addImage(imgRight, 'PNG', 160, 15, 30, 30);
//         doc.setFontSize(14);
//         doc.text("", 105, 30, null, null, "center");
    
//         doc.setFillColor(144, 238, 144); // Vert clair
//         doc.rect(20, 50, 170, 2, 'F'); // Première ligne verte
    
//         // Informations du client
//         const clientInfoStartY = 60;
//         doc.setFontSize(10);
//         doc.text(`Client: ${invoice.client.name}`, 120, clientInfoStartY);
//         doc.text(`Adresse: ${invoice.client.address}`, 120, clientInfoStartY + 10);
//         doc.text(`Email: ${invoice.client.email}`, 120, clientInfoStartY + 20);
    
//         // En-tête de la facture
//         doc.setFontSize(14);
//         doc.text("GIABA", 20, clientInfoStartY);
//         doc.text("GIABA", 20, clientInfoStartY);

//         doc.text(`Date: ${new Date(invoice.date).toLocaleDateString()}`, 20, clientInfoStartY + 10);
    
//         // En-tête des articles avec fond vert
//         const headersTop = clientInfoStartY + 30 + marginBottom;
//         doc.setFillColor(144, 238, 144);
//         doc.rect(20, headersTop, 170, 10, 'F');
//         doc.setTextColor(255, 255, 255);
//         doc.text("Ref", 22, headersTop + 8);
//         doc.text("Désignation", 52, headersTop + 8);
//         doc.text("Qte", 122, headersTop + 8);
//         doc.text("Prix", 142, headersTop + 8);
//         doc.text("Total", 162, headersTop + 8);
    
//         let currentY = headersTop + 20;
//         doc.setFontSize(10);
//         doc.setTextColor(0, 0, 0);
//         invoice.items.forEach((item, index) => {
//           // Calcul de la hauteur du texte pour cet article
//           const itemTextHeight = doc.splitTextToSize(item.description, 60).length * 5;
        
//           // Hauteur totale de l'article, incluant la marge
//           const itemHeight = itemTextHeight + 5; // Ajouter une marge
        
//           // Vérifier si une nouvelle page est nécessaire
//           if (currentY + itemHeight > 280) {
//             doc.addPage();
//             currentY = 20;
//           }
        
//           // Calculer la position Y centrale pour le texte de l'article
//           const textY = currentY + itemHeight / 2 - itemTextHeight / 2;
        
//           // Ajouter les textes de l'article
//           doc.text(item.ref, 22, textY);
//           doc.text(doc.splitTextToSize(item.description, 60), 52, textY);
//           doc.text(item.quantity.toString(), 122, textY);
//           doc.text(`${item.price.toFixed(2)} ${currency}`, 142, textY);
//           doc.text(`${item.total.toFixed(2)} ${currency}`, 162, textY);
        
//           // Ajouter une ligne noire entre les articles
//           if (index < invoice.items.length - 1) {
//             doc.setDrawColor(0);
//             doc.line(20, currentY + itemHeight + 2, 190, currentY + itemHeight + 2);
//           }
        
//           // Mettre à jour la position Y pour le prochain article
//           currentY += itemHeight + 5;
//         });
        
    
//         // doc.setFillColor(144, 238, 144);
//         // doc.rect(20, currentY + 10, 170, 2, 'F');
    
//         // Total
//         doc.setFontSize(12);
//         if (currentY > 280) {
//           doc.addPage();
//           currentY = 20;
//         }
//         doc.text(`MONTANT TOTAL HT: ${invoice.total.toFixed(2)} ${currency}`, 120, currentY);
        
//             // Informations bancaires
//             currentY += 20;
//     const bankInfo = [
//       "COORDONNEES BANCAIRES",
//       "SOCIETE GENERALE",
//       "RELEVE D'IDENTITE BANCAIRE",
//       "Titulaire du compte: 01600 POMPIDOU",
//       "Domiciliation: XOF",
//       "Code agnce: SN011 01016 004000 334878 23",
//       "Devise du compte: SN08 SN011 01016 004000 334878 23",
//       "RIB: SGSNSNDAXXX",
//       "IBAN: 0",
//       "BIC-SWIFT: 0"
//     ];

//     doc.setTextColor(255, 255, 255); // Texte blanc pour les informations bancaires
//     bankInfo.forEach((line, index) => {
//       if (index === 0) {
//         doc.setFillColor(0, 100, 0); // Vert foncé pour le titre
//         doc.rect(20, currentY, 90, 10, 'F');
//         doc.setFontSize(11);
//         doc.text(line, 22, currentY + 7);
//       } else {
//         doc.setFillColor(0, 128, 0); // Vert un peu plus clair pour les informations
//         doc.rect(20, currentY, 90, 10, 'F');
//         doc.setFontSize(10);
//         doc.text(line, 22, currentY + 7);
//       }
//       currentY += 10; // Ajoute de l'espace entre les lignes d'informations
//     });

//     // Dernière ligne verte après les informations bancaires
//     currentY += 10; // Petit espace après le total
//     doc.setFillColor(144, 238, 144); // Vert clair pour la ligne finale
//     doc.rect(20, currentY, 170, 2, 'F');
    

//         doc.save(`facture-${invoice._id}.pdf`);
//       };

//   return <button className="btn btn-primary btn-sm mr-2" onClick={generatePDF}>Générer PDF</button>;
// }

// GeneratePDFButton.propTypes = {
//   invoice: PropTypes.object.isRequired,
//   currency: PropTypes.string.isRequired,
// };

// export default GeneratePDFButton;


import jsPDF from 'jspdf';
import PropTypes from 'prop-types';
import logoLeft from '../images/logo1.png';
import logoRight from '../images/logo2.png';

function GeneratePDFButton({ invoice, currency }) {
    const generatePDF = () => {
        const doc = new jsPDF();

        const addFooter = () => {
          const footerY = 277; // Y position for footer; adjust if needed
          doc.setFillColor(144, 238, 144); // Vert clair
          doc.rect(20, footerY, 170, 2, 'F');
          doc.setFontSize(10);
          doc.setTextColor(0, 0, 0);
          doc.text("Adresse : Sacré Cœur 3, Villa n° 8974 – Code Postal : 11000, Dakar,", 50, footerY + 6);
          doc.text("E-mail : kebsamadou@gmail.com / amadoukkebe@palabresak2.com", 50, footerY + 12);
          doc.text("Site Web : www.palabresak2.com, Tél : +221 77 871 25 11", 50, footerY + 18);
      };

      // Ajouter le pied de page à la première page
      addFooter();

        // Ajout des logos et du texte central
        const imgLeft = new Image();
        imgLeft.src = logoLeft;
        const imgRight = new Image();
        imgRight.src = logoRight;
        doc.addImage(imgLeft, 'PNG', 20, 5, 30, 30);
        // doc.addImage(imgRight, 'PNG', 140, 5, 60, 30);
        doc.setFont("helvetica", "bold");
        doc.text("Traduction & Interprétation ", 140, 20);
        doc.text("Anglais <> Français <> Portugais ", 140, 25);
        doc.setFontSize(14);
        doc.text("", 105, 30, null, null, "center");

        doc.setFillColor(144, 238, 144); // Vert clair
        doc.rect(20, 35, 170, 2, 'F'); // Première ligne verte

        // Informations du client
        let currentY = 45; // Mise à jour pour utiliser currentY pour la position initiale
        doc.setFontSize(12); // Changez la taille à la valeur souhaitée
        doc.setFont("helvetica", "bold"); // Définissez la police en Helvetica et le style en gras
        doc.text(` ${invoice.client.name}`, 120, currentY);
        doc.setFontSize(10);
        doc.text(`${invoice.client.address}`, 120, currentY + 5);
        doc.text(`${invoice.client.email}`, 120, currentY + 10);
        doc.text(`${invoice.client.telephone}`, 120, currentY + 15);

        // En-tête de la facture
        doc.setFontSize(10);
        // doc.setFont("helvetica", "bold"); // Définissez la police en Helvetica et le style en gras
        // doc.text("GIABA", 40, currentY);
        // doc.setFontSize(10);
        // doc.text("palabre258@gmail.com", 30, currentY + 5);
        // doc.text("www.palabresak2.com", 30, currentY + 10);
        doc.text(`Date: ${new Date(invoice.date).toLocaleDateString()}`, 30, currentY );

        // En-tête des articles avec fond vert
        currentY += 25 ; // Adjust for marginBottom and header height
        doc.setFillColor(144, 238, 144);
        doc.rect(20, currentY, 170, 10, 'F');
        doc.setTextColor(255, 255, 255);
        doc.text("Ref", 22, currentY + 8);
        doc.text("Désignation", 42, currentY + 8);
        doc.text("Qte", 112, currentY + 8);
        doc.text("Prix", 138, currentY + 8);
        doc.text("Total", 166, currentY + 8);
        currentY += 20;

        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        invoice.items.forEach((item, index) => {
            const itemTextHeight = doc.splitTextToSize(item.description, 60).length * 5;
            const itemHeight = itemTextHeight + 5; // Ajouter une marge
            if (currentY + itemHeight > 280) {
                doc.addPage();
                currentY = 20; // Réinitialiser la position Y après l'ajout d'une page
                addFooter();
            }
            const textY = currentY + itemHeight / 2 - itemTextHeight / 2;
            doc.text(item.ref, 22, textY);
            doc.text(doc.splitTextToSize(item.description, 60), 42, textY);
            doc.text(item.quantity.toString(), 112, textY);
            doc.text(`${item.price.toFixed(2)} ${currency}`, 132, textY);
            doc.text(`${item.total.toFixed(2)} ${currency}`, 162, textY);
            if (index < invoice.items.length - 1) {
                doc.setDrawColor(0);
                doc.line(20, currentY + itemHeight + 2, 190, currentY + itemHeight + 2);
            }
            currentY += itemHeight + 5;
        });

        // Vérification pour l'ajout d'une page avant le total et les informations bancaires
        if (currentY > 280) {
            doc.addPage();
            currentY = 20; // Réinitialiser la position Y pour le contenu de la nouvelle page
            addFooter();
        }

        // Total
        doc.setFontSize(12);
        doc.text(`MONTANT TOTAL HT: ${invoice.total.toFixed(2)} ${currency}`, 120, currentY);

        // Informations bancaires
        currentY += 20; // Espace avant les informations bancaires
        const bankInfo = [
            "COORDONNEES BANCAIRES", "SOCIETE GENERALE", "RELEVE D'IDENTITE BANCAIRE",
            "Titulaire du compte: 01600 POMPIDOU", "Domiciliation: XOF",
            "Code agence: SN011 01016 004000 334878 23", "Devise du compte: SN08 SN011 01016 004000 334878 23",
            "RIB: SGSNSNDAXXX", "IBAN: 0", "BIC-SWIFT: 0"
        ];
        bankInfo.forEach((line, index) => {
          if (currentY > 270) { // Vérification avant chaque ligne pour les informations bancaires
              doc.addPage();
              currentY = 20;
              addFooter();
          }
          
          // Réduire la longueur du rectangle et ajuster la taille de l'écriture
          const rectLength = 70; // Nouvelle longueur du rectangle, ajustez selon les besoins
          const fontSize = 8; // Nouvelle taille de l'écriture, ajustez selon les besoins
          
          if (index === 0) {
              doc.setFillColor(0, 100, 0);
              doc.rect(20, currentY, rectLength, 5, 'F');
              doc.setFontSize(fontSize);
          } else {
              doc.setFillColor(0, 128, 0);
              doc.rect(20, currentY, rectLength, 5, 'F');
              doc.setFontSize(fontSize);
          }
          
          doc.setTextColor(255, 255, 255);
          // Assurez-vous que le texte est bien aligné à l'intérieur du rectangle plus petit
          doc.text(line, 22, currentY + 3);
          currentY += 5;
      });
      

        // Dernière ligne verte
        if (currentY > 270) { // Encore une vérification avant d'ajouter la ligne finale
            doc.addPage();
            currentY = 20;
            addFooter();
        }
        currentY += 20; // Espace avant les informations bancaires
        //doc.setFillColor(144, 238, 144);
        //doc.rect(20, currentY, 170, 2, 'F');
        // doc.setFontSize(10);
        // doc.setTextColor(0, 0, 0);
        // doc.text("Adresse : Sacré Cœur 3, Villa n° 8974 – Code Postal : 11000, Dakar,", 50, currentY + 6);
        // doc.text("E-mail : kebsamadou@gmail.com / amadoukkebe@palabresak2.com", 50, currentY + 12);
        // doc.text("Site Web : www.palabresak2.com, Tél : +221 77 871 25 11", 50, currentY + 18);
      

        doc.save(`facture-${invoice._id}.pdf`);
    };

    return <button className="btn btn-primary btn-sm mr-2" onClick={generatePDF}>Générer PDF</button>;
}

GeneratePDFButton.propTypes = {
    invoice: PropTypes.object.isRequired,
    currency: PropTypes.string.isRequired,
};

export default GeneratePDFButton;
