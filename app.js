const translations = {
  ar: {
    dir: 'rtl',
    nav: { shop: 'تسوق', benefits: 'الفوائد', ingredients: 'المكونات', faq: 'الأسئلة', contact: 'تواصل', cta: 'اطلب الآن' },
    hero: { eyebrow: 'المتجر الرسمي', title: 'رونق، الخلطة الملكية للرجل العصري', copy: 'مكمل غذائي طبيعي بتجربة شراء واضحة، صور فاخرة، وطلب سريع من الواجهة الأمامية.', buy: 'شراء المنتج', learn: 'اكتشف التركيبة' },
    trust: { natural: 'مكونات طبيعية', jar: 'عبوة مركزة', preservatives: 'مواد حافظة' },
    buy: { rating: '★★★★★ اختيار ممتاز للروتين اليومي', title: 'الخلطة الملكية RAUNAQ', copy: 'عبوة 250g بتركيبة طبيعية مختارة. اختر الكمية ثم أكد طلبك مباشرة.', price: '390 DH', oldPrice: '490 DH', qty: 'الكمية', button: 'Commander', note: '', notice: 'تنبيه: هذا المنتج ليس دواء ولا يغني عن استشارة مختص عند وجود حالة صحية.' },
    benefits: { kicker: 'لماذا RAUNAQ؟', title: 'فوائد واضحة بدون وعود مبالغ فيها', copy: 'تجربة شراء أنيقة تجمع بين الثقة، وضوح المنتج، وسهولة الطلب.' },
    cards: { a: { title: 'الحيوية والخصوبة', copy: 'تركيبة مصممة لدعم النشاط الطبيعي والتوازن اليومي.' }, b: { title: 'طاقة مستدامة', copy: 'دعم لطيف للروتين اليومي بدون خطاب مبالغ فيه.' }, c: { title: 'توازن ومزاج', copy: 'مكونات مختارة للمساعدة في مقاومة الإرهاق اليومي.' }, d: { title: 'دعم المناعة', copy: 'مقاربة طبيعية للعناية العامة بالجسم.' } },
    ingredients: { kicker: 'النقاء أولا', title: 'مكونات طبيعية مختارة بعناية', copy: 'تقديم واضح للمكونات يزيد الثقة ويقلل التردد قبل الشراء.', b1: 'بدون مواد حافظة', b2: 'بدون ألوان صناعية', b3: 'جودة موثوقة', warning: 'يحفظ في مكان بارد وجاف، بعيدا عن متناول الأطفال.' },
    pack: { kicker: 'التغليف', title: 'تصميم يليق بمنتج فاخر', copy: 'صور المنتج مقصوصة بشكل أنيق ومقدمة داخل واجهة حديثة تساعد على اتخاذ قرار الشراء.', b1: 'عبوة 250g', b2: 'مناسب للإهداء', b3: 'تجربة راقية' },
    faq: { kicker: 'قبل الطلب', title: 'أسئلة مهمة', q1: 'كيف أطلب المنتج؟', a1: 'اضغط Commander، املأ بياناتك، وسيتم تجهيز طلبك كطلب أمامي مؤقت إلى حين ربط الخادم.', q2: 'هل المنتج دواء؟', a2: 'لا. هو مكمل غذائي طبيعي ولا يجب تقديمه كعلاج طبي.', q3: 'هل يمكن إضافة دفع إلكتروني؟', a3: 'نعم، تم تجهيز الكود ليستقبل خادما مستقبليا لمعالجة الطلبات والدفع.' },
    contact: { kicker: 'تواصل مباشر', title: 'تحدث معنا على قنواتك المفضلة', copy: 'اختر WhatsApp أو Instagram أو Facebook أو TikTok للتواصل السريع حول الطلبات والتوفر.' },
    order: { kicker: 'طلب مسبق', title: 'إتمام الطلب', copy: 'املأ بياناتك لتجهيز الطلب. سيتم حفظ مرجع الطلب محليا إلى حين ربط الخادم.', name: 'الاسم الكامل', phone: 'الهاتف', city: 'المدينة / البلد', note: 'ملاحظة اختيارية', summary: 'الملخص', submit: 'تأكيد الطلب', success: 'تم تجهيز الطلب. المرجع: ', error: 'تعذر تجهيز الطلب.' },
    chat: { button: 'مساعدة', subtitle: 'مساعد الطلبات', placeholder: 'اكتب سؤالك...', send: 'إرسال', hello: 'مرحبا، أنا مساعد RAUNAQ. يمكنني مساعدتك في السعر، الطلب، المكونات أو التواصل.', fallback: 'شكرا لرسالتك. لأسرع إجابة يمكنك ترك رقم الهاتف في نموذج الطلب أو التواصل عبر WhatsApp.', price: 'السعر الحالي هو 390 DH للعبوة 250g.', order: 'اضغط Commander، اختر الكمية، ثم املأ الاسم والهاتف والمدينة.' },
    sticky: { title: 'RAUNAQ 250g', copy: 'الخلطة الملكية متاحة للطلب', button: 'Commander' },
    footer: { copy: '© 2026 RAUNAQ. جميع الحقوق محفوظة.' }
  },
  fr: {
    dir: 'ltr',
    nav: { shop: 'Boutique', benefits: 'Bénéfices', ingredients: 'Ingrédients', faq: 'FAQ', contact: 'Contact', cta: 'Commander' },
    hero: { eyebrow: 'Boutique officielle', title: 'RAUNAQ, la formule royale pour l’homme moderne', copy: 'Un complément naturel premium avec une expérience d’achat claire, élégante et rapide.', buy: 'Acheter le produit', learn: 'Voir la formule' },
    trust: { natural: 'Ingrédients naturels', jar: 'Pot concentré', preservatives: 'Conservateurs' },
    buy: { rating: '★★★★★ Excellent choix pour la routine quotidienne', title: 'Formule Royale RAUNAQ', copy: 'Pot de 250g avec une formule naturelle sélectionnée. Choisissez la quantité puis confirmez la commande.', price: '390 DH', oldPrice: '490 DH', qty: 'Quantité', button: 'Commander', note: '', notice: 'Note : ce produit n’est pas un médicament et ne remplace pas l’avis d’un professionnel de santé.' },
    benefits: { kicker: 'Pourquoi RAUNAQ ?', title: 'Des bénéfices clairs, sans promesses excessives', copy: 'Une boutique efficace rassure, montre le produit et simplifie la décision d’achat.' },
    cards: { a: { title: 'Vitalité et fertilité', copy: 'Une formule pensée pour accompagner l’équilibre et l’activité naturelle.' }, b: { title: 'Énergie durable', copy: 'Un soutien doux pour la routine quotidienne.' }, c: { title: 'Équilibre et humeur', copy: 'Des ingrédients choisis pour aider à traverser la fatigue quotidienne.' }, d: { title: 'Soutien immunitaire', copy: 'Une approche naturelle pour le bien-être général.' } },
    ingredients: { kicker: 'Pureté d’abord', title: 'Des ingrédients naturels sélectionnés avec soin', copy: 'Présenter clairement les ingrédients augmente la confiance avant l’achat.', b1: 'Sans conservateurs', b2: 'Sans colorants artificiels', b3: 'Qualité fiable', warning: 'À conserver dans un endroit frais et sec, hors de portée des enfants.' },
    pack: { kicker: 'Packaging', title: 'Un design digne d’un produit premium', copy: 'Les photos sont mieux cadrées et intégrées dans une interface moderne qui valorise le produit.', b1: 'Pot 250g', b2: 'Prêt à offrir', b3: 'Expérience premium' },
    faq: { kicker: 'Avant commande', title: 'Questions fréquentes', q1: 'Comment commander ?', a1: 'Cliquez sur Commander, renseignez vos informations, puis validez la précommande frontend.', q2: 'Est-ce un médicament ?', a2: 'Non. C’est un complément alimentaire naturel et il ne doit pas être présenté comme un traitement médical.', q3: 'Un backend sera-t-il possible ?', a3: 'Oui, le code prépare déjà un payload propre pour une future API de commande.' },
    contact: { kicker: 'Contact direct', title: 'Parlez-nous sur votre canal préféré', copy: 'WhatsApp, Instagram, Facebook ou TikTok : choisissez le canal le plus simple pour demander la disponibilité ou suivre une commande.' },
    order: { kicker: 'Précommande', title: 'Finaliser la commande', copy: 'Remplissez vos informations. La commande est préparée côté frontend en attendant le backend.', name: 'Nom complet', phone: 'Téléphone', city: 'Ville / pays', note: 'Note optionnelle', summary: 'Récapitulatif', submit: 'Confirmer la commande', success: 'Commande préparée. Référence : ', error: 'Impossible de préparer la commande.' },
    chat: { button: 'Assistance', subtitle: 'Assistant commandes', placeholder: 'Écrivez votre question...', send: 'Envoyer', hello: 'Bonjour, je suis l’assistant RAUNAQ. Je peux aider pour le prix, la commande, les ingrédients ou le contact.', fallback: 'Merci pour votre message. Pour une réponse rapide, laissez votre téléphone dans le formulaire ou contactez WhatsApp.', price: 'Le prix actuel est 390 DH pour le pot 250g.', order: 'Cliquez sur Commander, choisissez la quantité, puis remplissez vos informations.' },
    sticky: { title: 'RAUNAQ 250g', copy: 'La formule royale est disponible', button: 'Commander' },
    footer: { copy: '© 2026 RAUNAQ. Tous droits réservés.' }
  },
  en: {
    dir: 'ltr',
    nav: { shop: 'Shop', benefits: 'Benefits', ingredients: 'Ingredients', faq: 'FAQ', contact: 'Contact', cta: 'Order' },
    hero: { eyebrow: 'Official store', title: 'RAUNAQ, the royal formula for modern men', copy: 'A premium natural supplement with a clean, elegant and fast shopping experience.', buy: 'Buy product', learn: 'Explore formula' },
    trust: { natural: 'Natural ingredients', jar: 'Concentrated jar', preservatives: 'Preservatives' },
    buy: { rating: '★★★★★ Excellent daily routine choice', title: 'RAUNAQ Royal Formula', copy: '250g jar with a carefully selected natural formula. Choose quantity and confirm your order.', price: '390 DH', oldPrice: '490 DH', qty: 'Quantity', button: 'Order', note: '', notice: 'Note: this product is not medicine and does not replace professional medical advice.' },
    benefits: { kicker: 'Why RAUNAQ?', title: 'Clear benefits without exaggerated claims', copy: 'A strong store builds trust, shows the product and makes buying simple.' },
    cards: { a: { title: 'Vitality and fertility', copy: 'A formula designed to support natural balance and daily activity.' }, b: { title: 'Sustained energy', copy: 'Gentle support for everyday routines.' }, c: { title: 'Balance and mood', copy: 'Selected ingredients to help support daily resilience.' }, d: { title: 'Immune support', copy: 'A natural approach to overall wellness.' } },
    ingredients: { kicker: 'Purity first', title: 'Carefully selected natural ingredients', copy: 'Clear ingredient presentation builds confidence before purchase.', b1: 'No preservatives', b2: 'No artificial colors', b3: 'Trusted quality', warning: 'Store in a cool, dry place, away from children.' },
    pack: { kicker: 'Packaging', title: 'A design worthy of a premium product', copy: 'Product images are better framed and integrated into a modern storefront.', b1: '250g jar', b2: 'Gift-ready', b3: 'Premium experience' },
    faq: { kicker: 'Before ordering', title: 'Frequently asked questions', q1: 'How do I order?', a1: 'Click Order, fill in your details and confirm the frontend pre-order.', q2: 'Is this medicine?', a2: 'No. It is a natural food supplement and should not be presented as medical treatment.', q3: 'Can a backend be added?', a3: 'Yes, the code already prepares a clean payload for a future order API.' },
    contact: { kicker: 'Direct contact', title: 'Reach us on your favorite channel', copy: 'WhatsApp, Instagram, Facebook or TikTok: choose the fastest channel for availability or order follow-up.' },
    order: { kicker: 'Pre-order', title: 'Complete your order', copy: 'Fill in your details. The order is prepared on the frontend while the backend is pending.', name: 'Full name', phone: 'Phone', city: 'City / country', note: 'Optional note', summary: 'Summary', submit: 'Confirm order', success: 'Order prepared. Reference: ', error: 'Unable to prepare the order.' },
    chat: { button: 'Help', subtitle: 'Order assistant', placeholder: 'Write your question...', send: 'Send', hello: 'Hi, I am the RAUNAQ assistant. I can help with price, ordering, ingredients or contact.', fallback: 'Thanks for your message. For a quick reply, leave your phone in the form or contact WhatsApp.', price: 'The current price is 390 DH for the 250g jar.', order: 'Click Order, choose quantity, then fill in your details.' },
    sticky: { title: 'RAUNAQ 250g', copy: 'The royal formula is available', button: 'Order' },
    footer: { copy: '© 2026 RAUNAQ. All rights reserved.' }
  },
  es: {
    dir: 'ltr',
    nav: { shop: 'Tienda', benefits: 'Beneficios', ingredients: 'Ingredientes', faq: 'FAQ', contact: 'Contacto', cta: 'Pedir' },
    hero: { eyebrow: 'Tienda oficial', title: 'RAUNAQ, la fórmula real para el hombre moderno', copy: 'Un suplemento natural premium con una experiencia de compra clara, elegante y rápida.', buy: 'Comprar producto', learn: 'Ver fórmula' },
    trust: { natural: 'Ingredientes naturales', jar: 'Envase concentrado', preservatives: 'Conservantes' },
    buy: { rating: '★★★★★ Excelente elección para la rutina diaria', title: 'Fórmula Real RAUNAQ', copy: 'Envase de 250g con fórmula natural seleccionada. Elige cantidad y confirma tu pedido.', price: '390 DH', oldPrice: '490 DH', qty: 'Cantidad', button: 'Pedir', note: '', notice: 'Nota: este producto no es un medicamento y no sustituye el consejo médico profesional.' },
    benefits: { kicker: '¿Por qué RAUNAQ?', title: 'Beneficios claros sin promesas exageradas', copy: 'Una tienda eficaz genera confianza, muestra el producto y facilita la compra.' },
    cards: { a: { title: 'Vitalidad y fertilidad', copy: 'Una fórmula pensada para acompañar el equilibrio y el rendimiento natural.' }, b: { title: 'Energía sostenida', copy: 'Apoyo suave para la rutina diaria.' }, c: { title: 'Equilibrio y ánimo', copy: 'Ingredientes seleccionados para apoyar la resiliencia diaria.' }, d: { title: 'Apoyo inmunitario', copy: 'Un enfoque natural para el bienestar general.' } },
    ingredients: { kicker: 'Pureza primero', title: 'Ingredientes naturales cuidadosamente seleccionados', copy: 'Mostrar los ingredientes con claridad aumenta la confianza antes de comprar.', b1: 'Sin conservantes', b2: 'Sin colorantes artificiales', b3: 'Calidad confiable', warning: 'Conservar en un lugar fresco y seco, lejos de los niños.' },
    pack: { kicker: 'Packaging', title: 'Un diseño digno de un producto premium', copy: 'Las fotos están mejor encuadradas e integradas en una tienda moderna.', b1: 'Envase 250g', b2: 'Listo para regalar', b3: 'Experiencia premium' },
    faq: { kicker: 'Antes de pedir', title: 'Preguntas frecuentes', q1: '¿Cómo hago un pedido?', a1: 'Haz clic en Pedir, completa tus datos y confirma el prepedido frontend.', q2: '¿Es un medicamento?', a2: 'No. Es un suplemento alimenticio natural y no debe presentarse como tratamiento médico.', q3: '¿Se puede agregar backend?', a3: 'Sí, el código ya prepara un payload limpio para una futura API de pedidos.' },
    contact: { kicker: 'Contacto directo', title: 'Háblanos en tu canal favorito', copy: 'WhatsApp, Instagram, Facebook o TikTok: elige el canal más rápido para disponibilidad o seguimiento.' },
    order: { kicker: 'Prepedido', title: 'Completar pedido', copy: 'Completa tus datos. El pedido se prepara en frontend mientras llega el backend.', name: 'Nombre completo', phone: 'Teléfono', city: 'Ciudad / país', note: 'Nota opcional', summary: 'Resumen', submit: 'Confirmar pedido', success: 'Pedido preparado. Referencia: ', error: 'No se pudo preparar el pedido.' },
    chat: { button: 'Ayuda', subtitle: 'Asistente de pedidos', placeholder: 'Escribe tu pregunta...', send: 'Enviar', hello: 'Hola, soy el asistente RAUNAQ. Puedo ayudar con precio, pedido, ingredientes o contacto.', fallback: 'Gracias por tu mensaje. Para una respuesta rápida, deja tu teléfono en el formulario o contacta por WhatsApp.', price: 'El precio actual es 390 DH para el envase 250g.', order: 'Haz clic en Pedir, elige cantidad y completa tus datos.' },
    sticky: { title: 'RAUNAQ 250g', copy: 'La fórmula real está disponible', button: 'Pedir' },
    footer: { copy: '© 2026 RAUNAQ. Todos los derechos reservados.' }
  }
};

