const stepData = {
  es: [
    "Introduce la SIM a tu teléfono.",
    "Llama al 103 y digita tu número de RUT o pasaporte.",
    "Recibirás un SMS con los pasos a seguir.",
    "Te sugerimos tener a mano tu carnet de identidad o pasaporte vigente y sigue los pasos para activar tu número.",
    "Una vez completado el flujo, activa y desactiva el modo avión.",
    "Por último, recibirás un SMS de confirmación con la activación de tu servicio."
  ],
  en: [
    "Insert the SIM into your phone.",
    "Call 103 and enter your RUT or passport number.",
    "You will receive an SMS with the steps to follow.",
    "We suggest having your valid ID or passport on hand and follow the steps to activate your number.",
    "Once the process is complete, turn airplane mode on and off.",
    "Finally, you will receive a confirmation SMS with the activation of your service."
  ],
  fr: [
    "Insérez la carte SIM dans votre téléphone.",
    "Appelez le 103 et saisissez votre numéro de RUT ou de passeport.",
    "Vous recevrez un SMS avec les étapes à suivre.",
    "Nous vous suggérons d’avoir votre pièce d’identité ou passeport valide à portée de main et de suivre les étapes pour activer votre numéro.",
    "Une fois le processus terminé, activez puis désactivez le mode avion.",
    "Enfin, vous recevrez un SMS de confirmation de l’activation de votre service."
  ],
  pr: [
    "Insira o chip (SIM) no seu telefone."
    "Ligue para 103 e digite seu número de identificação (RUT) ou passaporte."
    "Você receberá um SMS com os passos a seguir."
    "Sugerimos que tenha em mãos sua carteira de identidade ou passaporte válido e siga os passos para ativar seu número."
    "Assim que o processo for concluído, ative e desative o modo avião."
    "Por fim, você receberá um SMS de confirmação com a ativação do seu serviço."
  ]
};

const headerTextMap = {
  es: "Si tienes una SimCard o un Chip prepago WOM y quieres activarlo de forma correcta y segura, recuerda que a contar del 4 de febrero de 2025, actualizamos el procedimiento de activación de simcards en WOM.",
  en: "If you have a WOM prepaid SIM card and want to activate it correctly and safely, remember that starting February 4, 2025, we’ve updated the SIM activation procedure at WOM.",
  fr: "Si vous avez une carte SIM prépayée WOM et que vous souhaitez l’activer correctement et en toute sécurité, rappelez-vous qu’à partir du 4 février 2025, nous avons mis à jour la procédure d’activation des cartes SIM chez WOM.",
  pr: "Se você tem um SimCard ou um chip pré-pago WOM e deseja ativá-lo de forma correta e segura, lembre-se que a partir de 4 de fevereiro de 2025, atualizaremos o procedimento de ativação de simcards na WOM."
};

const titleMap = {
  es: "¿Cómo activar mi chip prepago?",
  en: "How to activate my prepaid SIM?",
  fr: "Comment activer ma carte SIM prépayée ?",
  pr: "Como ativar meu chip pré-pago?"
};

function changeLanguage(lang) {
  const steps = stepData[lang];
  const stepList = document.getElementById("step-list");
  stepList.textContent = '';
  steps.forEach(step => {
    const li = document.createElement("li");
    li.innerHTML = step;
    stepList.appendChild(li);
  });

  document.getElementById("main-title").innerText = titleMap[lang];
  document.getElementById("header-text").innerText = headerTextMap[lang];
}

// Inicializar con español por defecto
changeLanguage('es');
