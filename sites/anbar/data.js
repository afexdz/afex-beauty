/* Anbar — institut et hammam fictif (démonstration). Données et textes FR / EN / AR. */
window.D = {
  wa: "213550284873",
  rates: { DZD: 1, EUR: 1 / 150, USD: 1 / 132 },
  phones: [["+213", "DZ"], ["+33", "FR"], ["+34", "ES"], ["+39", "IT"], ["+32", "BE"], ["+41", "CH"], ["+44", "GB"], ["+49", "DE"], ["+1", "CA/US"], ["+216", "TN"], ["+212", "MA"], ["+90", "TR"], ["+971", "AE"], ["+974", "QA"], ["+966", "SA"]],
  cats: [
    { id: "hammam", n: { fr: "Hammam", en: "Hammam", ar: "الحمّام" }, img: "p/vapeur.webp", pos: "50% 40%" },
    { id: "visage", n: { fr: "Visage", en: "Face", ar: "الوجه" }, img: "p/serviette.webp", pos: "50% 45%" },
    { id: "corps", n: { fr: "Corps", en: "Body", ar: "الجسم" }, img: "p/massage.webp", pos: "50% 40%" },
    { id: "forfaits", n: { fr: "Forfaits", en: "Packages", ar: "الباقات" }, img: "p/bain.webp", pos: "50% 40%" }
  ],
  svc: [
    { id: "hammam", c: "hammam", m: 60, p: 3500, n: { fr: "Hammam et gommage", en: "Hammam and scrub", ar: "حمّام وتقشير" }, d: { fr: "Vapeur, savon noir et gommage au gant kessa.", en: "Steam, black soap and scrub with the kessa glove.", ar: "بخار وصابون بلدي وتقشير بالكيس." } },
    { id: "rhassoul", c: "hammam", m: 40, p: 3000, n: { fr: "Enveloppement au rhassoul", en: "Rhassoul wrap", ar: "لفافة الغاسول" }, d: { fr: "Argile du Maroc sur le corps et les cheveux, pour une peau douce.", en: "Moroccan clay on the body and hair, for soft skin.", ar: "طين الغاسول للجسم والشعر لبشرة ناعمة." } },
    { id: "rituel", c: "hammam", m: 150, p: 9500, n: { fr: "Rituel hammam complet", en: "Full hammam ritual", ar: "طقس الحمّام الكامل" }, d: { fr: "Hammam, gommage, rhassoul et trente minutes de massage.", en: "Hammam, scrub, rhassoul and thirty minutes of massage.", ar: "حمّام وتقشير وغاسول وثلاثون دقيقة تدليك." } },
    { id: "eclat", c: "visage", m: 60, p: 4500, n: { fr: "Soin éclat", en: "Radiance facial", ar: "عناية الإشراق" }, d: { fr: "Nettoyage, masque et massage du visage pour un teint lumineux.", en: "Cleansing, mask and face massage for a glowing complexion.", ar: "تنظيف وقناع وتدليك للوجه لبشرة مشرقة." } },
    { id: "signature", c: "visage", m: 75, p: 6500, n: { fr: "Soin signature", en: "Signature facial", ar: "العناية المميّزة" }, d: { fr: "Compresses chaudes, huile d'argan et masque sur mesure.", en: "Warm compresses, argan oil and a tailored mask.", ar: "كمادات دافئة وزيت الأرغان وقناع حسب بشرتك." } },
    { id: "peeling", c: "visage", m: 50, p: 5500, n: { fr: "Peeling doux et hydratation", en: "Gentle peel and hydration", ar: "تقشير لطيف وترطيب" }, d: { fr: "Renouvelle la peau sans l'irriter, avec crème apaisante.", en: "Renews skin without irritation, with a soothing cream.", ar: "يجدّد البشرة دون تهييج مع كريم مهدّئ." } },
    { id: "yeux", c: "visage", m: 30, p: 2500, n: { fr: "Soin du contour des yeux", en: "Eye contour care", ar: "عناية محيط العين" }, d: { fr: "Patchs froids et massage léger contre la fatigue.", en: "Cold patches and a light massage against tiredness.", ar: "لصقات باردة وتدليك خفيف ضد التعب." } },
    { id: "massage60", c: "corps", m: 60, p: 6000, n: { fr: "Massage relaxant", en: "Relaxing massage", ar: "تدليك استرخائي" }, d: { fr: "Huile tiède, pression douce, du dos aux jambes.", en: "Warm oil, gentle pressure, from back to legs.", ar: "زيت دافئ وضغط لطيف من الظهر إلى الساقين." } },
    { id: "massage30", c: "corps", m: 30, p: 3500, n: { fr: "Massage dos et nuque", en: "Back and neck massage", ar: "تدليك الظهر والرقبة" }, d: { fr: "Pour dénouer les tensions d'une journée au bureau.", en: "To release the tension of a day at a desk.", ar: "لفكّ توتر يوم كامل من العمل." } },
    { id: "pierres", c: "corps", m: 75, p: 8000, n: { fr: "Massage aux pierres chaudes", en: "Hot stone massage", ar: "تدليك بالحجارة الساخنة" }, d: { fr: "La chaleur des pierres détend les muscles en profondeur.", en: "The heat of the stones relaxes muscles deeply.", ar: "حرارة الحجارة تريح العضلات بعمق." } },
    { id: "jambes", c: "corps", m: 45, p: 4000, n: { fr: "Soin jambes légères", en: "Light legs care", ar: "عناية الساقين الخفيفتين" }, d: { fr: "Gommage, drainage et gel frais.", en: "Scrub, drainage and cooling gel.", ar: "تقشير وتصريف وجل منعش." } },
    { id: "duo", c: "forfaits", m: 150, p: 15000, n: { fr: "Forfait duo", en: "Duo package", ar: "باقة الاثنتين" }, d: { fr: "À deux : hammam, gommage et trente minutes de massage chacune.", en: "For two: hammam, scrub and thirty minutes of massage each.", ar: "لشخصين: حمّام وتقشير وثلاثون دقيقة تدليك لكل واحدة." } },
    { id: "detente", c: "forfaits", m: 210, p: 14000, n: { fr: "Journée détente", en: "Relaxation day", ar: "يوم الاسترخاء" }, d: { fr: "Hammam, massage d'une heure, soin éclat, thé et pâtisseries.", en: "Hammam, one-hour massage, radiance facial, tea and pastries.", ar: "حمّام وتدليك ساعة وعناية الإشراق مع شاي وحلويات." } },
    { id: "mariee", c: "forfaits", m: 240, p: 19000, n: { fr: "Forfait mariée", en: "Bridal package", ar: "باقة العروس" }, d: { fr: "Hammam, gommage, soin visage et massage, la semaine avant le mariage.", en: "Hammam, scrub, facial and massage, the week before the wedding.", ar: "حمّام وتقشير وعناية بالوجه وتدليك في الأسبوع الذي يسبق الزفاف." } }
  ],
  /* les six faces de l'anneau : photo, soin lié */
  ring: [
    { img: "p/vapeur.webp", svc: "hammam", pos: "50% 40%" },
    { img: "p/citron.webp", svc: "eclat", pos: "50% 45%" },
    { img: "p/pinceau.webp", svc: "peeling", pos: "50% 50%" },
    { img: "p/massage.webp", svc: "massage60", pos: "50% 35%" },
    { img: "p/serviette.webp", svc: "signature", pos: "50% 50%" },
    { img: "p/bain.webp", svc: "rituel", pos: "50% 40%" }
  ],
  steps: [
    { img: "p/vapeur.webp", pos: "50% 40%", t: { fr: "La vapeur", en: "The steam", ar: "البخار" }, d: { fr: "Vingt minutes de chaleur humide pour ouvrir les pores et lâcher les épaules.", en: "Twenty minutes of damp heat to open pores and drop the shoulders.", ar: "عشرون دقيقة من الحرارة الرطبة لفتح المسام وإرخاء الكتفين." } },
    { img: "p/bain.webp", pos: "50% 40%", t: { fr: "Le gommage", en: "The scrub", ar: "التقشير" }, d: { fr: "Savon noir et gant kessa, puis rinçage à l'eau tiède.", en: "Black soap and kessa glove, then a warm rinse.", ar: "صابون بلدي وكيس ثم شطف بماء دافئ." } },
    { img: "p/massage.webp", pos: "50% 35%", t: { fr: "Le massage", en: "The massage", ar: "التدليك" }, d: { fr: "Une huile tiède, des gestes lents, la cabine éclairée à la bougie.", en: "Warm oil, slow movements, a cabin lit by candle.", ar: "زيت دافئ وحركات بطيئة في غرفة مضاءة بالشموع." } },
    { img: "p/serviette.webp", pos: "50% 50%", t: { fr: "Le visage", en: "The face", ar: "الوجه" }, d: { fr: "Compresses chaudes, masque sur mesure, et un thé à la menthe pour finir.", en: "Warm compresses, a tailored mask, and mint tea to finish.", ar: "كمادات دافئة وقناع حسب بشرتك وشاي بالنعناع في النهاية." } }
  ],
  team: [
    { id: "sabrine", n: { fr: "Sabrine", en: "Sabrine", ar: "صابرين" }, r: { fr: "Hammam et soins du corps", en: "Hammam and body care", ar: "الحمّام وعناية الجسم" }, t: { fr: "Vingt ans de gommage, une main qui ne force jamais.", en: "Twenty years of scrubbing, a hand that never forces.", ar: "عشرون سنة من التقشير ويد لا تضغط أبدًا." } },
    { id: "yasmine", n: { fr: "Yasmine", en: "Yasmine", ar: "ياسمين" }, r: { fr: "Soins du visage", en: "Facials", ar: "عناية الوجه" }, t: { fr: "Elle regarde d'abord votre peau, ensuite elle choisit.", en: "She looks at your skin first, then chooses.", ar: "تنظر إلى بشرتك أولًا ثم تختار." } },
    { id: "meriem", n: { fr: "Meriem", en: "Meriem", ar: "مريم" }, r: { fr: "Massages", en: "Massages", ar: "التدليك" }, t: { fr: "Des mains chaudes et un silence qu'elle sait garder.", en: "Warm hands and a silence she knows how to keep.", ar: "يدان دافئتان وصمت تعرف كيف تحافظ عليه." } }
  ],
  closed: [5],
  slots: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"],
  gift: [5000, 10000, 15000, 20000]
};

