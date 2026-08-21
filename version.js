/* =====================================================================
   SICOOB · Iniciativas Explorer — Manifesto de versão (JSONP)
   ---------------------------------------------------------------------
   COMO USAR:
   1) Hospede este arquivo no seu repositório GitHub (ex.: na raiz).
   2) O HTML vai carregá-lo via <script> e chamar __onVersion(...).
   3) A CADA nova versão do HTML, atualize APENAS os campos abaixo:
        - version : número inteiro, MAIOR que a versão anterior
        - url     : link de download da versão nova (OneDrive/SharePoint)
        - notas   : o que mudou (aparece no aviso, opcional)
        - data    : data da publicação (opcional, informativo)
   ---------------------------------------------------------------------
   IMPORTANTE:
   - "version" precisa ser um NÚMERO (sem aspas). Ex.: 32
   - Deve ser SEMPRE maior que o APP_VERSION embutido no HTML para
     que o aviso apareça.
   - Servir via GitHub Pages ou jsDelivr:
       GitHub Pages : https://SEU_USUARIO.github.io/SEU_REPO/version.js
       jsDelivr     : https://cdn.jsdelivr.net/gh/SEU_USUARIO/SEU_REPO@main/version.js
     (prefira jsDelivr: cache global + CORS liberado)
   ===================================================================== */

(function () {
  var info = {
    version: 38,
    url: "https://ibm.box.com/s/khf0lgzv52iy4blpm0gmxaphvpkfnudn",
    nome: "SICOOB_Iniciativas_Explorer_Carbon_v38.html",
    notas: "Correção do bug durante a atualização do nome da iniciativa.",
    data: "2026-08-20",
    obrigatoria: true   // true = aviso não pode ser dispensado (bloqueante)
  };

  // Entrega o manifesto ao HTML (função definida na página).
  if (typeof window !== "undefined" && typeof window.__onVersion === "function") {
    window.__onVersion(info);
  } else {
    // Fallback: guarda para o caso do handler ainda não ter carregado.
    try { window.__SICOOB_VERSION__ = info; } catch (e) {}
  }
})();
