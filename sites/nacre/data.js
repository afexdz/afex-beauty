/* Nacre — salon de coiffure et d'ongles fictif (démonstration). Données et textes FR / EN / AR. */
window.D = {
  wa: "213550284873",
  rates: { DZD: 1, EUR: 1 / 150, USD: 1 / 132 },
  phones: [["+213", "DZ"], ["+33", "FR"], ["+34", "ES"], ["+39", "IT"], ["+32", "BE"], ["+41", "CH"], ["+44", "GB"], ["+49", "DE"], ["+1", "CA/US"], ["+216", "TN"], ["+212", "MA"], ["+90", "TR"], ["+971", "AE"], ["+974", "QA"], ["+966", "SA"]],
  cats: [
    { id: "coiffure", n: { fr: "Coiffure", en: "Hair", ar: "الشعر" }, img: "hero/brushing.webp", pos: "40% 40%" },
    { id: "couleur", n: { fr: "Couleur", en: "Colour", ar: "الصبغة" }, img: "hero/couleur.webp", pos: "50% 40%" },
    { id: "ongles", n: { fr: "Ongles", en: "Nails", ar: "الأظافر" }, img: "carte/rose.webp", pos: "50% 40%" },
    { id: "mariee", n: { fr: "Mariée", en: "Bridal", ar: "العروس" }, img: "carte/mariee.webp", pos: "50% 30%" }
  ],
  /* id, catégorie, durée en minutes, prix en DA */
  svc: [
    { id: "brushing", c: "coiffure", m: 40, p: 2000, n: { fr: "Brushing", en: "Blow-dry", ar: "سشوار" }, d: { fr: "Lavage, brushing et finition à la brosse ronde.", en: "Wash, blow-dry and round-brush finish.", ar: "غسل وسشوار وتصفيف بالفرشاة المستديرة." } },
    { id: "coupe", c: "coiffure", m: 60, p: 3500, n: { fr: "Coupe et brushing", en: "Cut and blow-dry", ar: "قص وسشوار" }, d: { fr: "Diagnostic, coupe sur mesure et brushing.", en: "Consultation, tailored cut and blow-dry.", ar: "استشارة وقصّة على مقاسك وسشوار." } },
    { id: "soin", c: "coiffure", m: 45, p: 3000, n: { fr: "Soin profond", en: "Deep treatment", ar: "علاج عميق" }, d: { fr: "Masque réparateur chaud, massage du cuir chevelu.", en: "Warm repair mask and scalp massage.", ar: "قناع مرمّم دافئ وتدليك فروة الرأس." } },
    { id: "lissage", c: "coiffure", m: 150, p: 12000, n: { fr: "Lissage à la kératine", en: "Keratin smoothing", ar: "فرد بالكيراتين" }, d: { fr: "Cheveux lisses et souples pendant plusieurs mois.", en: "Smooth, supple hair for several months.", ar: "شعر أملس وناعم لعدة أشهر." } },
    { id: "chignon", c: "coiffure", m: 60, p: 4500, n: { fr: "Chignon de soirée", en: "Evening updo", ar: "تسريحة سهرة مرفوعة" }, d: { fr: "Chignon tenu pour la soirée, de la fête au dîner.", en: "A hold that lasts all evening.", ar: "تسريحة ثابتة طوال السهرة." } },
    { id: "racines", c: "couleur", m: 90, p: 6500, n: { fr: "Couleur des racines", en: "Root colour", ar: "صبغة الجذور" }, d: { fr: "Couvrez les racines, ton sur ton.", en: "Cover roots, tone on tone.", ar: "تغطية الجذور بنفس اللون." } },
    { id: "couleur", c: "couleur", m: 120, p: 9000, n: { fr: "Couleur complète", en: "Full colour", ar: "صبغة كاملة" }, d: { fr: "Nouvelle teinte, longueurs et racines.", en: "A new shade, lengths and roots.", ar: "لون جديد للأطراف والجذور." } },
    { id: "balayage", c: "couleur", m: 210, p: 15000, n: { fr: "Balayage", en: "Balayage", ar: "بالاياج" }, d: { fr: "Éclaircissement à la main, effet naturel.", en: "Hand-painted lightening, natural effect.", ar: "تفتيح يدوي بنتيجة طبيعية." } },
    { id: "gloss", c: "couleur", m: 45, p: 3500, n: { fr: "Gloss et patine", en: "Gloss and toner", ar: "غلوس وتعديل اللون" }, d: { fr: "Reflets et brillance, neutralise les tons jaunes.", en: "Shine and reflections, cancels yellow tones.", ar: "لمعان وانعكاسات وتحييد الدرجات الصفراء." } },
    { id: "semi", c: "ongles", m: 60, p: 2500, n: { fr: "Pose semi-permanent", en: "Gel polish", ar: "طلاء شبه دائم" }, d: { fr: "Limage, cuticules et vernis qui tient trois semaines.", en: "Shaping, cuticles and a polish that lasts three weeks.", ar: "برد وعناية بالجلد وطلاء يدوم ثلاثة أسابيع." } },
    { id: "gel", c: "ongles", m: 90, p: 4500, n: { fr: "Pose gel", en: "Gel extensions", ar: "تركيب جل" }, d: { fr: "Rallongez et renforcez, forme au choix.", en: "Lengthen and strengthen, any shape.", ar: "تطويل وتقوية بالشكل الذي تختارينه." } },
    { id: "art", c: "ongles", m: 30, p: 1200, n: { fr: "Nail art, par main", en: "Nail art, per hand", ar: "نيل آرت لليد الواحدة" }, d: { fr: "Dessins, French, chrome ou strass.", en: "Designs, French tips, chrome or gems.", ar: "رسومات وفرنش وكروم وأحجار." } },
    { id: "pedi", c: "ongles", m: 60, p: 3500, n: { fr: "Pédicure spa", en: "Spa pedicure", ar: "باديكير سبا" }, d: { fr: "Bain, gommage, massage et vernis.", en: "Soak, scrub, massage and polish.", ar: "نقع وتقشير وتدليك وطلاء." } },
    { id: "essai", c: "mariee", m: 90, p: 6000, n: { fr: "Essai coiffure mariée", en: "Bridal hair trial", ar: "تجربة تسريحة العروس" }, d: { fr: "On choisit la coiffure ensemble, avec votre voile.", en: "We choose the style together, with your veil.", ar: "نختار التسريحة معًا مع الطرحة." } },
    { id: "jourj", c: "mariee", m: 150, p: 14000, n: { fr: "Coiffure du jour J", en: "Wedding-day hair", ar: "تسريحة يوم الزفاف" }, d: { fr: "Une coiffeuse chez vous ou au salon, à l'heure dite.", en: "A stylist at your home or at the salon, on time.", ar: "مصففة في بيتك أو في الصالون في الموعد." } },
    { id: "forfait", c: "mariee", m: 330, p: 32000, n: { fr: "Forfait mariée complet", en: "Full bridal package", ar: "باقة العروس الكاملة" }, d: { fr: "Essai, coiffure du jour J, mains et pieds.", en: "Trial, wedding-day hair, hands and feet.", ar: "تجربة وتسريحة الزفاف واليدان والقدمان." } }
  ],
  team: [
    { id: "lilia", n: "Lilia", r: { fr: "Couleur et balayage", en: "Colour and balayage", ar: "الصبغة والبالاياج" }, t: { fr: "Quinze ans de blond, sans jamais le jaunir.", en: "Fifteen years of blondes, never brassy.", ar: "خمس عشرة سنة مع الأشقر دون اصفرار." } },
    { id: "amel", n: "Amel", r: { fr: "Coupe, chignons et mariées", en: "Cuts, updos and brides", ar: "القص والتسريحات والعرائس" }, t: { fr: "Une coupe qui se coiffe seule le matin.", en: "A cut that styles itself in the morning.", ar: "قصّة تتسرّح وحدها في الصباح." } },
    { id: "sofia", n: "Sofia", r: { fr: "Ongles et nail art", en: "Nails and nail art", ar: "الأظافر والنيل آرت" }, t: { fr: "Fine, précise, et jamais deux dessins pareils.", en: "Fine, precise, never two designs alike.", ar: "دقيقة ومتقنة ولا تكرّر رسمة." } }
  ],
  /* jours fermés : vendredi (5) */
  closed: [5],
  slots: ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"]
};