function getValue(obj,path){return path.split('.').reduce((a,k)=>a&&a[k],obj)}
const select=document.getElementById('langSelect');
const qty=document.getElementById('qty');
const plus=document.getElementById('plus');
const minus=document.getElementById('minus');
const sticky=document.getElementById('sticky');
const orderButton=document.getElementById('orderButton');
const orderModal=document.getElementById('orderModal');
const orderForm=document.getElementById('orderForm');
const orderSummary=document.getElementById('orderSummary');
const orderStatus=document.getElementById('orderStatus');
const customerName=document.getElementById('customerName');
const customerPhone=document.getElementById('customerPhone');
const customerCity=document.getElementById('customerCity');
const customerNote=document.getElementById('customerNote');
const chatToggle=document.getElementById('chatToggle');
const chatPanel=document.getElementById('chatPanel');
const chatClose=document.getElementById('chatClose');
const chatLog=document.getElementById('chatLog');
const chatForm=document.getElementById('chatForm');
const chatInput=document.getElementById('chatInput');
const ORDER_API_ENDPOINT='';
const isMobilePage=location.pathname.toLowerCase().endsWith('mobile.html');
try{if(!isMobilePage&&matchMedia('(max-width: 760px)').matches&&sessionStorage.getItem('raunaqForceDesktop')!=='1')location.replace('mobile.html')}catch{}

