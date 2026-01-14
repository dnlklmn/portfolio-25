import Project from './Project';
import Section from './Section';
import { useContext } from 'react';
import MyContext from './Context';

const Bankmonitor = () => {
  const { state } = useContext(MyContext);

  const toc = [
    { id: 'summary', title: 'Összefoglaló' },
    { id: 'strategic', title: 'Stratégiai megközelítés' },
    { id: 'tech', title: 'Technológiai ajánlások' },
    { id: 'architecture', title: 'Multi-product architektúra' },
    { id: 'ai', title: 'AI-ready & automatizálás' },
    { id: 'governance', title: 'Governance & karbantartás' },
    { id: 'timeline', title: 'Időkeret & fázisok' },
    { id: 'documentation', title: 'Dokumentáció' },
    { id: 'pricing', title: 'Árazás & befektetés' },
  ];

  return (
    <Project
      id="bankmonitor"
      title="Bankmonitor"
      subtitle="Design System Ajánlat"
      description="Fokozatos, validálás-központú módszertan a konverziós ráták védelme mellett. Nem redesign, hanem konverzió-fókuszú infrastruktúra."
      tags={['Design System']}
      links={toc.map((item) => ({
        link: `#${item.id}`,
        text: item.title
      }))}
    >
      {/* Áttekintés */}
      <div className="flex flex-col text-start" style={{ gap: state.padding * 2 }}>
        <div className="w-full flex flex-col" style={{ gap: state.padding }}>
          <p className="font-bold">Áttekintés</p>
          <div className="flex flex-col" style={{ gap: state.padding }}>
            <p>Minden fázishoz meghatározzuk:</p>
            <ul className="list-disc pl-5">
              <li><strong>Minimum</strong>: Az adott fázis teljes és koherens megvalósításához nélkülözhetetlen elemek</li>
              <li><strong>Good to have</strong>: Értékes kiegészítések (de nem kritikusak)</li>
              <li><strong>Jövőkép</strong>: Mit tesz lehetővé ez a fázis hosszú távon</li>
            </ul>
            <p><strong>Projekt fázisok</strong>: B2C fogyasztói termékek → KKV/B2B termékek → Belső eszközök → Whitelabel</p>
          </div>
        </div>
      </div>

      <Section title="Összefoglaló" id="summary">
        <div className="flex flex-col" style={{ gap: state.padding * 2 }}>
          <div>
            <p className="font-bold mb-2">A kihívás</p>
            <p>A jelenlegi design inkonzisztencia lassítja a fejlesztést és zavarja a felhasználókat, de egy hagyományos „nagy redesign" veszélyezteti a keményen kivívott konverziós rátákat. Több termékvonallal (B2C, KKV, belső eszközök) és a növekvő whitelabel lehetöségek kihasználásához egységes design systemre van szükség, de ez nem mehet a bevétel kárára.</p>
          </div>

          <div>
            <p className="font-bold mb-2">Megközelítés</p>
            <p>Egy <strong>fokozatos, validálás-központú módszertant</strong> javaslok, amely mindenek előtt a konverziós metrikákat helyezi előtérbe. Kezdjük a nagy forgalmú B2C kalkulátorokkal (Lakáshitel, Személyi Kölcsön), minden változtatást A/B teszteljünk. Egyetlen komponens sem kerül élesbe konverziós validálás nélkül.</p>
          </div>

          <div>
            <p className="font-bold mb-2">Mit kaptok</p>
            <p><strong>Alapozás (1-8. hét)</strong>: Konszolidált színpaletta, design tokenek, tipográfiai és távolság rendszerek, alap komponens könyvtár, első validált kalkulátor production-ready.</p>
            <p><strong>Termékbővítés (9-24. hét)</strong>: Bevezetés a top B2C oldalakon, majd KKV termékeken, belső eszköz variánsok, PayloadCMS integráció.</p>
            <p><strong>Hosszú távú lehetőségek (25+ hét)</strong>: Whitelabel-ready architektúra, AI-asszisztált prototípuskészítés, folyamatos validálás.</p>
          </div>

          <div>
            <p className="font-bold mb-2">Miért működik ez</p>
            <ol className="flex flex-col" style={{ paddingLeft: state.padding * 2, gap: state.padding / 2 }}>
              <li><strong>Konverzió-biztos</strong>: A/B tesztelés + feature flag-ek azonnali visszaállítást jelentenek</li>
              <li><strong>Fejlesztői sebesség</strong>: A komponensek 3x gyorsabban készülnek el</li>
              <li><strong>Skálázható</strong>: 60%+-kal csökkenti a karbantartási terhet</li>
              <li><strong>Jövőálló</strong>: AI-asszisztált design és prediktív optimalizálás alapja</li>
            </ol>
          </div>
        </div>
      </Section>

      <Section title="Stratégiai megközelítés" id="strategic">
        <div className="flex flex-col" style={{ gap: state.padding * 2 }}>
          <div>
            <p className="font-bold mb-2">0. fázis: Alapozás & Audit (1-2. hét)</p>
            <p className="mb-4"><strong>UI Audit</strong>: Vizuális inkonzisztenciák, konverziós minták, komponens leltár, akadálymentesítési hiányosságok, teljesítmény szűk keresztmetszetek.</p>
            <p className="mb-4"><strong>Felhasználói & üzleti igény elemzés</strong>: Stakeholder interjúk, analitikai áttekintés, versenytárs-elemzés.</p>
            <p><strong>Színrendszer racionalizálás</strong>: Leltár → konszolidálás → validálás (akadálymentesség, színelmélet, kontrasztarányok).</p>
          </div>

          <div>
            <p className="font-bold mb-2">1. fázis: Alap tokenek (2-3. hét)</p>
            <p className="mb-4"><strong>Minimum</strong>: Globális tokenek, szemantikus tokenek, Token JSON, Figma library, alapvető dokumentáció.</p>
            <p className="mb-4"><strong>Good to have</strong>: Automatizált CSS változó generálás, dark mode variánsok, mozgás/animáció tokenek.</p>
            <p><strong>Jövőkép</strong>: Whitelabel partnerek felülírhatják a tokeneket, design-kód auto-szinkron, szín variációk A/B tesztelhetők kódváltoztatás nélkül.</p>
          </div>

          <div>
            <p className="font-bold mb-2">2. fázis: Alap rendszerelemek (3-5. hét)</p>
            <p className="mb-4"><strong>Minimum</strong>: Tipográfiai rendszer, 8px távolság rendszer, törésponti stratégia, layout rács, 30-50 alapvető ikon.</p>
            <p className="mb-4"><strong>Good to have</strong>: Container query támogatás, fluid tipográfia, beágyazás-barát korlátok (360x640 iframe), bővített ikon könyvtár.</p>
            <p><strong>Jövőkép</strong>: Konzisztens vizuális ritmus, intelligens layout adaptáció, skálázható mobiltól dashboardig.</p>
          </div>

          <div>
            <p className="font-bold mb-2">3. fázis: Component library alapok (5-8. hét)</p>
            <p className="mb-4"><strong>Minimum</strong>: Atomok (gombok, inputok, címkék), molekulák (input csoportok, kártyák), organizmusok (kalkulátor modul, header, footer), Storybook dokumentáció.</p>
            <p className="mb-4"><strong>Good to have</strong>: További gomb variánsok, fejlett űrlap komponensek, CTA blokkok, toast értesítések, modal-ok.</p>
            <p className="mb-4"><strong>Jövőkép</strong>: PayloadCMS blokkok, komponensek működnek minden kontextusban, A/B teszt variációk újraépítés nélkül.</p>
            <p className="italic text-neutral-400 dark:text-neutral-300 mt-2">Gyors siker: A 8. hétre egy teljes B2C kalkulátor redesigned és A/B testing alatt.</p>
          </div>

          <div>
            <p className="font-bold mb-2">4. fázis: Tesztelési & validálási stratégia (Folyamatos a 6. héttől)</p>
            <p className="mb-4"><strong>Minimum</strong>: A/B tesztelési keretrendszer, konverzió követés, automatizált akadálymentesítési tesztek (<a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer" className="underline">WCAG 2.1</a>, <a href="https://github.com/dequelabs/axe-core" target="_blank" rel="noopener noreferrer" className="underline">axe-core</a>), vizuális regress ziós tesztelés (<a href="https://percy.io/" target="_blank" rel="noopener noreferrer" className="underline">Percy</a>, <a href="https://www.chromatic.com/" target="_blank" rel="noopener noreferrer" className="underline">Chromatic</a>).</p>
            <p className="mb-4"><strong>Good to have</strong>: Beágyazott komponens tesztelés, fejlett akadálymentesítési auditok, teljesítmény tesztelés (Lighthouse CI, Core Web Vitals), valódi eszköz tesztelés.</p>
            <p><strong>Jövőkép</strong>: Folyamatos konverzió validálás (auto-rollback), öngyógyító design system (AI regresszió észlelés), prediktív A/B tesztelés (ML modellek).</p>
          </div>
        </div>
      </Section>

      <Section title="Technológiai & könyvtár ajánlások" id="tech">
        <div className="flex flex-col" style={{ gap: state.padding * 2 }}>
          <div>
            <p className="font-bold mb-2">Komponens könyvtár opciók</p>
            <div className="flex flex-col" style={{ gap: state.padding }}>
              <div>
                <p className="font-semibold">1. <a href="https://www.radix-ui.com/" target="_blank" rel="noopener noreferrer" className="underline">Radix UI</a></p>
                <p className="text-neutral-400 dark:text-neutral-300 mb-4">Előnyök: Beépített akadálymentesség, headless, teljes kontroll, kis bundle méret</p>
                <p className="text-neutral-400 dark:text-neutral-300">Hátrányok: Több kezdeti beállítás, minden stylinget nulláról kell építeni</p>
              </div>
              
              <div>
                <p className="font-semibold">2. <a href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer" className="underline">shadcn/ui</a> (AJÁNLOTT)</p>
                <p className="text-neutral-400 dark:text-neutral-300 mb-4">Előnyök: Copy-paste komponensek, modern minták, <a href="https://payloadcms.com/" target="_blank" rel="noopener noreferrer" className="underline">PayloadCMS</a> kompatibilis, gyors setup</p>
                <p className="text-neutral-400 dark:text-neutral-300">Hátrányok: Kevésbé "könyvtár" struktúra, komponens verziókat manuálisan kell kezelni</p>
              </div>

              <div>
                <p className="font-semibold">3. <a href="https://chakra-ui.com/" target="_blank" rel="noopener noreferrer" className="underline">Chakra UI</a> / <a href="https://mantine.dev/" target="_blank" rel="noopener noreferrer" className="underline">Mantine</a></p>
                <p className="text-neutral-400 dark:text-neutral-300 mb-4">Előnyök: Token-alapú themelés, átfogó komponensek, érett ökoszisztéma</p>
                <p className="text-neutral-400 dark:text-neutral-300">Hátrányok: Nehezebb bundle, nehezebb mélyen egyéni stílusokat felülírni</p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-bold mb-2">Design token pipeline</p>
            <ul className="list-disc pl-5">
              <li><a href="https://amzn.github.io/style-dictionary/" target="_blank" rel="noopener noreferrer" className="underline">Style Dictionary</a> token transzformációhoz</li>
              <li><a href="https://tokens.studio/" target="_blank" rel="noopener noreferrer" className="underline">Tokens Studio</a> Figma ↔ kód szinkronhoz</li>
              <li>JSON igazágforrás → CSS változók, SCSS, JS objektumok</li>
            </ul>
          </div>

          <div>
            <p className="font-bold mb-2">Dokumentáció</p>
            <ul className="list-disc pl-5">
              <li><a href="https://storybook.js.org/" target="_blank" rel="noopener noreferrer" className="underline">Storybook</a> komponens showcase + interaktív tesztelés</li>
              <li><a href="https://payloadcms.com/" target="_blank" rel="noopener noreferrer" className="underline">PayloadCMS</a> használati útmutatókhoz, best practice-ekhez</li>
              <li><a href="https://zeroheight.com/" target="_blank" rel="noopener noreferrer" className="underline">Zeroheight</a> vagy egyédi docs oldal átfogó útmutatókhoz</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Multi-product architektúra" id="architecture">
        <div className="flex flex-col" style={{ gap: state.padding * 2 }}>
          <div>
            <p className="font-bold mb-2">Kétrétegű token rendszer</p>
            <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded font-mono text-sm">
              <p>Globális tokenek (alap brand: színek, távolságok, tipográfia)</p>
              <p className="text-center">↓</p>
              <p>Szemantikus tokenek (célvezérelt: primary-button-bg, error-text, stb.)</p>
            </div>
            <p className="text-neutral-400 dark:text-neutral-300 mt-2">Komponens-szintű tokenek később hozzáadhatók, de két réteg elégséges. A szemantikus tokenek elnevezésen keresztül kezelik a kontextust (B2C vs. KKV vs. admin).</p>
          </div>

          <div>
            <p className="font-bold mb-2">Whitelabel stratégia</p>
            <ul className="list-disc pl-5">
              <li>Brand config objektumok (JSON partnerenként)</li>
              <li>Runtime theme váltás (CSS változók)</li>
              <li>Build-time themelés (teljesítményért)</li>
              <li>Iframe beágyazás: PostMessage API dinamikus themeléshez</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="AI-ready & automatizálás" id="ai">
        <div className="flex flex-col" style={{ gap: state.padding * 2 }}>
          <div>
            <p className="font-bold mb-2">Alacsony kódú prototípuskészítés nem-technikai csapattagoknak</p>
            <p className="mb-4"><strong>PayloadCMS blokk rendszer</strong>: Előre elkészített komponensek CMS blokkokként. Marketing csapat landing oldalakat állít össze fejlesztői átadás nélkül.</p>
            <p className="mb-4"><strong>Figma → production pipeline</strong>: Tokens Studio szinkron, product manager-ek prototípust készítenek Figmában valódi komponensekkel.</p>
            <p><strong>AI-asszisztált oldal építés</strong>: AI javasol komponens kombinációkat konverziós minták alapján. Példa: "Hozz létre egy kalkulátor oldalt űrlappal balra, előnyökkel jobbra"</p>
          </div>

          <div>
            <p className="font-bold mb-2">Fejlesztői automatizálás</p>
            <ul className="list-disc pl-5 mb-4">
              <li>Figma → kód: Figma Dev Mode + egyedi plugin token szinkronhoz</li>
              <li>MCP szerver: Design token API AI-asszisztált fejlesztéshez</li>
              <li>Automatizált ellenőrzések: Kontrasztarány validálás, komponens konzisztencia, teljesítmény költségvetések, vizuális regressziós tesztelés</li>
            </ul>
            <p className="text-neutral-400 dark:text-neutral-300">Értékajánlat: Marketing és product csapatok iterálhatnak oldal variációkon A/B teszteléshez fejlesztői ciklusok várása nélkül.</p>
          </div>
        </div>
      </Section>

      <Section title="Governance & karbantartás" id="governance">
        <div className="flex flex-col" style={{ gap: state.padding * 2 }}>
          <div>
            <p className="font-bold mb-2">Design system csapat struktúra</p>
            <ul className="list-disc pl-5">
              <li>Core csapat (designer + developer)</li>
              <li>Komponens championok (termékenként)</li>
              <li>Rendszeres szinkron ritmus</li>
            </ul>
          </div>

          <div>
            <p className="font-bold mb-2">Hozzájárulási modell</p>
            <ul className="list-disc pl-5">
              <li>RFC folyamat új komponensekhez</li>
              <li>Áttekintési checklist (akadálymentesség, teljesítmény, tokenek)</li>
              <li>Verziókontroll & changelog</li>
            </ul>
          </div>

          <div>
            <p className="font-bold mb-2">Metrikák & KPI-ok</p>
            <ul className="list-disc pl-5">
              <li>Adoptációs ráta a termékek között</li>
              <li>Komponens újrahasználási százalék</li>
              <li>Fejlesztési sebesség javulás</li>
              <li>Konverziós ráta javulások</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Időkeret & fázisok" id="timeline">
        <div className="flex flex-col" style={{ gap: state.padding * 2 }}>
          <p className="font-bold">Ajánlott megközelítés: Párhuzamos sávok</p>
          
          <div className="overflow-x-auto">
            <div className="flex flex-col border border-neutral-300 dark:border-neutral-700 rounded" style={{ gap: 0 }}>
              <div className="flex border-b border-neutral-300 dark:border-neutral-700 font-semibold bg-neutral-100 dark:bg-neutral-800">
                <div className="p-2 flex-1 border-r border-neutral-300 dark:border-neutral-700">Fázis</div>
                <div className="p-2 w-24 border-r border-neutral-300 dark:border-neutral-700">Időtartam</div>
                <div className="p-2 flex-1 border-r border-neutral-300 dark:border-neutral-700">Fókusz</div>
                <div className="p-2 flex-1 border-r border-neutral-300 dark:border-neutral-700">Terjedelem</div>
                <div className="p-2 flex-1">Validálás</div>
              </div>
              
              {[
                ['Alapozás', '1-3. hét', 'Audit, tokenek, alap segédeszközök', 'B2C termékek', 'Stakeholder review'],
                ['Alap komponensek', '4-8. hét', 'Atomok → molekulák', 'B2C termékek', 'A/B teszt 1-2 B2C kalkulátoron'],
                ['Komplex komponensek', '9-12. hét', 'Organizmusok, sablonok', 'B2C termékek', 'Bevezetés a top 5 B2C oldalon'],
                ['KKV bővítés', '13-16. hét', 'Adaptálás KKV termékekhez', 'B2B termékek', 'A/B teszt KKV landing oldalakon'],
                ['Belső eszközök', '17-24. hét', 'Admin/partner variánsok', 'Belső rendszerek', 'Pilot belső csapatokkal'],
                ['Whitelabel & skála', '25+ hét', 'Brand felülírási rendszer', 'Partner beágyazások', 'Partner pilot'],
              ].map((row, i) => (
                <div key={i} className="flex border-b border-neutral-300 dark:border-neutral-700 last:border-b-0">
                  <div className="p-2 flex-1 border-r border-neutral-300 dark:border-neutral-700">{row[0]}</div>
                  <div className="p-2 w-24 border-r border-neutral-300 dark:border-neutral-700 text-neutral-400 dark:text-neutral-300 text-sm">{row[1]}</div>
                  <div className="p-2 flex-1 border-r border-neutral-300 dark:border-neutral-700 text-sm">{row[2]}</div>
                  <div className="p-2 flex-1 border-r border-neutral-300 dark:border-neutral-700 text-sm">{row[3]}</div>
                  <div className="p-2 flex-1 text-sm">{row[4]}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-bold mb-2">Kockázat csökkentés</p>
            <ul className="list-disc pl-5">
              <li>Heti konverziós check-in-ek</li>
              <li>Visszaállítási stratégia (feature flag-ek)</li>
              <li>Progressive enhancement (graceful degradation)</li>
              <li>Régi/új rendszerek párhuzamos futtatása</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Dokumentációs deliverable-ök" id="documentation">
        <div className="flex flex-col" style={{ gap: state.padding * 2 }}>
          <div>
            <p className="font-bold mb-2">Designer-eknek</p>
            <ul className="list-disc pl-5">
              <li>Figma könyvtár minden komponenssel</li>
              <li>Használati útmutatók komponenseként</li>
              <li>Do's and don'ts példákkal</li>
            </ul>
          </div>

          <div>
            <p className="font-bold mb-2">Fejlesztőknek</p>
            <ul className="list-disc pl-5">
              <li>Storybook minden variánssal/állapottal</li>
              <li>Kód snippet-ek (React, PayloadCMS blokkok)</li>
              <li>Token referencia (JSON + CSS változók)</li>
              <li>Integrációs útmutatók</li>
            </ul>
          </div>

          <div>
            <p className="font-bold mb-2">Stakeholder-eknek</p>
            <ul className="list-disc pl-5">
              <li>Brand útmutatók</li>
              <li>Governance modell</li>
              <li>Hozzájárulási folyamat</li>
              <li>Sikeres metrika dashboard</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section last title="Árazás & befektetés" id="pricing">
        <div className="flex flex-col" style={{ gap: state.padding * 2 }}>
          <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded">
            <p className="text-sm italic">Az időbecslések és árak előzetesek és a projekt hatókörének pontosításával módosulhatnak.</p>
          </div>

          <div>
            <p className="font-bold mb-2">Alapadatok</p>
            <p><strong>Óradíj</strong>: 100 €/óra</p>
            <p><strong>Munkavégzés</strong>: 20 óra/hét (félidős együttműködés)</p>
          </div>

          <div>
            <p className="font-bold mb-2">Teljes befektetés mérföldkövek szerint</p>
            <div className="flex flex-col" style={{ gap: state.padding }}>
              <div className="border-l-4 border-neutral-400 dark:border-neutral-600 pl-4">
                <p className="font-semibold">Minimum viable rendszer</p>
                <p className="text-neutral-400 dark:text-neutral-300 mb-2">12 hét (240 óra) · <strong>24 000 €</strong></p>
                <p className="text-neutral-400 dark:text-neutral-300">B2C termékek teljesen működőképesek validált design systemmel</p>
              </div>

              <div className="border-l-4 border-neutral-400 dark:border-neutral-600 pl-4">
                <p className="font-semibold">Teljes multi-product</p>
                <p className="text-neutral-400 dark:text-neutral-300 mb-2">24 hét (480 óra) · <strong>48 000 €</strong></p>
                <p className="text-neutral-400 dark:text-neutral-300">B2C + KKV + Belső eszközök egységesítve</p>
              </div>

              <div className="border-l-4 border-neutral-400 dark:border-neutral-600 pl-4">
                <p className="font-semibold">Teljes whitelabel</p>
                <p className="text-neutral-400 dark:text-neutral-300 mb-2">28 hét (560 óra) · <strong>56 000 €</strong></p>
                <p className="text-neutral-400 dark:text-neutral-300">Teljes rendszer partner testreszabással</p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-bold mb-2">Rugalmas együttműködési opciók</p>
            <div className="flex flex-col" style={{ gap: state.padding }}>
              <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded">
                <p className="font-semibold">A opció: Teljes elkötelezettség (Ajánlott)</p>
                <p className="text-neutral-400 dark:text-neutral-300">Összes fázis: 56 000 € · 28 hét összesen</p>
              </div>

              <div>
                <p className="font-semibold">B opció: Fázisos megközelítés</p>
                <p className="text-neutral-400 dark:text-neutral-300 mb-2">Kezdés az Alapozással (16 000 €)</p>
                <p className="text-neutral-400 dark:text-neutral-300">Validálás A/B tesztekkel, alacsonyabb kezdeti kockázat</p>
              </div>

              <div>
                <p className="font-semibold">C opció: Minimum viable</p>
                <p className="text-neutral-400 dark:text-neutral-300 mb-2">Alapozás + B2C bevezetés: 24 000 € · 12 hét</p>
                <p className="text-neutral-400 dark:text-neutral-300">Lehetőség későbbi bővítésre</p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-bold mb-2">Mi van benne</p>
            <ul className="list-disc pl-5">
              <li>Minden design munka (Figma könyvtárak, tokenek, dokumentáció)</li>
              <li>Minden fejlesztési munka (komponensek, Storybook, automatizálás)</li>
              <li>Tesztelési infrastruktúra felállítás</li>
              <li>Heti haladási egyeztetések</li>
              <li>Stakeholder prezentációk</li>
              <li>Tudásátadás & képzés</li>
            </ul>
          </div>

          <div>
            <p className="font-bold mb-2">Nincs benne (hozzáadható)</p>
            <ul className="list-disc pl-5">
              <li>Folyamatos karbantartás átadás után (2 000 €/hó retainer)</li>
              <li>További képzési alkalmak (800 €/alkalom)</li>
              <li>Egyedi animáció/mikro-interakció könyvtár (4 000 €)</li>
              <li>Fejlett analitikai integráció (3 000 €)</li>
            </ul>
          </div>

          <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded text-sm">
            <p><strong>Megjegyzés</strong>: Az árazás AI-asszisztált fejlesztési workflow-t feltételez, amely jelentősen gyorsabb szállítást tesz lehetővé hagyományos módszerekhez képest.</p>
          </div>
        </div>
      </Section>
    </Project>
  );
};

export default Bankmonitor;