window.T = {
  fr: {
    dir: "ltr", title: "Nacre, coiffure et ongles à Oran",
    nav: ["La carte", "Le salon", "Les mains", "Mon rendez-vous", "Questions"],
    book: "Prendre rendez-vous", bookShort: "Réserver", lang: "Langue", cur: "Devise", demo: "Site de démonstration, salon fictif",
    heroH: "Nacre", heroSub: "Coiffure et ongles, sur rendez-vous", scroll: "Faites défiler",
    looks: [
      { n: "Coiffure", s: "Chignons, brushings et coupes qui tiennent", svc: "chignon" },
      { n: "Couleur", s: "Blonds nets, châtains profonds, reflets doux", svc: "balayage" },
      { n: "Ongles", s: "Semi-permanent, gel et nail art à la main", svc: "gel" }
    ],
    from: "dès", min: "min",
    manH: "Une heure à vous, dans un salon qui ne se presse pas.",
    manP: "Trois fauteuils, trois spécialistes, et un agenda que nous gardons volontairement court pour ne jamais vous faire attendre.",
    facts: [["Samedi à jeudi", "10 h à 19 h, fermé le vendredi"], ["3 fauteuils", "pas plus de trois clientes en même temps"], ["Sur rendez-vous", "confirmé sur WhatsApp en quelques minutes"]],
    carteH: "La carte", carteP: "Choisissez vos soins, nous calculons le temps et le prix.",
    add: "Ajouter", added: "Ajouté", sel: function (n) { return n + (n > 1 ? " soins choisis" : " soin choisi"); }, selEmpty: "Aucun soin choisi", total: "Total", dur: "Durée",
    salonH: "Le salon", salonCap: ["Les fauteuils, face aux grands miroirs", "Les vernis, rangés par teinte", "Nail art dessiné à la main", "Rose, rouge et lettres fines", "Le fauteuil de Lilia"],
    teamH: "Qui s'occupe de vous", teamBtn: "Réserver avec",
    suiviH: "Où en est mon rendez-vous", suiviP: "Entrez le code reçu sur WhatsApp. Essayez NAC-40218.", suiviIn: "Code, par exemple NAC-40218", suiviBtn: "Voir", suiviNo: "Code introuvable. Vérifiez les lettres et les chiffres, par exemple NAC-40218.",
    steps: ["Demande reçue", "Rendez-vous confirmé", "Rappel la veille", "Vous êtes passée"],
    faqH: "Questions fréquentes",
    faq: [
      ["Comment réserver ?", "Choisissez vos soins, une date et un créneau. Votre demande part sur WhatsApp, nous confirmons en quelques minutes."],
      ["Puis-je annuler ou déplacer ?", "Oui, jusqu'à la veille, sur WhatsApp avec votre code de rendez-vous. Au-delà, prévenez-nous simplement."],
      ["Combien de temps faut-il prévoir ?", "Le total s'affiche pendant votre choix. Un balayage avec soin prend près de quatre heures, un brushing quarante minutes."],
      ["Faites-vous les mariées à domicile ?", "Oui, avec le forfait mariée, à Oran et dans les communes voisines. Un essai est prévu avant le jour J."],
      ["Quels moyens de paiement ?", "Espèces et carte au salon. Pour les mariées, un acompte confirme la date."]
    ],
    footH: "À très vite.", addr: "Oran, adresse communiquée à la confirmation", hours: "Samedi à jeudi, 10 h à 19 h",
    bkH: "Votre rendez-vous", bk1: "Vos soins", bk2: "Avec qui", bk3: "Quel jour", bk4: "Quelle heure", bk5: "Vos coordonnées",
    anyone: "Peu importe", name: "Nom et prénom", phone: "Téléphone", note: "Une précision ? (longueur, couleur visée…)", full: "Complet", closedD: "Fermé",
    needSvc: "Choisissez au moins un soin.", needSlot: "Choisissez un jour et une heure.", needName: "Indiquez votre nom et votre téléphone.",
    send: "Envoyer sur WhatsApp", sendNote: "Votre demande s'ouvre dans WhatsApp, rien n'est payé maintenant.",
    okH: "Demande prête", okP: "Envoyez le message dans WhatsApp. Gardez ce code :", track: "Suivre mon rendez-vous", close: "Fermer",
    waHead: "Bonjour, je souhaite prendre rendez-vous chez Nacre.", waCode: "Dossier", waSvc: "Soins", waWith: "Avec", waDate: "Date", waName: "Nom", waPhone: "Téléphone", waTotal: "Total estimé", waDur: "Durée", waNote: "Remarque", waAny: "Peu importe",
    stylists: { any: "Peu importe" }
  },
  en: {
    dir: "ltr", title: "Nacre, hair and nails in Oran",
    nav: ["The menu", "The salon", "Hands", "My appointment", "Questions"],
    book: "Book an appointment", bookShort: "Book", lang: "Language", cur: "Currency", demo: "Demo site, fictional salon",
    heroH: "Nacre", heroSub: "Hair and nails, by appointment", scroll: "Scroll",
    looks: [
      { n: "Hair", s: "Updos, blow-dries and cuts that last", svc: "chignon" },
      { n: "Colour", s: "Clean blondes, deep browns, soft reflections", svc: "balayage" },
      { n: "Nails", s: "Gel polish, extensions and hand-drawn art", svc: "gel" }
    ],
    from: "from", min: "min",
    manH: "An hour for yourself, in a salon that doesn't rush.",
    manP: "Three chairs, three specialists, and a diary we keep short on purpose so you never wait.",
    facts: [["Saturday to Thursday", "10 am to 7 pm, closed on Fridays"], ["3 chairs", "never more than three clients at once"], ["By appointment", "confirmed on WhatsApp within minutes"]],
    carteH: "The menu", carteP: "Pick your treatments and we work out the time and price.",
    add: "Add", added: "Added", sel: function (n) { return n + (n > 1 ? " treatments chosen" : " treatment chosen"); }, selEmpty: "No treatment chosen", total: "Total", dur: "Duration",
    salonH: "The salon", salonCap: ["The chairs, facing tall mirrors", "Polishes, shelved by shade", "Hand-drawn nail art", "Pink, red and fine lettering", "Lilia's chair"],
    teamH: "Who looks after you", teamBtn: "Book with",
    suiviH: "Where is my appointment", suiviP: "Enter the code you got on WhatsApp. Try NAC-40218.", suiviIn: "Code, for example NAC-40218", suiviBtn: "Check", suiviNo: "Code not found. Check the letters and digits, for example NAC-40218.",
    steps: ["Request received", "Appointment confirmed", "Reminder the day before", "You came in"],
    faqH: "Frequently asked questions",
    faq: [
      ["How do I book?", "Choose your treatments, a date and a time. Your request opens in WhatsApp and we confirm within minutes."],
      ["Can I cancel or move it?", "Yes, up to the day before, on WhatsApp with your appointment code. Later than that, just let us know."],
      ["How long should I plan?", "The total shows as you choose. Balayage with a treatment takes close to four hours, a blow-dry forty minutes."],
      ["Do you do brides at home?", "Yes, with the bridal package, in Oran and nearby towns. A trial comes before the big day."],
      ["How can I pay?", "Cash and card at the salon. For brides, a deposit secures the date."]
    ],
    footH: "See you soon.", addr: "Oran, address sent with your confirmation", hours: "Saturday to Thursday, 10 am to 7 pm",
    bkH: "Your appointment", bk1: "Your treatments", bk2: "With whom", bk3: "Which day", bk4: "What time", bk5: "Your details",
    anyone: "Anyone", name: "Full name", phone: "Phone", note: "Anything to add? (length, target colour…)", full: "Full", closedD: "Closed",
    needSvc: "Choose at least one treatment.", needSlot: "Choose a day and a time.", needName: "Enter your name and phone number.",
    send: "Send on WhatsApp", sendNote: "Your request opens in WhatsApp, nothing is paid now.",
    okH: "Request ready", okP: "Send the message in WhatsApp. Keep this code:", track: "Track my appointment", close: "Close",
    waHead: "Bonjour, je souhaite prendre rendez-vous chez Nacre.", waCode: "Dossier", waSvc: "Soins", waWith: "Avec", waDate: "Date", waName: "Nom", waPhone: "Téléphone", waTotal: "Total estimé", waDur: "Durée", waNote: "Remarque", waAny: "Peu importe",
    stylists: { any: "Anyone" }
  },
  ar: {
    dir: "rtl", title: "ناكر، صالون شعر وأظافر في وهران",
    nav: ["القائمة", "الصالون", "الأيادي", "موعدي", "أسئلة"],
    book: "احجزي موعدًا", bookShort: "احجزي", lang: "اللغة", cur: "العملة", demo: "موقع تجريبي، صالون خيالي",
    heroH: "ناكر", heroSub: "شعر وأظافر بموعد مسبق", scroll: "مرّري للأسفل",
    looks: [
      { n: "الشعر", s: "تسريحات وسشوار وقصّات تدوم", svc: "chignon" },
      { n: "الصبغة", s: "أشقر نقي وكستنائي عميق وانعكاسات ناعمة", svc: "balayage" },
      { n: "الأظافر", s: "طلاء شبه دائم وجل ونيل آرت يدوي", svc: "gel" }
    ],
    from: "ابتداءً من", min: "د",
    manH: "ساعة لكِ وحدكِ في صالون لا يستعجلكِ.",
    manP: "ثلاثة كراسٍ وثلاث مختصّات ومفكرة نُبقيها قصيرة عمدًا كي لا تنتظري أبدًا.",
    facts: [["من السبت إلى الخميس", "من 10 صباحًا إلى 7 مساءً، مغلق يوم الجمعة"], ["3 كراسٍ", "لا أكثر من ثلاث زبونات في الوقت نفسه"], ["بموعد مسبق", "يتأكد عبر واتساب خلال دقائق"]],
    carteH: "القائمة", carteP: "اختاري عناياتكِ ونحسب لكِ الوقت والسعر.",
    add: "أضيفي", added: "تمت الإضافة", sel: function (n) { return n === 1 ? "عناية واحدة مختارة" : n + " عنايات مختارة"; }, selEmpty: "لم تختاري عناية بعد", total: "المجموع", dur: "المدة",
    salonH: "الصالون", salonCap: ["الكراسي أمام مرايا عالية", "الطلاءات مرتّبة حسب الدرجة", "نيل آرت مرسوم باليد", "وردي وأحمر وكتابة رفيعة", "كرسي ليليا"],
    teamH: "من تعتني بكِ", teamBtn: "احجزي مع",
    suiviH: "أين وصل موعدي", suiviP: "أدخلي الرمز الذي وصلكِ على واتساب. جرّبي NAC-40218.", suiviIn: "الرمز، مثلًا NAC-40218", suiviBtn: "عرض", suiviNo: "الرمز غير موجود. تأكدي من الحروف والأرقام، مثلًا NAC-40218.",
    steps: ["تم استلام الطلب", "تأكد الموعد", "تذكير في اليوم السابق", "حضرتِ إلى الصالون"],
    faqH: "أسئلة شائعة",
    faq: [
      ["كيف أحجز؟", "اختاري عناياتكِ ويومًا وساعة. يُفتح طلبكِ في واتساب ونؤكده خلال دقائق."],
      ["هل يمكنني الإلغاء أو التأجيل؟", "نعم حتى اليوم السابق عبر واتساب برمز موعدكِ. بعد ذلك أخبرينا فقط."],
      ["كم من الوقت أحتاج؟", "يظهر المجموع أثناء الاختيار. البالاياج مع علاج يستغرق نحو أربع ساعات والسشوار أربعين دقيقة."],
      ["هل تجهّزون العرائس في البيت؟", "نعم مع باقة العروس في وهران والبلديات المجاورة، وتسبقها تجربة قبل الزفاف."],
      ["كيف أدفع؟", "نقدًا أو بالبطاقة في الصالون. للعرائس عربون يثبّت التاريخ."]
    ],
    footH: "إلى اللقاء قريبًا.", addr: "وهران، يُرسل العنوان مع التأكيد", hours: "من السبت إلى الخميس، 10 صباحًا إلى 7 مساءً",
    bkH: "موعدكِ", bk1: "عناياتكِ", bk2: "مع من", bk3: "أي يوم", bk4: "أي ساعة", bk5: "بياناتكِ",
    anyone: "لا فرق", name: "الاسم الكامل", phone: "الهاتف", note: "هل من توضيح؟ (الطول، اللون المطلوب…)", full: "مكتمل", closedD: "مغلق",
    needSvc: "اختاري عناية واحدة على الأقل.", needSlot: "اختاري يومًا وساعة.", needName: "أدخلي اسمكِ ورقم هاتفكِ.",
    send: "أرسلي عبر واتساب", sendNote: "يُفتح طلبكِ في واتساب ولا يُدفع شيء الآن.",
    okH: "الطلب جاهز", okP: "أرسلي الرسالة في واتساب واحتفظي بهذا الرمز:", track: "تتبّعي موعدي", close: "إغلاق",
    waHead: "Bonjour, je souhaite prendre rendez-vous chez Nacre.", waCode: "Dossier", waSvc: "Soins", waWith: "Avec", waDate: "Date", waName: "Nom", waPhone: "Téléphone", waTotal: "Total estimé", waDur: "Durée", waNote: "Remarque", waAny: "Peu importe",
    stylists: { any: "لا فرق" }
  }
};