function detectLanguage(){const supported=['ar','fr','en','es'];const langs=[navigator.language,...(navigator.languages||[])].filter(Boolean).map(lang=>lang.slice(0,2).toLowerCase());return langs.find(lang=>supported.includes(lang))||'ar'}
function getStoredLanguage(){try{const stored=localStorage.getItem('raunaqLang');return ['ar','fr','en','es'].includes(stored)?stored:detectLanguage()}catch{return detectLanguage()}}
function setStoredLanguage(lang){try{localStorage.setItem('raunaqLang',lang)}catch{}}
function currentTranslation(){return translations[select.value]||translations.ar}
function normalizeQuantity(){const value=Math.max(1,Math.min(99,parseInt(qty.value,10)||1));qty.value=String(value);return value}
function updateOrderSummary(){if(!orderSummary||!qty)return;orderSummary.textContent=`RAUNAQ 250g x ${normalizeQuantity()} - ${currentTranslation().buy.price}`}
function applyLang(lang){const t=translations[lang]||translations.ar;document.documentElement.lang=lang;document.documentElement.dir=t.dir;document.body.dir=t.dir;document.querySelectorAll('[data-i18n]').forEach(el=>{el.textContent=getValue(t,el.dataset.i18n)||''});document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{el.placeholder=getValue(t,el.dataset.i18nPlaceholder)||''});setStoredLanguage(lang);updateOrderSummary();resetChat(true)}
function openOrderModal(){updateOrderSummary();orderStatus.textContent='';orderStatus.className='mini';orderModal.classList.add('open');orderModal.setAttribute('aria-hidden','false');document.body.classList.add('modal-lock');setTimeout(()=>customerName.focus(),0)}
function closeOrderModal(){orderModal.classList.remove('open');orderModal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-lock');orderButton.focus()}
function buildOrderPayload(){return{product:{sku:'RAUNAQ-ROYAL-250G',name:'RAUNAQ Royal Formula',quantity:normalizeQuantity(),displayPrice:currentTranslation().buy.price},customer:{name:customerName.value.trim(),phone:customerPhone.value.trim(),city:customerCity.value.trim(),note:customerNote.value.trim()},locale:select.value,source:'github-pages-frontend',createdAt:new Date().toISOString()}}
async function submitOrder(payload){if(ORDER_API_ENDPOINT){const response=await fetch(ORDER_API_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});if(!response.ok)throw new Error('Order API failed');return response.json()}const reference='RQ-'+Date.now().toString(36).toUpperCase();const draft={reference,payload};try{localStorage.setItem('raunaqLastOrder',JSON.stringify(draft))}catch{}return draft}
function addChatMessage(text,from='bot'){const item=document.createElement('div');item.className=`chat-message ${from}`;item.textContent=text;chatLog.appendChild(item);chatLog.scrollTop=chatLog.scrollHeight}
function resetChat(quiet=false){if(!chatLog)return;chatLog.textContent='';if(!quiet)addChatMessage(currentTranslation().chat.hello)}
function answerChat(message){const text=message.toLowerCase();const t=currentTranslation().chat;if(text.includes('prix')||text.includes('price')||text.includes('precio')||text.includes('ثمن')||text.includes('سعر'))return t.price;if(text.includes('command')||text.includes('order')||text.includes('pedido')||text.includes('طلب'))return t.order;return t.fallback}
select.value=getStoredLanguage();
select.addEventListener('change',()=>applyLang(select.value));
plus.addEventListener('click',()=>{qty.value=String(normalizeQuantity()+1);normalizeQuantity();applyLang(select.value)});
minus.addEventListener('click',()=>{qty.value=String(normalizeQuantity()-1);normalizeQuantity();applyLang(select.value)});
qty.addEventListener('input',()=>{normalizeQuantity();applyLang(select.value)});
orderButton.addEventListener('click',openOrderModal);
document.querySelectorAll('[data-close-order]').forEach(el=>el.addEventListener('click',closeOrderModal));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&orderModal.classList.contains('open'))closeOrderModal()});
orderForm.addEventListener('submit',async event=>{event.preventDefault();const t=currentTranslation();orderStatus.textContent='';orderStatus.className='mini';try{const result=await submitOrder(buildOrderPayload());orderStatus.textContent=t.order.success+(result.reference||'OK');orderStatus.classList.add('modal-success');orderForm.reset()}catch{orderStatus.textContent=t.order.error;orderStatus.classList.add('modal-error')}});
chatToggle.addEventListener('click',()=>{const open=!chatPanel.classList.contains('open');chatPanel.classList.toggle('open',open);chatPanel.setAttribute('aria-hidden',String(!open));chatToggle.setAttribute('aria-expanded',String(open));if(open&&chatLog.children.length===0)resetChat()});
chatClose.addEventListener('click',()=>{chatPanel.classList.remove('open');chatPanel.setAttribute('aria-hidden','true');chatToggle.setAttribute('aria-expanded','false')});
chatForm.addEventListener('submit',event=>{event.preventDefault();const message=chatInput.value.trim();if(!message)return;addChatMessage(message,'user');chatInput.value='';setTimeout(()=>addChatMessage(answerChat(message)),220)});
window.addEventListener('scroll',()=>{sticky.classList.toggle('show',window.scrollY>window.innerHeight*.65);document.documentElement.style.setProperty('--parallax',String(Math.min(80,window.scrollY*.04)))},{passive:true});
applyLang(select.value);

const desktopVersion=document.getElementById('desktopVersion');
if(desktopVersion){desktopVersion.addEventListener('click',()=>{try{sessionStorage.setItem('raunaqForceDesktop','1')}catch{}})}
