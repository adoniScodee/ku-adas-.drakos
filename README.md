
Drakos Software — Hazır Tek Sayfa Site
=====================================

İçindekiler
-----------
- index.html
- css/style.css (önceden derlenmiş stil - doğrudan kullanabilirsiniz)
- css/src.css (Tailwind kaynak dosyası, Tailwind ile yeniden derlemek isterseniz)
- js/main.js (Formspree entegrasyonu için JS)
- assets/drakos.jpg (gönderdiğiniz logo)
- assets/project1.svg, project2.svg, project3.svg (örnek proje görselleri)
- package.json, tailwind.config.cjs, postcss.config.cjs (Tailwind geliştirme için)

Form (Formspree) Kurulumu
-------------------------
1) Formspree'de hesap açın: https://formspree.io
2) Yeni form oluşturun ve Form ID'nizi alın (ör. mgebqlkv)
3) `js/main.js` dosyasında FORM_ENDPOINT = "https://formspree.io/f/{FORM_ID}" satırını güncelleyin:
   - localStorage.setItem('formspree_id', 'YOUR_ID') kullanarak tarayıcıda test edebilirsiniz
4) Formspree ilk gönderimde e-posta doğrulaması isteyebilir - e-postanızı onaylayın.

Alternatif kolay yöntem:
- `index.html` içindeki form mailto fallback kullanır; eğer Formspree ID girilmemişse form verileri kullanıcının e-posta istemcisine yönlendirilir.

Tailwind geliştirme (opsiyonel)
-------------------------------
1) Node.js yüklü değilse yükleyin.
2) Terminalde proje klasöründe:
   npm install
   npm run build
3) `css/style.css` dosyası oluşturulacak (build script PostCSS ve Tailwind kullanacak).
Not: `css/style.css` zaten hazır ve çalışır — Tailwind kurmadan da siteyi direkt kullanabilirsiniz.

SEO, favicon ve meta
--------------------
- index.html içinde temel meta tag'lar eklendi. Favicon için `assets/drakos.jpg` kullanıldı.
- Daha iyi SEO için sayfa başlıkları, açıklamalar ve Open Graph etiketleri ekleyebilirsiniz.

Deploy (Netlify / Vercel)
-------------------------
Netlify:
1) Netlify hesabı oluşturun.
2) 'New site from Git' seçin, GitHub reposunu bağlayın ve bu klasörü repo içine push edin.
3) Build komutu: (statik site ise boş bırakılabilir) Publish directory: `/` veya `public`
4) Alternatif: zip'i Netlify Drag & Drop ile publish edebilirsiniz.

Vercel:
1) Vercel hesabı oluşturun.
2) 'New Project' -> Import Git repository
3) Build komutu: (isteğe bağlı) `npm run build` - Output directory: `./`
4) Deploy butonuna basın.

NOTLAR
-----
- Tüm bağlantılar ve butonlar canlıdır (WhatsApp, telefon, mailto).
- Form için Formspree ID eklemeniz gerekmektedir; README'de adımlar var.
- İsterseniz ben bu repo'yu doğrudan GitHub için hazır zip olarak oluşturup yükleyebilirim (zipleme zaten yapıldı). 
