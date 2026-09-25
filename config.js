/* ==========================================================================
   CONFIGURATION — SEUL FICHIER À MODIFIER (comptes, clés API, modèles)
   ==========================================================================
   Ajoute, supprime ou modifie une ligne pour chaque compte.
   -------------------------------------------------------------------------- */
const ACCOUNTS = [
  { id: "A", name: "4B", icon: "book-open", key: "AQ.Ab8RN6IKIMZuvFFsbCalWvDAthVeA5Xq3k5ODm-msisP1oqtOw" },
  { id: "B", name: "4C", icon: "globe",     key: "AQ.Ab8RN6JmOijU5oS-7E_VGF2aB_2FL0NKXRemg0U1wh2YcGCT3Q" },
];

// Modèles essayés dans l'ordre : si le 1er est surchargé (503) ou introuvable (404), on passe au suivant.
const MODELS_CHAT  = ["gemini-3.8-flash", "gemini-3.5-flash", "gemini-3.1-flash-lite"]; // chat + analyse d'image
const MODELS_IMAGE = ["gemini-3.1-flash-image", "gemini-3.1-flash-lite-image"];          // génération d'image

/* Consigne donnée à l'IA pour cadrer son rôle pédagogique */
const SYSTEM_PROMPT = "Tu es un assistant pédagogique pour des élèves de collège (11-15 ans) en Histoire, Géographie et Enseignement moral et civique. Réponds en français, avec des mots simples, de façon claire et exacte. Invite l'élève à réfléchir et à vérifier ses sources plutôt que de tout faire à sa place.";