window.T = {
  fr: {
    dir: "ltr", title: "Anbar, institut et hammam à Alger",
    nav: ["Le rituel", "La carte", "Carte cadeau", "Mon rendez-vous", "Questions"],
    book: "Prendre rendez-vous", bookShort: "Réserver", demo: "Site de démonstration, institut fictif",
    heroH: "Une heure pour votre peau.", heroP: "Hammam, soins du visage et massages, réservés aux femmes, sur rendez-vous à Alger.", scroll: "Faites défiler",
    ringN: ["Hammam et gommage", "Soin éclat", "Peeling doux", "Massage relaxant", "Soin signature", "Rituel complet"],
    ringS: ["Vapeur, savon noir et gant kessa.", "Un masque et un massage pour un teint lumineux.", "La peau renouvelée, sans l'irriter.", "Huile tiède, du dos aux jambes.", "Compresses chaudes et huile d'argan.", "Hammam, gommage, rhassoul et massage."],
    from: "dès", min: "min",
    ritH: "Le rituel, en quatre temps", ritP: "C'est l'ordre que nous suivons pour le rituel complet. Chaque étape se réserve aussi seule.",
    carteH: "La carte", carteP: "Choisissez vos soins, nous calculons le temps et le prix.",
    add: "Ajouter", added: "Ajouté", sel: function (n) { return n + (n > 1 ? " soins choisis" : " soin choisi"); }, total: "Total", dur: "Durée",
    giftH: "La carte cadeau", giftP: "Offrez un moment à quelqu'un. Choisissez le montant, écrivez un mot : nous préparons la carte.",
    gAmt: "Montant", gTo: "Pour qui ?", gMsg: "Un petit mot", gToPh: "Prénom de la personne", gMsgPh: "Pour toi, avec tout mon amour.", gBtn: "Offrir sur WhatsApp", gNote: "Valable six mois. Nous vous envoyons la carte sur WhatsApp après paiement.",
    gCardTo: "Pour", gCardValid: "Valable six mois",
    teamH: "Qui prend soin de vous", teamBtn: "Réserver avec",
    suiviH: "Où en est mon rendez-vous", suiviP: "Entrez le code reçu sur WhatsApp. Essayez ANB-30415.", suiviIn: "Code, par exemple ANB-30415", suiviBtn: "Voir", suiviNo: "Code introuvable. Vérifiez les lettres et les chiffres, par exemple ANB-30415.",
    steps: ["Demande reçue", "Rendez-vous confirmé", "Rappel la veille", "Vous êtes passée"],
    faqH: "Questions fréquentes",
    faq: [
      ["L'institut est-il réservé aux femmes ?", "Oui, l'accueil, le hammam et les cabines sont réservés aux femmes, avec une équipe entièrement féminine."],
      ["Que faut-il apporter ?", "Rien. Peignoir, serviettes, sandales et produits sont fournis. Venez avec quinze minutes d'avance pour le hammam."],
      ["Puis-je venir avec une amie ?", "Oui, le forfait duo est fait pour cela. Réservez-le en choisissant deux créneaux côte à côte."],
      ["Comment annuler ou déplacer ?", "Jusqu'à la veille, sur WhatsApp avec votre code de rendez-vous."],
      ["La carte cadeau a-t-elle une date limite ?", "Elle est valable six mois, pour n'importe quel soin de la carte."]
    ],
    footH: "À très vite.", addr: "Alger, adresse communiquée à la confirmation", hours: "Samedi à jeudi, 9 h à 19 h",
    bkH: "Votre rendez-vous", bk1: "Vos soins", bk2: "Avec qui", bk3: "Quel jour", bk4: "Quelle heure", bk5: "Vos coordonnées",
    anyone: "Peu importe", name: "Nom et prénom", phone: "Téléphone", note: "Une précision ? (allergie, première visite…)", closedD: "Fermé",
    needSvc: "Choisissez au moins un soin.", needSlot: "Choisissez un jour et une heure.", needName: "Indiquez votre nom et votre téléphone.",
    send: "Envoyer sur WhatsApp", sendNote: "Votre demande s'ouvre dans WhatsApp, rien n'est payé maintenant.",
    okH: "Demande prête", okP: "Envoyez le message dans WhatsApp. Gardez ce code :", track: "Suivre mon rendez-vous", close: "Fermer",
    waHead: "Bonjour, je souhaite prendre rendez-vous chez Anbar.", waCode: "Dossier", waSvc: "Soins", waWith: "Avec", waDate: "Date", waName: "Nom", waPhone: "Téléphone", waTotal: "Total estimé", waDur: "Durée", waNote: "Remarque", waAny: "Peu importe",
    waGift: "Bonjour, je souhaite offrir une carte cadeau Anbar.", waGAmt: "Montant", waGTo: "Pour", waGMsg: "Mot"
  },
  en: {
    dir: "ltr", title: "Anbar, beauty institute and hammam in Algiers",
    nav: ["The ritual", "The menu", "Gift card", "My appointment", "Questions"],
    book: "Book an appointment", bookShort: "Book", demo: "Demo site, fictional institute",
    heroH: "One hour for your skin.", heroP: "Hammam, facials and massages, for women only, by appointment in Algiers.", scroll: "Scroll",
    ringN: ["Hammam and scrub", "Radiance facial", "Gentle peel", "Relaxing massage", "Signature facial", "Full ritual"],
    ringS: ["Steam, black soap and kessa glove.", "A mask and a massage for a glowing complexion.", "Renewed skin, without irritation.", "Warm oil, from back to legs.", "Warm compresses and argan oil.", "Hammam, scrub, rhassoul and massage."],
    from: "from", min: "min",
    ritH: "The ritual, in four steps", ritP: "This is the order we follow for the full ritual. Each step can also be booked on its own.",
    carteH: "The menu", carteP: "Pick your treatments and we work out the time and price.",
    add: "Add", added: "Added", sel: function (n) { return n + (n > 1 ? " treatments chosen" : " treatment chosen"); }, total: "Total", dur: "Duration",
    giftH: "The gift card", giftP: "Give someone a moment. Pick the amount, write a note: we prepare the card.",
    gAmt: "Amount", gTo: "For whom?", gMsg: "A short note", gToPh: "First name", gMsgPh: "For you, with all my love.", gBtn: "Give on WhatsApp", gNote: "Valid for six months. We send you the card on WhatsApp after payment.",
    gCardTo: "For", gCardValid: "Valid for six months",
    teamH: "Who takes care of you", teamBtn: "Book with",
    suiviH: "Where is my appointment", suiviP: "Enter the code you got on WhatsApp. Try ANB-30415.", suiviIn: "Code, for example ANB-30415", suiviBtn: "Check", suiviNo: "Code not found. Check the letters and digits, for example ANB-30415.",
    steps: ["Request received", "Appointment confirmed", "Reminder the day before", "You came in"],
    faqH: "Frequently asked questions",
    faq: [
      ["Is the institute women only?", "Yes, reception, hammam and cabins are for women only, with an all-female team."],
      ["What should I bring?", "Nothing. Robe, towels, sandals and products are provided. Arrive fifteen minutes early for the hammam."],
      ["Can I come with a friend?", "Yes, the duo package is made for that. Book it by choosing two side-by-side slots."],
      ["How do I cancel or move it?", "Up to the day before, on WhatsApp with your appointment code."],
      ["Does the gift card expire?", "It is valid for six months, for any treatment on the menu."]
    ],
    footH: "See you soon.", addr: "Algiers, address sent with your confirmation", hours: "Saturday to Thursday, 9 am to 7 pm",
    bkH: "Your appointment", bk1: "Your treatments", bk2: "With whom", bk3: "Which day", bk4: "What time", bk5: "Your details",
    anyone: "Anyone", name: "Full name", phone: "Phone", note: "Anything to add? (allergy, first visit…)", closedD: "Closed",
    needSvc: "Choose at least one treatment.", needSlot: "Choose a day and a time.", needName: "Enter your name and phone number.",
    send: "Send on WhatsApp", sendNote: "Your request opens in WhatsApp, nothing is paid now.",
    okH: "Request ready", okP: "Send the message in WhatsApp. Keep this code:", track: "Track my appointment", close: "Close",
    waHead: "Bonjour, je souhaite prendre rendez-vous chez Anbar.", waCode: "Dossier", waSvc: "Soins", waWith: "Avec", waDate: "Date", waName: "Nom", waPhone: "Téléphone", waTotal: "Total estimé", waDur: "Durée", waNote: "Remarque", waAny: "Peu importe",
    waGift: "Bonjour, je souhaite offrir une carte cadeau Anbar.", waGAmt: "Montant", waGTo: "Pour", waGMsg: "Mot"
  },
  ar: {
    dir: "rtl", title: "عنبر، معهد تجميل وحمّام في الجزائر العاصمة",
    nav: ["الطقس", "القائمة", "بطاقة الهدية", "موعدي", "أسئلة"],
    book: "احجزي موعدًا", bookShort: "احجزي", demo: "موقع تجريبي، معهد خيالي",
    heroH: "ساعة لبشرتكِ.", heroP: "حمّام وعناية بالوجه وتدليك، للنساء فقط وبموعد مسبق في الجزائر العاصمة.", scroll: "مرّري للأسفل",
    ringN: ["حمّام وتقشير", "عناية الإشراق", "تقشير لطيف", "تدليك استرخائي", "العناية المميّزة", "الطقس الكامل"],
    ringS: ["بخار وصابون بلدي وكيس.", "قناع وتدليك لبشرة مشرقة.", "بشرة متجدّدة دون تهييج.", "زيت دافئ من الظهر إلى الساقين.", "كمادات دافئة وزيت الأرغان.", "حمّام وتقشير وغاسول وتدليك."],
    from: "ابتداءً من", min: "د",
    ritH: "الطقس في أربع محطات", ritP: "هذا هو الترتيب الذي نتبعه في الطقس الكامل. ويمكن حجز كل محطة وحدها.",
    carteH: "القائمة", carteP: "اختاري عناياتكِ ونحسب لكِ الوقت والسعر.",
    add: "أضيفي", added: "تمت الإضافة", sel: function (n) { return n === 1 ? "عناية واحدة مختارة" : n + " عنايات مختارة"; }, total: "المجموع", dur: "المدة",
    giftH: "بطاقة الهدية", giftP: "أهدي لحظة هدوء لمن تحبين. اختاري المبلغ واكتبي كلمة ونجهّز البطاقة.",
    gAmt: "المبلغ", gTo: "لمن؟", gMsg: "كلمة صغيرة", gToPh: "الاسم الأول", gMsgPh: "لكِ، مع كل حبي.", gBtn: "أهدي عبر واتساب", gNote: "صالحة ستة أشهر. نرسل لكِ البطاقة على واتساب بعد الدفع.",
    gCardTo: "إلى", gCardValid: "صالحة ستة أشهر",
    teamH: "من تعتني بكِ", teamBtn: "احجزي مع",
    suiviH: "أين وصل موعدي", suiviP: "أدخلي الرمز الذي وصلكِ على واتساب. جرّبي ANB-30415.", suiviIn: "الرمز، مثلًا ANB-30415", suiviBtn: "عرض", suiviNo: "الرمز غير موجود. تأكدي من الحروف والأرقام، مثلًا ANB-30415.",
    steps: ["تم استلام الطلب", "تأكد الموعد", "تذكير في اليوم السابق", "حضرتِ إلى المعهد"],
    faqH: "أسئلة شائعة",
    faq: [
      ["هل المعهد للنساء فقط؟", "نعم، الاستقبال والحمّام والغرف للنساء فقط وفريقنا كله من النساء."],
      ["ماذا أحضر معي؟", "لا شيء. الروب والمناشف والصنادل والمنتجات متوفرة. احضري قبل الموعد بخمس عشرة دقيقة للحمّام."],
      ["هل يمكنني المجيء مع صديقة؟", "نعم، باقة الاثنتين مخصصة لذلك. احجزيها باختيار موعدين متجاورين."],
      ["كيف ألغي أو أؤجل؟", "حتى اليوم السابق عبر واتساب برمز موعدكِ."],
      ["هل لبطاقة الهدية تاريخ انتهاء؟", "هي صالحة ستة أشهر لأي عناية في القائمة."]
    ],
    footH: "إلى اللقاء قريبًا.", addr: "الجزائر العاصمة، يُرسل العنوان مع التأكيد", hours: "من السبت إلى الخميس، 9 صباحًا إلى 7 مساءً",
    bkH: "موعدكِ", bk1: "عناياتكِ", bk2: "مع من", bk3: "أي يوم", bk4: "أي ساعة", bk5: "بياناتكِ",
    anyone: "لا فرق", name: "الاسم الكامل", phone: "الهاتف", note: "هل من توضيح؟ (حساسية، أول زيارة…)", closedD: "مغلق",
    needSvc: "اختاري عناية واحدة على الأقل.", needSlot: "اختاري يومًا وساعة.", needName: "أدخلي اسمكِ ورقم هاتفكِ.",
    send: "أرسلي عبر واتساب", sendNote: "يُفتح طلبكِ في واتساب ولا يُدفع شيء الآن.",
    okH: "الطلب جاهز", okP: "أرسلي الرسالة في واتساب واحتفظي بهذا الرمز:", track: "تتبّعي موعدي", close: "إغلاق",
    waHead: "Bonjour, je souhaite prendre rendez-vous chez Anbar.", waCode: "Dossier", waSvc: "Soins", waWith: "Avec", waDate: "Date", waName: "Nom", waPhone: "Téléphone", waTotal: "Total estimé", waDur: "Durée", waNote: "Remarque", waAny: "Peu importe",
    waGift: "Bonjour, je souhaite offrir une carte cadeau Anbar.", waGAmt: "Montant", waGTo: "Pour", waGMsg: "Mot"
  }
};
