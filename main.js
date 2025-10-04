
// Form submission via Formspree - replace FORM_ID with your Formspree form ID.
// Example Formspree endpoint: https://formspree.io/f/yourFormId
const FORM_ENDPOINT = "https://formspree.io/f/{FORM_ID}"; // <-- REPLACE {FORM_ID}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    try {
      const endpoint = FORM_ENDPOINT.replace('{FORM_ID}', localStorage.getItem('formspree_id') || '{FORM_ID}');
      if (endpoint.includes('{FORM_ID}')) {
        // If not configured, fallback to mailto (opens user's mail client)
        const email = 'info@drakos.software';
        const subject = encodeURIComponent('Web Sitesi - İletişim Formu');
        const body = Array.from(data.entries()).map(([k,v])=>`${k}: ${v}`).join('\n');
        window.location.href = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(body)}`;
        return;
      }
      const res = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        alert('Mesajınız gönderildi — en kısa zamanda cevap vereceğiz.');
        form.reset();
      } else {
        const json = await res.json();
        alert('Gönderim başarısız: ' + (json?.errors?.map(e=>e.message).join(', ') || res.statusText));
      }
    } catch(err) {
      console.error(err);
      alert('Bir hata oluştu. Lütfen e-posta ile iletişime geçin: info@drakos.software');
    }
  });
});
