import { useMemo, useState } from 'react';
import { ShoppingCart, Plus, Minus, QrCode, CheckCircle2, UtensilsCrossed, ScanLine, ChefHat } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

function Button({ children, className = '', variant = 'default', ...props }) {
  const base = 'inline-flex items-center justify-center border px-4 py-2 font-medium transition';
  const styles =
    variant === 'outline'
      ? 'border-stone-300 bg-white text-stone-900 hover:bg-stone-100'
      : 'border-stone-900 bg-stone-900 text-white hover:bg-stone-800';
  return (
    <button {...props} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}

function Card({ children, className = '' }) {
  return <div className={`border bg-white ${className}`}>{children}</div>;
}

function CardContent({ children, className = '' }) {
  return <div className={className}>{children}</div>;
}

export default function QRMenuSite() {
  const menemenler = [
    {
      id: 'menemen-1',
      name: 'Çakallı Menemeni',
      description: 'Tereyağı, domates, kaşar peyniri, yumurta sarısı, isteğe bağlı yeşil biber',
      options: [
        { label: 'Tek Kişilik', price: 330 },
        { label: 'Çift Kişilik', price: 620 },
        { label: 'Üç Kişilik', price: 930 },
      ],
      badge: 'İmza Lezzet',
    },
    {
      id: 'menemen-2',
      name: 'Kavurmalı Çakallı Menemeni',
      description: 'Tereyağı, domates, kaşar peyniri, yumurta sarısı, kavurma, isteğe bağlı yeşil biber',
      options: [
        { label: 'Tek Kişilik', price: 430 },
        { label: 'Çift Kişilik', price: 820 },
        { label: 'Üç Kişilik', price: 1230 },
      ],
      badge: 'Usta Önerisi',
    },
    {
      id: 'menemen-3',
      name: 'Sucuklu Çakallı Menemeni',
      description: 'Tereyağı, domates, kaşar peyniri, yumurta sarısı, kasap sucuğu, isteğe bağlı yeşil biber',
      options: [
        { label: 'Tek Kişilik', price: 410 },
        { label: 'Çift Kişilik', price: 780 },
        { label: 'Üç Kişilik', price: 1170 },
      ],
      badge: 'Bol Lezzet',
    },
    {
      id: 'menemen-4',
      name: 'Karışık Çakallı Menemeni',
      description: 'Tereyağı, domates, kaşar peyniri, yumurta sarısı, kavurma ve kasap sucuğu, isteğe bağlı yeşil biber',
      options: [
        { label: 'Tek Kişilik', price: 440 },
        { label: 'Çift Kişilik', price: 840 },
        { label: 'Üç Kişilik', price: 1260 },
      ],
      badge: 'En Dolu Seçim',
    },
  ];

  const tostlar = [
    { id: 'tost-1', name: 'Kaşarlı Tost', description: 'Ordu tost ekmeği, kaşar peyniri, tereyağı', price: 150 },
    { id: 'tost-2', name: 'Karışık Tost', description: 'Ordu tost ekmeği, kaşar peyniri, kasap sucuğu, tereyağı', price: 180 },
    { id: 'tost-3', name: 'Sade Sucuklu Tost', description: 'Ordu tost ekmeği, kasap sucuğu, tereyağı', price: 180 },
    { id: 'tost-4', name: 'Beyaz Peynirli Kaşarlı Tost', description: 'Ordu tost ekmeği, beyaz peynir, kaşar peyniri, tereyağı', price: 180 },
    { id: 'tost-5', name: 'Kavurmalı Kaşarlı Tost', description: 'Ordu tost ekmeği, kaşar peyniri, kavurma, tereyağı', price: 320 },
  ];

  const yumurtalar = [
    { id: 'yumurta-1', name: 'Sahanda Yumurta', description: 'Tereyağı, iki adet yumurta', price: 160 },
    { id: 'yumurta-2', name: 'Kaşar Peynirli Yumurta', description: 'Tereyağı, kaşar peyniri, iki adet yumurta', price: 200 },
    { id: 'yumurta-3', name: 'Beyaz Peynirli Yumurta', description: 'Tereyağı, beyaz peynir, iki adet yumurta', price: 200 },
    { id: 'yumurta-4', name: 'Sucuklu Yumurta', description: 'Tereyağı, kasap sucuğu, iki adet yumurta', price: 320 },
    { id: 'yumurta-5', name: 'Kavurmalı Yumurta', description: 'Tereyağı, kavurma, iki adet yumurta', price: 430 },
  ];

  const digerYiyecekler = [
    { id: 'diger-1', name: 'Kuymak', description: 'Tereyağı, kavrulmuş mısır unu, kolot peyniri', price: 320 },
    { id: 'diger-2', name: 'Kahvaltı Tabağı', description: 'Domates, salatalık, beyaz peynir, kaşar peyniri, bal, tereyağı, siyah zeytin, yeşil zeytin', price: 300 },
    { id: 'diger-3', name: 'Patates Kızartması', description: '', price: 120 },
  ];

  const sicakIcecekler = [
    { id: 'sicak-1', name: 'Çay', price: 25 },
    { id: 'sicak-2', name: 'Fincan Çay', price: 40 },
    { id: 'sicak-3', name: 'Nescafe', price: 40 },
    { id: 'sicak-4', name: 'Oralet Çeşitleri', price: 25 },
    { id: 'sicak-5', name: 'Türk Kahvesi', price: 60 },
  ];

  const sogukIcecekler = [
    { id: 'soguk-1', name: 'Taze Sıkma Portakal Suyu', price: 150 },
    { id: 'soguk-2', name: 'Ev Yapımı Limonata', price: null, note: 'Fiyat bilgisi eklenebilir' },
    { id: 'soguk-3', name: 'Kapalı Ayran', price: 40 },
    { id: 'soguk-4', name: 'Coca Cola / Cola Zero', price: 60 },
    { id: 'soguk-5', name: 'Fanta', price: 60 },
    { id: 'soguk-6', name: 'İce Tea (Şeftali/Limon)', price: 60 },
    { id: 'soguk-7', name: 'Nescafe Xpress (Kahve Sütlü/Vanilya Aromalı)', price: 60 },
    { id: 'soguk-8', name: 'Meyve Suyu (Karışık/Şeftali/Vişne)', price: 60 },
    { id: 'soguk-9', name: 'Gazoz', price: 50 },
    { id: 'soguk-10', name: 'Meyveli Soda (Elmalı/Limonlu)', price: 30 },
    { id: 'soguk-11', name: 'Sade Soda', price: 25 },
    { id: 'soguk-12', name: 'Su', price: 15 },
  ];

  const [cart, setCart] = useState({});
  const [tableNo, setTableNo] = useState('12');
  const [customerName, setCustomerName] = useState('Misafir');
  const [orderCreated, setOrderCreated] = useState(false);
  const [orderNo, setOrderNo] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [appMode, setAppMode] = useState('customer');
  const [scanInput, setScanInput] = useState('');
  const [parsedOrder, setParsedOrder] = useState(null);
  const [scanError, setScanError] = useState('');

  const formatPrice = (price) => (typeof price === 'number' ? `${price}₺` : 'Belirlenecek');

  const buildOrderText = ({ restaurant, tableNo, customerName, orderNo, createdAt, totalItems, totalPrice, items }) => {
    const itemText = items
      .map((item) => {
        const safeName = item.name.replace(/[,;|]/g, ' ').trim();
        const safeOption = (item.option || '').replace(/[,;|]/g, ' ').trim();
        return `${safeName}*${safeOption || '-'}*${item.quantity}*${item.price}`;
      })
      .join(',');

    return `R=${restaurant}|ON=${orderNo}|T=${tableNo}|C=${customerName || 'Misafir'}|TM=${createdAt}|TI=${totalItems}|TOP=${totalPrice}|I=${itemText}`;
  };

  const parseOrderText = (text) => {
    const sections = text.split('|');
    const map = {};

    sections.forEach((section) => {
      const [key, ...rest] = section.split('=');
      map[key] = rest.join('=');
    });

    if (!map.R || !map.T || !map.I) {
      throw new Error('QR metni eksik veya beklenen formatta değil.');
    }

    const items = (map.I || '')
      .split(',')
      .filter(Boolean)
      .map((row, index) => {
        const [name, option, quantity, price] = row.split('*');
        return {
          id: `${name}-${index}`,
          name: name || 'Ürün',
          option: option && option !== '-' ? option : '',
          quantity: Number(quantity || 0),
          price: Number(price || 0),
          total: Number(quantity || 0) * Number(price || 0),
        };
      });

    return {
      restaurant: map.R,
      orderNo: map.ON || '-',
      tableNo: map.T,
      customerName: map.C || 'Misafir',
      createdAt: map.TM || '-',
      totalItems: Number(map.TI || 0),
      totalPrice: Number(map.TOP || 0),
      items,
    };
  };

  const addToCart = (item) => {
    if (item.price == null) return;

    setCart((prev) => {
      const existing = prev[item.key];
      return {
        ...prev,
        [item.key]: {
          ...item,
          quantity: existing ? existing.quantity + 1 : 1,
        },
      };
    });
    setOrderCreated(false);
  };

  const updateQuantity = (key, delta) => {
    setCart((prev) => {
      const current = prev[key];
      if (!current) return prev;
      const nextQuantity = current.quantity + delta;
      if (nextQuantity <= 0) {
        const next = { ...prev };
        delete next[key];
        return next;
      }
      return {
        ...prev,
        [key]: {
          ...current,
          quantity: nextQuantity,
        },
      };
    });
    setOrderCreated(false);
  };

  const clearCart = () => {
    setCart({});
    setOrderCreated(false);
    setOrderNo('');
    setCreatedAt('');
  };

  const cartItems = Object.values(cart);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const qrPayload = useMemo(() => {
    if (!orderCreated || cartItems.length === 0) return '';

    return buildOrderText({
      restaurant: 'Menemenci Bilal Usta',
      tableNo,
      customerName,
      orderNo,
      createdAt,
      totalItems,
      totalPrice,
      items: cartItems,
    });
  }, [orderCreated, tableNo, customerName, orderNo, createdAt, totalItems, totalPrice, cartItems]);

  const createOrderQR = () => {
    if (cartItems.length === 0) return;
    const generatedOrderNo = `MBU-${Math.floor(100000 + Math.random() * 900000)}`;
    const now = new Date().toLocaleString('tr-TR');
    setOrderNo(generatedOrderNo);
    setCreatedAt(now);
    setOrderCreated(true);
  };

  const handleParseScan = () => {
    try {
      const parsed = parseOrderText(scanInput.trim());
      setParsedOrder(parsed);
      setScanError('');
    } catch (error) {
      setParsedOrder(null);
      setScanError(error.message || 'QR verisi okunamadı.');
    }
  };

  const SectionTitle = ({ eyebrow, title, subtitle }) => (
    <div className="mb-5">
      <div className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-700">{eyebrow}</div>
      <h2 className="mt-2 text-2xl font-bold text-stone-900">{title}</h2>
      {subtitle && <p className="mt-2 text-sm leading-6 text-stone-600">{subtitle}</p>}
    </div>
  );

  const MenuRow = ({ item, compact = false }) => (
    <Card className="rounded-3xl border-stone-200 shadow-sm">
      <CardContent className={`p-4 ${compact ? 'flex items-center justify-between gap-4' : ''}`}>
        <div className={compact ? 'min-w-0 flex-1' : ''}>
          <h3 className="font-semibold leading-6 text-stone-900">{item.name}</h3>
          {item.description ? <p className="mt-1 text-sm leading-6 text-stone-600">{item.description}</p> : null}
          {item.note ? <p className="mt-1 text-sm text-amber-700">{item.note}</p> : null}
        </div>
        <div className={`${compact ? 'text-right' : 'mt-4 flex items-center justify-between gap-3'}`}>
          <div className="text-base font-bold text-stone-900">{formatPrice(item.price)}</div>
          {item.price != null ? (
            <Button
              onClick={() => addToCart({ ...item, key: item.id, option: item.option || null })}
              className="mt-3 rounded-2xl"
            >
              <Plus className="mr-2 h-4 w-4" />
              Sepete Ekle
            </Button>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );

  if (appMode === 'staff') {
    return (
      <div className="min-h-screen bg-stone-50 px-4 py-6 text-stone-900">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex flex-col gap-4 rounded-[28px] border border-stone-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-amber-700">Menemenci Bilal Usta</p>
              <h1 className="mt-2 flex items-center gap-2 text-2xl font-bold">
                <ChefHat className="h-6 w-6" /> Garson Sipariş Okuyucu
              </h1>
              <p className="mt-2 text-sm leading-6 text-stone-600">QR okutulduğunda gelen ham metni buraya yapıştır. Sistem siparişi otomatik ayrıştırıp okunabilir hale getirir.</p>
            </div>
            <Button onClick={() => setAppMode('customer')} variant="outline" className="rounded-2xl">
              Müşteri Ekranına Dön
            </Button>
          </div>

          <div className="grid gap-6 lg:grid-cols-[420px_minmax(0,1fr)]">
            <Card className="rounded-[28px] border-stone-200 shadow-sm">
              <CardContent className="p-5">
                <div className="mb-4 flex items-center gap-2 text-lg font-semibold">
                  <ScanLine className="h-5 w-5" /> QR Metnini Çöz
                </div>
                <p className="mb-4 text-sm leading-6 text-stone-600">Kamerayla QR okutulduktan sonra çıkan metni buraya yapıştır.</p>
                <textarea
                  value={scanInput}
                  onChange={(e) => setScanInput(e.target.value)}
                  rows={12}
                  className="w-full rounded-3xl border border-stone-200 bg-stone-50 px-4 py-4 text-sm outline-none focus:border-stone-400"
                  placeholder="Örnek: R=Menemenci Bilal Usta|ON=MBU-123456|T=12|C=Ahmet|TM=29.03.2026 14:25:10|TI=3|TOP=380|I=Kaşarlı Tost*-*1*150,Çay*-*2*25"
                />
                <div className="mt-4 flex gap-3">
                  <Button onClick={handleParseScan} className="rounded-2xl">Siparişi Oku</Button>
                  <Button
                    variant="outline"
                    className="rounded-2xl"
                    onClick={() => {
                      setScanInput('');
                      setParsedOrder(null);
                      setScanError('');
                    }}
                  >
                    Temizle
                  </Button>
                </div>
                {scanError ? <div className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">{scanError}</div> : null}
              </CardContent>
            </Card>

            <Card className="rounded-[28px] border-stone-200 shadow-sm">
              <CardContent className="p-5">
                <div className="mb-4 text-lg font-semibold">Çözümlenen Sipariş</div>
                {!parsedOrder ? (
                  <div className="rounded-3xl border border-dashed border-stone-300 bg-stone-50 p-8 text-center text-sm leading-6 text-stone-500">Henüz sipariş verisi okunmadı.</div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-3xl bg-stone-50 p-4"><span className="text-xs text-stone-500">Restoran</span><div className="mt-1 font-semibold">{parsedOrder.restaurant}</div></div>
                      <div className="rounded-3xl bg-stone-50 p-4"><span className="text-xs text-stone-500">Sipariş No</span><div className="mt-1 font-semibold">{parsedOrder.orderNo}</div></div>
                      <div className="rounded-3xl bg-stone-50 p-4"><span className="text-xs text-stone-500">Masa No</span><div className="mt-1 font-semibold">{parsedOrder.tableNo}</div></div>
                      <div className="rounded-3xl bg-stone-50 p-4"><span className="text-xs text-stone-500">Müşteri</span><div className="mt-1 font-semibold">{parsedOrder.customerName}</div></div>
                    </div>
                    <div>
                      <h3 className="mb-3 font-semibold">Ürünler</h3>
                      <div className="space-y-3">
                        {parsedOrder.items.map((item) => (
                          <div key={item.id} className="rounded-3xl border border-stone-200 bg-white p-4">
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <div className="font-semibold">{item.name}</div>
                                {item.option ? <div className="mt-1 text-sm text-stone-500">{item.option}</div> : null}
                              </div>
                              <div className="text-right">
                                <div className="font-semibold">{formatPrice(item.total)}</div>
                                <div className="text-sm text-stone-500">{item.quantity} adet</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="sticky top-0 z-20 border-b border-stone-200 bg-stone-50/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-amber-700">Menemenci Bilal Usta</p>
            <h1 className="text-lg font-bold">QR Menü ve Masa Sipariş Sistemi</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={() => setAppMode('staff')} variant="outline" className="rounded-2xl">
              <ScanLine className="mr-2 h-4 w-4" /> Garson Modu
            </Button>
            <div className="flex items-center gap-2 rounded-full bg-stone-900 px-3 py-2 text-sm font-medium text-white shadow-sm">
              <ShoppingCart className="h-4 w-4" />
              <span>{totalItems} ürün</span>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-6 px-4 pb-16 pt-5 lg:grid-cols-[minmax(0,1fr)_380px]">
        <div>
          <section className="mb-8 rounded-3xl bg-gradient-to-br from-amber-100 via-orange-50 to-white p-5 shadow-sm">
            <div className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700 shadow-sm">Taze • Sıcak • Doyurucu</div>
            <h2 className="mt-4 text-3xl font-black leading-tight">Müşteri siparişi oluşturur, QR kod ham metin taşır</h2>
          </section>

          <section id="menemen" className="mb-10">
            <SectionTitle eyebrow="Öne Çıkanlar" title="Çakallı Menemeni" subtitle="Tek, çift ve üç kişilik porsiyon seçimi yapılıp sepete eklenebilir." />
            <div className="space-y-4">
              {menemenler.map((item) => (
                <Card key={item.id} className="rounded-3xl border-stone-200 shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold leading-snug">{item.name}</h3>
                      <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">{item.badge}</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-stone-600">{item.description}</p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      {item.options.map((option) => (
                        <div key={option.label} className="rounded-2xl bg-stone-50 p-3">
                          <div className="text-[11px] font-medium text-stone-500">{option.label}</div>
                          <div className="mt-1 text-base font-bold text-stone-900">{formatPrice(option.price)}</div>
                          <Button
                            onClick={() => addToCart({ key: `${item.id}-${option.label}`, id: `${item.id}-${option.label}`, name: item.name, option: option.label, price: option.price })}
                            className="mt-3 w-full rounded-2xl"
                          >
                            <Plus className="mr-2 h-4 w-4" />Sepete Ekle
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="tost" className="mb-10"><SectionTitle eyebrow="Atıştırmalık" title="Tost Çeşitleri" /><div className="space-y-3">{tostlar.map((item) => <MenuRow key={item.id} item={item} />)}</div></section>
          <section id="yumurta" className="mb-10"><SectionTitle eyebrow="Kahvaltı" title="Yumurta Çeşitleri" /><div className="space-y-3">{yumurtalar.map((item) => <MenuRow key={item.id} item={item} />)}</div></section>
          <section id="diger" className="mb-10"><SectionTitle eyebrow="Tamamlayıcılar" title="Diğer Yiyecekler" /><div className="space-y-3">{digerYiyecekler.map((item) => <MenuRow key={item.id} item={item} />)}</div></section>
          <section id="icecek" className="mb-10"><SectionTitle eyebrow="İçecekler" title="Sıcak İçecekler" /><div className="space-y-3">{sicakIcecekler.map((item) => <MenuRow key={item.id} item={item} compact />)}</div><div className="mt-8"><SectionTitle eyebrow="Ferahlık" title="Soğuk İçecekler" /><div className="space-y-3">{sogukIcecekler.map((item) => <MenuRow key={item.id} item={item} compact />)}</div></div></section>
        </div>

        <aside id="sepet" className="lg:sticky lg:top-28 lg:h-fit">
          <Card className="overflow-hidden rounded-[28px] border-stone-200 shadow-lg">
            <div className="border-b border-stone-200 bg-stone-900 p-5 text-white">
              <div className="flex items-center gap-2 text-sm font-medium text-stone-300"><UtensilsCrossed className="h-4 w-4" />Canlı Sipariş Paneli</div>
              <h2 className="mt-2 text-2xl font-bold">Sepet ve QR Sipariş</h2>
            </div>
            <CardContent className="space-y-5 p-5">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <div><label className="mb-2 block text-sm font-medium text-stone-700">Masa No</label><input value={tableNo} onChange={(e) => setTableNo(e.target.value)} className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 outline-none transition focus:border-stone-400" placeholder="Örn: 12" /></div>
                <div><label className="mb-2 block text-sm font-medium text-stone-700">Müşteri Adı</label><input value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 outline-none transition focus:border-stone-400" placeholder="İsteğe bağlı" /></div>
              </div>
              <div>
                <div className="mb-3 flex items-center justify-between"><h3 className="font-semibold text-stone-900">Sepet Özeti</h3><span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">{totalItems} ürün</span></div>
                {cartItems.length === 0 ? <div className="rounded-3xl border border-dashed border-stone-300 bg-stone-50 p-5 text-center text-sm leading-6 text-stone-500">Henüz ürün eklenmedi.</div> : <div className="space-y-3">{cartItems.map((item) => <div key={item.key} className="rounded-3xl border border-stone-200 bg-stone-50 p-4"><div className="flex items-start justify-between gap-3"><div><h4 className="font-semibold text-stone-900">{item.name}</h4>{item.option ? <p className="mt-1 text-xs text-stone-500">{item.option}</p> : null}</div><div className="text-sm font-bold text-stone-900">{formatPrice(item.price * item.quantity)}</div></div><div className="mt-3 flex items-center justify-between"><div className="flex items-center gap-2"><button onClick={() => updateQuantity(item.key, -1)} className="rounded-full border border-stone-300 bg-white p-2 text-stone-700"><Minus className="h-4 w-4" /></button><span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span><button onClick={() => updateQuantity(item.key, 1)} className="rounded-full border border-stone-300 bg-white p-2 text-stone-700"><Plus className="h-4 w-4" /></button></div><span className="text-sm text-stone-500">Birim {formatPrice(item.price)}</span></div></div>)}</div>}
              </div>
              <div className="rounded-3xl bg-stone-900 p-4 text-white"><div className="flex items-center justify-between text-sm text-stone-300"><span>Toplam Ürün</span><span>{totalItems}</span></div><div className="mt-2 flex items-center justify-between"><span className="text-base font-medium">Genel Toplam</span><span className="text-2xl font-bold">{formatPrice(totalPrice)}</span></div></div>
              <div className="grid gap-3"><Button onClick={createOrderQR} disabled={cartItems.length === 0} className="rounded-2xl bg-amber-500 py-6 text-base font-semibold text-stone-950 hover:bg-amber-400 disabled:opacity-50"><QrCode className="mr-2 h-5 w-5" />Siparişi Oluştur ve QR Kod Üret</Button><Button onClick={clearCart} variant="outline" className="rounded-2xl py-6 text-base">Sepeti Temizle</Button></div>
              {orderCreated ? <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-5"><div className="flex items-center gap-2 text-emerald-700"><CheckCircle2 className="h-5 w-5" /><span className="font-semibold">Sipariş başarıyla hazırlandı</span></div><div className="mt-3 grid gap-1 text-sm text-stone-700"><div><span className="font-semibold">Sipariş No:</span> {orderNo}</div><div><span className="font-semibold">Masa:</span> {tableNo}</div><div><span className="font-semibold">Müşteri:</span> {customerName || 'Misafir'}</div><div><span className="font-semibold">Saat:</span> {createdAt}</div></div><div className="mt-4 flex justify-center rounded-3xl bg-white p-4 shadow-sm"><QRCodeSVG value={qrPayload} size={210} includeMargin /></div><div className="mt-4 rounded-2xl border border-emerald-200 bg-white p-3 text-xs leading-6 text-stone-600"><span className="font-semibold text-stone-800">QR içeriği:</span><div className="mt-2 break-all font-mono">{qrPayload}</div></div></div> : <div className="rounded-3xl border border-dashed border-stone-300 bg-stone-50 p-4 text-sm leading-6 text-stone-500">Sipariş QR kodu henüz oluşturulmadı.</div>}
            </CardContent>
          </Card>
        </aside>
      </main>
    </div>
  );
}
