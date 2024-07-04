<script lang="ts">
  import { infoOverlayVisible } from '../stores';
  import CloseButton from './CloseButton.svelte';

  let root: HTMLDivElement;
  let active_tab = localStorage.getItem('active_tab')
    ? Number(localStorage.getItem('active_tab'))
    : 1;
  function closeInfoOverlay() {
    infoOverlayVisible.update(() => false);
    localStorage.removeItem('active_tab');
  }

  function showTabState(parameter: number) {
    active_tab = parameter;
    root.scrollTop = 0;
  }
</script>

<aside class="overlay overlay--info" bind:this={root}>
  <CloseButton functionOnClick={closeInfoOverlay}
    >close info overlay</CloseButton
  >

  <div class="header__menu__margin">
    <div class="info__tabs first__row">
      <button class:active={active_tab == 1} on:click={() => showTabState(1)}
        >About
      </button>
      <button
        class:active={active_tab == 2}
        style="border-right: 1px solid black;"
        on:click={() => showTabState(2)}
        >Support Us
      </button>
    </div>
    <div class="info__tabs">
      <button class:active={active_tab == 3} on:click={() => showTabState(3)}
        >Moderation
      </button>
      <button
        class:active={active_tab == 4}
        style="border-right: 1px solid black;"
        on:click={() => showTabState(4)}
        >Press
      </button>
    </div>
  </div>
  <CloseButton functionOnClick={closeInfoOverlay}
    >close info overlay</CloseButton
  >
  <div class="overlay__outer">
    <div class="overlay__content">
      <section style={active_tab !== 1 ? 'display: none;' : ''}>
        <h2 style="border-top: 0px;">About</h2>
        <div class="overlay__section-text">
          <p>
            Queering the Map is a community generated counter-mapping platform
            for digitally archiving LGBTQ2IA+ experience in relation to physical
            space.
          </p>

          <p>
            The platform provides an interface to collaboratively record the
            cartography of queer life—from park benches to the middle of the
            ocean—in order to preserve our histories and unfolding realities,
            which continue to be invalidated, contested, and erased. From
            collective action to stories of coming out, encounters with violence
            to moments of rapturous love, Queering the Map functions as a living
            archive of queer life.
          </p>

          <p>
            Through mapping LGBTQ2IA+ experience in its intersectional
            permutations, the project works to generate affinities across
            difference and beyond borders — revealing the ways in which we are
            intimately connected.
          </p>

          <h2>Territorial Acknowledgment</h2>
          <div class="overlay__section-text">
            <p>
              Queering the Map was initiated on the unceded traditional lands of
              the Kanien'kehá:ka Nation. The island currently called “Montreal”
              is known as Tiohtia:ke in the language of the Kanien'kehá:ka, and
              it has historically been a meeting place for other Indigenous
              nations.
            </p>

            <p>
              A queer approach to space points out the limitations of the ways
              in which the world around us is produced and normalized by and for
              certain bodies and not others. It is pertinent that we
              continuously reflect and act on the ways in which LGBTQIA+ life is
              complicit in ongoing processes of settler-colonialism. How does
              race, gender, sexuality, citizenship, ability, and class affect
              the ways in which we relate to, move through, and create space? As
              a pin on Queering the Map in Honolulu, Hawaii attests: “queer
              liberation must mean decolonization, and decolonization must mean
              queer liberation.”
            </p>

            <p>
              If you are not currently aware of the rightful keepers of the land
              on which you are located, you can learn more at <a
                href="https://www.native-land.ca/"
                target="_blank"
                rel="noopener">native-land.ca</a
              >. Beyond simply acknowledging the colonial histories of the land
              on which you are located, we encourage you to take concrete steps
              towards decolonization by learning more about the ways in which
              you can support Indigenous communities in the fight for
              sovereignty.
            </p>
          </div>
        </div>
      </section>

      <section style={active_tab !== 2 ? 'display: none;' : ''}>
        <h2>Donate</h2>
        <div class="overlay__section-text">
          <p>
            Queering the Map is a grassroots endeavour, and relies on donations
            to cover the costs of keeping the site alive. Please support the
            future of Queering The Map by making a donation through our Patreon!
          </p>
          <div class="button__fadein">
            <a
              href="https://www.patreon.com/queeringthemap"
              class="donate_button"
              target="_blank"
              rel="noopener">DONATE</a
            >
          </div>
        </div>

        <h2>Volunteer</h2>
        <div class="overlay__section-text">
          <p>
            We are always looking for moderators and developers to support the
            maintenance of the platform! If you would like to volunteer your
            time, please send us an email expressing your interest at <a
              href="mailto:hi@queeringthemap.com">hi@queeringthemap.com</a
            >.
          </p>
        </div>
      </section>

      <section style={active_tab !== 3 ? 'display: none;' : ''}>
        <h2>Moderation Guidelines</h2>
        <div class="overlay__section-text">
          <p>
            Posts to Queering the Map are moderated by a small group of
            volunteers before they appear publicly. This to ensure the following
            are not added to the platform:
          </p>

          <div class="partial_div-numbered">
            <span>1</span>
            <p>
              Breaches of Anonymity <br />
              We do not approve posts that breach your or anyone else's anonymity.
              This means posts containing last names, phone numbers, email addresses,
              social media handles, or exact addresses will not be approved.
            </p>
          </div>

          <div class="partial_div-numbered">
            <span>2</span>
            <p>
              Hate Speech <br />
              We do not approve posts that degrade or threaten a group of people
              based on race, ethnicity, citizenship, ability, sexuality, sex, gender,
              or class.
            </p>
          </div>
          <div class="partial_div-numbered">
            <span>3</span>
            <p>
              Spam/Advertising <br />
              We do not approve spam posts, or advertisements of any kind.
            </p>
          </div>

          <p style="margin-top: 0px;">
            The moderation process is to ensure the safety of the map, and is
            not about policing expressions or identities.
          </p>
          <p>
            Given the amount of posts that have been made over the past few
            months, we are at a significant moderation backlog, and are doing
            our best to publish posts as quickly as we can. We appreciate your
            patience.
          </p>
        </div>

        <h2>Request Removal</h2>
        <div class="overlay__section-text removal_textarea">
          <p>
            If you would like something you posted to be removed, or see
            something on the map you feel shouldn't be there, please contact us
            at <a href="mailto:hi@queeringthemap.com">hi@queeringthemap.com</a>.
          </p>
        </div>
      </section>

      <section style={active_tab !== 5 ? 'display: none;' : ''}>
        <h2>Why can’t I see my post on the map?</h2>
        <div class="overlay__section-text">
          <p>
            In 99.9% of cases, it is because it has not been reviewed by our
            moderation team yet. All posts are moderated by a small group of
            volunteers before appearing publicly on the map, in order to ensure
            they do not contain breaches of anonymity, hate speech, or
            spam/advertising. Rest assured that your post will be visible as
            soon as we reach it in the moderation queue.
          </p>
        </div>
        <h2>Can I delete my post?</h2>
        <div class="overlay__section-text">
          <p>
            Yes, of course! To delete a post, please fill out the Request
            Removal form in the Moderation tab.
          </p>
        </div>
        <h2>How can I become a moderator?</h2>
        <div class="overlay__section-text">
          <p>
            We are always welcoming new volunteer moderators to our team. For
            information on upcoming moderator onboarding sessions, please email
            us at <a href="mailto:hi@queeringthemap.com"
              >hi@queeringthemap.com</a
            >.
          </p>
        </div>
        <h2>Who made Queering the Map?</h2>
        <div class="overlay__section-text">
          <p>
            Queering the Map was created by Lucas LaRochelle in 2017. The
            platform is maintained by LaRochelle and a global network of
            moderators, developers, and advisors.
          </p>
          <p>
            This network includes (in alphabetical order by last name):
            Jacqueline Beaumont, Jamie Bliss, Jonathan Chomko, Nova Courtoise,
            Liane Decary-Chen, Carter Fredericks, Neema Githere, Jean-Sebastien
            Gervais, William Gibson, Jo Kroese, Tess Kuramoto, Emma Kirby,
            Robbie Mackay, Felipe Ignacio Noriega, Dennis Ohm-Fickler, Miguel
            Rosales, Juan Camilo Rodriguez Gonzalez, Sabine Rosenberg, Alex
            Robichaud, Alexandra Ulsh, and Ashleigh Watson, as well as other
            members who prefer to remain anonymous.
          </p>
        </div>
        <h2>What data does Queering the Map collect?</h2>
        <div class="overlay__section-text">
          <p>
            The only data we collect is the story you write, the location you
            click on the map, and the time and date of the submission. We do not
            collect any other data in association with the posts.
          </p>
        </div>
        <h2>Can I use content from Queering the Map in my own work?</h2>
        <div class="overlay__section-text">
          <p>Yes, as long as you follow a few rules!</p>
        </div>
        <div class="overlay__section-text">
          <p>
            The content of Queering the Map is licensed under the <a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              target="_blank"
              rel="noopener"
              >Creative Commons Attribution-NonCommercial-ShareAlike 4.0
              International License</a
            >. This means you can freely share the content by copying and
            redistributing it in any way you like. Additionally, you're allowed
            to adapt the material by remixing, transforming, or building upon
            it.
            <br />
          </p>

          <p>However, there are some conditions:</p>

          <div class="partial_div-numbered">
            <span>1</span>You must give proper credit to Queering the Map,
            provide a link to the Creative Commons license, and specify if
            you've made any changes to the original content.
          </div>
          <br />
          <div class="partial_div-numbered">
            <span>2</span>You may not use the content of Queering the Map, or
            any works you create based on it, for commercial purposes.
          </div>
          <br />
          <div class="partial_div-numbered">
            <span>3</span>If you create something new based on the content of
            Queering the Map, you must share it under the same Creative Commons
            license as the original.
          </div>

          <p>
            If you have any questions, or are interested in exploring a
            collaborative project with us, please email us at <a
              href="mailto:hi@queeringthemap.com">hi@queeringthemap.com</a
            >.
          </p>
        </div>
      </section>

      <section style={active_tab !== 4 ? 'display: none;' : ''}>
        <h2 style="margin-bottom:0px;">Selected Press</h2>

        <div class="__press">
          <h2>New York Times</h2>
          <a
            href="https://www.nytimes.com/2023/06/25/style/queering-the-map-lucas-larochelle.html"
            title="Just Made a Queer Memory? Drop a Pin."
            rel="noopener noreferrer"
            target="_blank">Just Made a Queer Memory? Drop a Pin.</a
          >
          <span> By Katherine Oung</span>

          <h2>The Nation</h2>
          <a
            href="https://www.thenation.com/article/world/gaza-queering-the-map/"
            title="Gaza’s Queer Palestinians Fight to Be Remembered"
            rel="noopener noreferrer"
            target="_blank">Gaza’s Queer Palestinians Fight to Be Remembered</a
          >
          <span> By Sarah O'Neal</span>

          <h2>Time Magazine</h2>
          <a
            href="https://time.com/6326254/queering-the-map-gaza-lgbt-palestinians/"
            title="In Gaza, ‘Queering the Map’ Reveals Heartbreaking Notes of LGBT Love and Loss"
            rel="noopener noreferrer"
            target="_blank"
            >In Gaza, ‘Queering the Map’ Reveals Heartbreaking Notes of LGBT
            Love and Loss</a
          >
          <span> By Chad De Guzman</span>

          <h2>C Magazine</h2>
          <a
            href="https://cmagazine.com/articles/the-map-emisem-the-territory-on-lucas-larochelles-queering-the-m"
            title="The Map Is the Territory: On Lucas LaRochelle’s Queering the Map"
            rel="noopener noreferrer"
            target="_blank"
            >The Map Is the Territory: On Lucas LaRochelle’s Queering the Map</a
          >
          <span> By Kat Benedict</span>

          <h2>Sissy Screens</h2>
          <a
            href="https://www.sissyscreens.com/interview/queering-the-map-interview/"
            title="Queering the Map: An Interview With Lucas LaRochelle"
            rel="noopener noreferrer"
            target="_blank"
            >Queering the Map: An Interview With Lucas LaRochelle</a
          >
          <span> By Stephanie Williams</span>

          <h2>Them</h2>
          <a
            href="https://www.them.us/story/queering-the-map-the-dyke-project-london-transit-ad-hack"
            title="Queer U.K. Activists Hacked London Transit Ads to Support LGBTQ+ Gazans"
            rel="noopener noreferrer"
            target="_blank"
            >Queer U.K. Activists Hacked London Transit Ads to Support LGBTQ+
            Gazans</a
          >
          <span> By Abby Monteil</span>

          <h2 class="divider">All Press</h2>

          <h2>HuffPost</h2>
          <a
            href="https://www.huffpost.com/entry/queering-the-map-palestine_n_652fde5ce4b0da897ab610a9"
            title="Queering the Map Reveals Poignant Glimpses Of Survival In Gaza"
            rel="noopener noreferrer"
            target="_blank"
            >Queering the Map Reveals Poignant Glimpses Of Survival In Gaza</a
          >
          <span> By Ian Kumamoto</span>

          <h2>The Independent</h2>
          <a
            href="https://www.independent.co.uk/news/uk/home-news/lgbt-activists-palestine-london-b2438425.html"
            title="LGBT+ activists hack London tube and bus adverts with stories of Palestinians"
            rel="noopener noreferrer"
            target="_blank"
            >LGBT+ activists hack London tube and bus adverts with stories of
            Palestinians</a
          >
          <span> By Maira Butt</span>

          <h2>WIRED Italia</h2>
          <a
            href="https://www.wired.it/article/striscia-di-gaza-vittime-lgbtqia/"
            title="Il muro digitale dove le persone queer piangono le perdite nella Striscia di Gaza"
            rel="noopener noreferrer"
            target="_blank"
            >Il muro digitale dove le persone queer piangono le perdite nella
            Striscia di Gaza</a
          >
          <span> By Danielle Biaggi </span>

          <h2>Mondoweiss</h2>
          <a
            href="https://mondoweiss.net/2023/11/a-view-from-the-queer-bloc-to-free-palestine/"
            title="A view from the Queer bloc to Free Palestine"
            rel="noopener noreferrer"
            target="_blank">A view from the Queer bloc to Free Palestine</a
          >
          <span> By Steven W. Thrasher</span>

          <h2>Autostraddle</h2>
          <a
            href="https://www.autostraddle.com/palestinian-liberation-is-queer-liberation/"
            title="Palestinian Liberation Is Queer Liberation"
            rel="noopener noreferrer"
            target="_blank">Palestinian Liberation Is Queer Liberation</a
          >
          <span> By Kayla Kumari Upadhyaya</span>

          <h2>Vice</h2>
          <a
            href="https://www.vice.com/en/article/m7bxxq/hackers-took-over-transit-ads-with-messages-from-queer-palestinians-in-gaza"
            title="Hackers Took Over Transit Ads with Messages from Queer Palestinians in Gaza"
            rel="noopener noreferrer"
            target="_blank"
            >Hackers Took Over Transit Ads with Messages from Queer Palestinians
            in Gaza</a
          >
          <span> By Jordan Pearson</span>

          <h2>Truthout</h2>
          <a
            href="https://truthout.org/articles/uk-lesbian-collective-demands-ends-to-british-funding-of-israels-military/"
            title="UK ‘Dyke Project’ Hacks London Bus Ads to Challenge Israeli Pinkwashing"
            rel="noopener noreferrer"
            target="_blank"
            >UK ‘Dyke Project’ Hacks London Bus Ads to Challenge Israeli
            Pinkwashing</a
          >
          <span> By Zane McNeill</span>

          <h2>Feminist Giant</h2>
          <a
            href="https://www.feministgiant.com/p/global-roundup-gaza-on-queering-the"
            title="Global Roundup: Gaza on ‘Queering the Map’, Bolivia Sexual Violence, Philippines Drag Artist Arrest, Indigenous Women in Malaysia vs Double Discrimination, Film on Caribbean Masculine-Presenting Women"
            rel="noopener noreferrer"
            target="_blank"
            >Global Roundup: Gaza on ‘Queering the Map’, Bolivia Sexual
            Violence, Philippines Drag Artist Arrest, Indigenous Women in
            Malaysia vs Double Discrimination, Film on Caribbean
            Masculine-Presenting Women</a
          >
          <span> By Mona Eltahawy</span>

          <h2>Feminism in India</h2>
          <a
            href="https://feminisminindia.com/2023/12/05/how-queering-the-map-has-helped-queer-palestinians-gain-visibility-and-challenge-geopolitical-stereotypes/"
            title="How ‘Queering The Map’ Has Helped Queer Palestinians Gain Visibility And Challenge Geopolitical Stereotypes"
            rel="noopener noreferrer"
            target="_blank"
            >How ‘Queering The Map’ Has Helped Queer Palestinians Gain
            Visibility And Challenge Geopolitical Stereotypes</a
          >
          <span> By Flavia D'mello</span>

          <h2>KAOSGL</h2>
          <a
            href="https://kaosgl.org/haber/lgbti-aktivistleri-londra-metrosunu-hackledi-filistin-le-dayanisma-mesaji-paylasti"
            title="LGBTİ+ aktivistleri Londra metrosunu hackledi, Filistin’le dayanışma mesajı paylaştı"
            rel="noopener noreferrer"
            target="_blank"
            >LGBTİ+ aktivistleri Londra metrosunu hackledi, Filistin’le
            dayanışma mesajı paylaştı</a
          >
          <span> By Yazar</span>

          <h2>Attitude</h2>
          <a
            href="https://www.attitude.co.uk/news/lgbtq-activists-the-dyke-project-hack-tfl-ads-palestinians-451431/"
            title="LGBTQ+ activists ‘hack’ TfL ads with messages from queer Palestinians"
            rel="noopener noreferrer"
            target="_blank"
            >LGBTQ+ activists ‘hack’ TfL ads with messages from queer
            Palestinians</a
          >
          <span> By Charlotte Manning</span>

          <h2>GCN</h2>
          <a
            href="https://gcn.ie/lgbtq-activists-london-ads-messages-palestinians/"
            title="LGBTQ+ activists hijack London ads to share messages from queer Palestinians"
            rel="noopener noreferrer"
            target="_blank"
            >LGBTQ+ activists hijack London ads to share messages from queer
            Palestinians</a
          >
          <span> By Beatrice Fanucci</span>

          <h2>Pink News</h2>
          <a
            href="https://www.thepinknews.com/2023/10/31/palestine-queering-map-lesbian-adverts-protest/"
            title="Lesbian group replaces adverts with stories of LGBTQ+ people in Palestine"
            rel="noopener noreferrer"
            target="_blank"
            >Lesbian group replaces adverts with stories of LGBTQ+ people in
            Palestine</a
          >
          <span> By Chantelle Billson</span>

          <h2>Metro UK</h2>
          <a
            href="https://metro.co.uk/2023/10/30/lgbtq-palestinians-are-sharing-heartbreaking-goodbye-messages-on-mapping-app-19742837/?ico=zone-widget_home_israel-hamas-war&utm_source=headtopics&utm_medium=news&utm_campaign=2023-10-31"
            title="Heartbreaking goodbye messages shared by gay Palestinians"
            rel="noopener noreferrer"
            target="_blank"
            >Heartbreaking goodbye messages shared by gay Palestinians</a
          >
          <span> By Sarah Hooper</span>

          <h2>Fanpage.it</h2>
          <a
            href="https://www.fanpage.it/innovazione/tecnologia/i-messaggi-damore-strazianti-pubblicati-dalle-coppie-lgbtq-di-gaza-ti-bacero-in-paradiso/"
            title="I messaggi d’amore strazianti pubblicati dalle coppie Lgbtq+ di Gaza: 'Ti bacerò in paradiso'"
            rel="noopener noreferrer"
            target="_blank"
            >I messaggi d’amore strazianti pubblicati dalle coppie Lgbtq+ di
            Gaza: "Ti bacerò in paradiso"</a
          >
          <span> By Elisabetta Rosso</span>

          <h2>La Nazione</h2>
          <a
            href="https://luce.lanazione.it/attualita/messaggi-amore-gaza-queer/"
            title="Messaggi d’amore dalla Striscia di Gaza: “Qui essere gay è difficile”"
            rel="noopener noreferrer"
            target="_blank"
            >Messaggi d’amore dalla Striscia di Gaza: “Qui essere gay è
            difficile”</a
          >
          <span> By Giorgia Borgioli </span>

          <h2>Reckon</h2>
          <a
            href="https://www.reckon.news/lgbtq/2023/10/lgbtq-palestinians-in-gaza-are-sharing-their-last-words-on-online-mapping-platform.html"
            title="LGBTQ Palestinians in Gaza are sharing their last words on an online mapping platform"
            rel="noopener noreferrer"
            target="_blank"
            >LGBTQ Palestinians in Gaza are sharing their last words on an
            online mapping platform</a
          >
          <span> By Denny</span>

          <h2>Out</h2>
          <a
            href="https://www.out.com/news/queer-palestinians-queering-the-map#toggle-gdpr"
            title="LGBTQ+ Palestinians Pay Tribute to Their Lost Loves in Heartbreaking Social Posts"
            rel="noopener noreferrer"
            target="_blank"
            >LGBTQ+ Palestinians Pay Tribute to Their Lost Loves in
            Heartbreaking Social Posts</a
          >
          <span> By Mey Rude</span>

          <h2>Pride</h2>
          <a
            href="https://www.pride.com/gay-news/queering-the-map-gaza-lgbtq-palestinians#rebelltitem1"
            title="Queering the Map in Gaza: LGBTQ+ Palestinians Pay Tribute to Deceased Loved Ones"
            rel="noopener noreferrer"
            target="_blank"
            >Queering the Map in Gaza: LGBTQ+ Palestinians Pay Tribute to
            Deceased Loved Ones</a
          >
          <span> By Ryan Adamczeski</span>

          <h2>Semafor</h2>
          <a
            href="https://www.semafor.com/article/10/17/2023/an-online-map-for-lgbtq-personal-stories-becomes-a-rare-window-into-gaza"
            title="An online map for LGBTQ personal stories becomes a rare window into Gaza"
            rel="noopener noreferrer"
            target="_blank"
            >An online map for LGBTQ personal stories becomes a rare window into
            Gaza</a
          >
          <span> By Louise Matsakis</span>

          <h2>Konbini</h2>
          <a
            href="https://www.konbini.com/societe/au-moyen-orient-la-population-lgbtqia-raconte-son-vecu-sur-une-carte-en-ligne-bouleversante/"
            title="Au Moyen-Orient, la population LGBTQIA+ raconte son vécu sur une carte en ligne bouleversante"
            rel="noopener noreferrer"
            target="_blank"
            >Au Moyen-Orient, la population LGBTQIA+ raconte son vécu sur une
            carte en ligne bouleversante</a
          >
          <span> By Flavio Sillitti</span>

          <h2>Antivirus</h2>
          <a
            href="https://avmag.gr/queering-the-map-ta-kouir-atoma-stin-palaistini-vriskoun-ena-diadiktyako-katafygio2/"
            title="Queering the Map: Τα κουήρ άτομα στην Παλαιστίνη βρίσκουν ένα διαδικτυακό καταφύγιο"
            rel="noopener noreferrer"
            target="_blank"
            >Queering the Map: Τα κουήρ άτομα στην Παλαιστίνη βρίσκουν ένα
            διαδικτυακό καταφύγιο</a
          >
          <span> By Ανδρομάχη Κουτσουλέντη</span>

          <h2>GCN</h2>
          <a
            href="https://gcn.ie/queer-messages-gaza-hamas-israel-conflict/"
            title="Queer people in Gaza share memories of lost loved ones amid Hamas-Israel conflict"
            rel="noopener noreferrer"
            target="_blank"
            >Queer people in Gaza share memories of lost loved ones amid
            Hamas-Israel conflict</a
          >
          <span> By Beatrice Fanucci</span>

          <h2>MSU Reporter</h2>
          <a
            href="https://www.msureporter.com/2023/11/02/queer-love-and-death-in-the-gaza-strip/"
            title="Queer love and death in the Gaza Strip"
            rel="noopener noreferrer"
            target="_blank">Queer love and death in the Gaza Strip</a
          >
          <span> By Jeremy Redlien</span>

          <h2>Nylon Manila</h2>
          <a
            href="https://nylonmanila.com/what-is-queering-the-map-immortalizes-queer-experiences/"
            title="Filipino pins on Queering the Map, the digital atlas that immortalizes queer experiences all over the world"
            rel="noopener noreferrer"
            target="_blank"
            >Filipino pins on Queering the Map, the digital atlas that
            immortalizes queer experiences all over the world</a
          >
          <span> By Nica Glorioso </span>

          <h2>Radio France</h2>
          <a
            href="https://www.radiofrance.fr/franceculture/podcasts/les-nouvelles-d-un-monde-meilleur/queering-the-map-une-carte-en-ligne-dediee-aux-lgbtqia-utilisee-a-gaza-8673669"
            title="Queering the map: une carte en ligne dédiée aux LGBTQIA+ utilisée à Gaza"
            rel="noopener noreferrer"
            target="_blank"
            >Queering the map: une carte en ligne dédiée aux LGBTQIA+ utilisée à
            Gaza</a
          >
          <span> By Juliette Devaux</span>

          <h2>The Hindu</h2>
          <a
            href="https://www.thehindu.com/life-and-style/pride-month-2023-this-website-celebrates-queer-memories-from-across-the-world/article66997007.ece"
            title="This website celebrates queer memories from across the world"
            rel="noopener noreferrer"
            target="_blank"
            >This website celebrates queer memories from across the world</a
          >
          <span> By Sanjana Ganesh</span>

          <h2>Dezeen</h2>
          <a
            href="https://www.dezeen.com/2023/06/28/queer-spaces-trans-lgbtq-designers-researchers/"
            title="Support is needed to keep queer and trans spaces alive say LGBTQ+ designers"
            rel="noopener noreferrer"
            target="_blank"
            >"Support is needed to keep queer and trans spaces alive" say LGBTQ+
            designers</a
          >
          <span> By Amy Peacock</span>

          <h2>Woo</h2>
          <a
            href="https://planetwoo.itv.com/posts/queering-the-map-global-community-pride"
            title="This interactive, pink world map celebrates a global queer community"
            rel="noopener noreferrer"
            target="_blank"
            >This interactive, pink world map celebrates a global queer
            community</a
          >
          <span> By Darhsita Goyal</span>

          <h2>De Volkskrant</h2>
          <a
            href="https://www.volkskrant.nl/cultuur-media/lucas-larochelle-ontwierp-een-online-lhbti-wereldkaart-waarop-bijna-een-half-miljoen-persoonlijke-queer-ervaringen-staan~b6ef9def/"
            title="Lucas LaRochelle ontwierp een online lhbti-wereldkaart waarop bijna een half miljoen persoonlijke, queer ervaringen staan"
            rel="noopener noreferrer"
            target="_blank"
            >Lucas LaRochelle ontwierp een online lhbti-wereldkaart waarop bijna
            een half miljoen persoonlijke, queer ervaringen staan</a
          >
          <span> By Emma Ruiter</span>

          <h2>Gay Times</h2>
          <a
            href="https://www.gaytimes.co.uk/life/lesbian-is-not-a-dirty-word-how-learning-about-our-history-filled-me-with-pride/"
            title="‘Lesbian is not a dirty word: How learning about our history filled me with pride’"
            rel="noopener noreferrer"
            target="_blank"
            >‘Lesbian is not a dirty word: How learning about our history filled
            me with pride’</a
          >
          <span> By Zaynab Melhuish-Khan</span>

          <h2>El Espectador</h2>
          <a
            href="https://www.elespectador.com/genero-y-diversidad/la-disidencia/asi-se-creo-el-mapamundi-lgbtiq-que-ubica-experiencias-de-diversidad-sexual-queering-the-map/"
            title="Así se creó el mapamundi LGBTIQ+ que ubica experiencias de diversidad sexual"
            rel="noopener noreferrer"
            target="_blank"
            >Así se creó el mapamundi LGBTIQ+ que ubica experiencias de
            diversidad sexual</a
          >
          <span> By Mariana Escobar Bernoske</span>

          <h2>Honi Soit</h2>
          <a
            href="http://honisoit.com/2023/05/queer-foreign-finding-our-own-space-between-borders-and-communities/"
            title="Queer & Foreign: Finding our own space between borders and communities"
            rel="noopener noreferrer"
            target="_blank"
            >Queer & Foreign: Finding our own space between borders and
            communities</a
          >
          <span> By René Hà</span>

          <h2>Scratching the Surface</h2>
          <a
            href="https://scratchingthesurface.fm/stories/2023-4-25-community-archives/"
            title="Why community archives are a radical approach to archiving"
            rel="noopener noreferrer"
            target="_blank"
            >Why community archives are a radical approach to archiving</a
          >
          <span> By Randa Hadi & Victoria Gerson</span>

          <h2>Infogr8</h2>
          <a
            href="https://infogr8.com/best-of-data-for-everyone-april-2023/"
            title="Best of Data for Everyone, April 2023: Because even ship tracking can be beautiful"
            rel="noopener noreferrer"
            target="_blank"
            >Best of Data for Everyone, April 2023: Because even ship tracking
            can be beautiful</a
          >
          <span> By Jane Zhang</span>

          <h2>Repubblica</h2>
          <a
            href="https://www.repubblica.it/venerdi/2023/04/21/news/queering_the_map_mappa_gay_lgbtq_storie_damore-397067781/"
            title="La mappa dell'amore queer"
            rel="noopener noreferrer"
            target="_blank">La mappa dell'amore queer</a
          >
          <span> By Michele Gravino</span>

          <h2>Urban Creature</h2>
          <a
            href="https://urbancreature.co/queering-the-map/"
            title="อ่านบันทึกเรื่องราวของชาว LGBTQ+ ที่เชื่อมโยงความทรงจำกับสถานที่ บนแผนที่ออนไลน์ ‘Queering the Map’"
            rel="noopener noreferrer"
            target="_blank"
            >อ่านบันทึกเรื่องราวของชาว LGBTQ+ ที่เชื่อมโยงความทรงจำกับสถานที่
            บนแผนที่ออนไลน์ ‘Queering the Map’</a
          >
          <span> By Urban Creature Staff </span>

          <h2>Nexo</h2>
          <a
            href="https://www.nexojornal.com.br/expresso/2023/03/24/Este-site-conta-hist%C3%B3rias-da-comunidade-LGBTI-pelo-mundo"
            title="Este site conta histórias da comunidade LGBTI+ pelo mundo"
            rel="noopener noreferrer"
            target="_blank"
            >Este site conta histórias da comunidade LGBTI+ pelo mundo</a
          >
          <span> By Murillo Otavio</span>

          <h2>Screenshot Media</h2>
          <a
            href="https://screenshot-media.com/politics/lgbtqi-rights/queering-the-map-interview-lucas-larochelle/?utm_term=Autofeed&utm_medium=Social&utm_source=Twitter#Echobox=1675503952"
            title="Queering the Map: a community-based platform sharing queer and trans stories from across the globe"
            rel="noopener noreferrer"
            target="_blank"
            >Queering the Map: a community-based platform sharing queer and
            trans stories from across the globe</a
          >
          <span> By Charlie Sawyer</span>

          <h2>Global Voices</h2>
          <a
            href="https://globalvoices.org/2023/02/07/queering-the-internet-anonymous-online-spaces-for-lgbtq-people/"
            title="Queering the internet: anonymous online spaces for LGBTQ+ people"
            rel="noopener noreferrer"
            target="_blank"
            >Queering the internet: anonymous online spaces for LGBTQ+ people</a
          >
          <span> By Sydney Allen</span>

          <h2>Paging Dr. Lesbian</h2>
          <a
            href="https://kiradeshler.substack.com/p/towards-a-global-queer-consciousness"
            title="Towards a Global Queer Consciousness"
            rel="noopener noreferrer"
            target="_blank">Towards a Global Queer Consciousness</a
          >
          <span> By Kira Deshler</span>

          <h2>Star Observer</h2>
          <a
            href="https://www.starobserver.com.au/features/queering-the-map-this-maps-style-site-helps-you-drop-a-pin-on-your-queer-experiences/223072"
            title="Queering the Map: This Maps-Style Site Helps You Drop a Pin on Your Queer Experiences"
            rel="noopener noreferrer"
            target="_blank"
            >Queering the Map: This Maps-Style Site Helps You Drop a Pin on Your
            Queer Experiences</a
          >
          <span> By Brandon Bentley</span>

          <h2>CBC News</h2>
          <a
            href="https://www.cbc.ca/news/canada/montreal/queering-the-map-viral-tiktok-1.6347097"
            title="Montrealer's 'Queering the Map' project documents queer experiences all over the world"
            rel="noopener noreferrer"
            target="_blank"
            >Montrealer's 'Queering the Map' project documents queer experiences
            all over the world</a
          >
          <span> By Shahroze Rauf</span>

          <h2>Red Pepper</h2>
          <a
            href="https://www.redpepper.org.uk/queer-space/"
            title="The importance of queer space"
            rel="noopener noreferrer"
            target="_blank">The importance of queer space</a
          >
          <span> By Molly Fleming</span>

          <h2>Immerse</h2>
          <a
            href="https://immerse.news/co-creating-a-map-of-queer-experience-bece7a743ca7"
            title="Co-Creating a Map of Queer Experience"
            rel="noopener noreferrer"
            target="_blank">Co-Creating a Map of Queer Experience</a
          >
          <span> By Sarah Wolozin</span>

          <h2>CityLab</h2>
          <a
            href="https://www.citylab.com/life/2018/02/how-to-queer-the-mapand-fend-off-an-attack/552824/"
            title="A Crowdsourced Map of the Queer World"
            rel="noopener noreferrer"
            target="_blank">A Crowdsourced Map of the Queer World</a
          >
          <span> By Martin Echenique + Alastair Boone</span>

          <h2>VICE</h2>
          <a
            href="https://www.vice.com/en_us/article/ne9kjx/queering-the-map-google-maps-lgtbq"
            title="Find Yourself in The Queer Version of Google Maps"
            rel="noopener noreferrer"
            target="_blank">Find Yourself in The Queer Version of Google Maps</a
          >
          <span> By Sarah Burke</span>

          <h2>CBC Arts</h2>
          <a
            href="https://www.cbc.ca/arts/queer-love-in-the-making-this-massive-interactive-map-holds-a-whole-world-of-heartfelt-moments-1.4722385"
            title="Queer Love in the Making"
            rel="noopener noreferrer"
            target="_blank">Queer Love in the Making</a
          >
          <span> By Peter Knegt</span>

          <h2>CBC Arts</h2>
          <a
            href="https://www.cbc.ca/arts/the-year-in-queer-an-a-z-guide-to-the-exceptional-lgbtq-arts-and-culture-of-2018-1.4921091"
            title="The year in queer: An A-Z guide to the exceptional LGBTQ arts and culture of 2018"
            rel="noopener noreferrer"
            target="_blank"
            >The year in queer: An A-Z guide to the exceptional LGBTQ arts and
            culture of 2018</a
          >
          <span> By Peter Knegt</span>

          <h2>Ruthless Magazine</h2>
          <a
            href="http://www.ruthlessmagazine.co.uk/queering-the-map"
            title="Queering The Map: A Skype Call with Lucas LaRochelle"
            rel="noopener noreferrer"
            target="_blank"
            >Queering The Map: A Skype Call with Lucas LaRochelle</a
          >
          <span> By Angad Singh</span>

          <h2>Projeto Colabora</h2>
          <a
            href="https://projetocolabora.com.br/ods5/o-amor-em-tempos-de-gps/"
            title="O amor em tempos de GPS"
            rel="noopener noreferrer"
            target="_blank">O amor em tempos de GPS</a
          >
          <span> By Carlos Albuquerque</span>

          <h2>Yorokobu</h2>
          <a
            href="https://www.yorokobu.es/queering-the-map/"
            title="El mapa queer que desafía las reglas sociales de sexo y género"
            rel="noopener noreferrer"
            target="_blank"
            >El mapa queer que desafía las reglas sociales de sexo y género</a
          >
          <span> By Manu Garrido</span>

          <h2>Project Myopia</h2>
          <a
            href="https://projectmyopia.com/interview-with-lucas-larochelle-founder-of-queering-the-map/"
            title="Interview with Lucas LaRochelle, Founder of Queering The Map"
            rel="noopener noreferrer"
            target="_blank"
            >Interview with Lucas LaRochelle, Founder of Queering The Map</a
          >
          <span> By Toby Sharpe</span>

          <h2>Archer Magazine</h2>
          <a
            href="http://archermagazine.com.au/2018/08/queering-the-map/"
            title="Queering The Map: An Archive of Queer Experience"
            rel="noopener noreferrer"
            target="_blank">Queering The Map: An Archive of Queer Experience</a
          >
          <span> By Allison Gallagher</span>

          <h2>VOGUE</h2>
          <a
            href="https://www.vogue.co.uk/article/digi-diary-pride-month"
            title="Faved, Followed, Hacked, Blocked - The Digi Diary Celebrates Pride With BBZ"
            rel="noopener noreferrer"
            target="_blank"
            >Faved, Followed, Hacked, Blocked - The Digi Diary Celebrates Pride
            With BBZ</a
          >
          <span> By BBZ London</span>

          <h2>CityNews</h2>
          <a
            href="https://montreal.citynews.ca/video/2019/07/19/queering-the-map-at-concordia/"
            title="Queering The Map at Concordia"
            rel="noopener noreferrer"
            target="_blank">Queering The Map at Concordia</a
          >
          <span> By Aimée Lemieux</span>

          <h2>Tourisme Montreal</h2>
          <a
            href="https://blog.mtl.org/en/15-montrealers-2019"
            title="15 Montrealers Changing The World"
            rel="noopener noreferrer"
            target="_blank">15 Montrealers Changing The World</a
          >
          <span> By Mark Andrew Hamilton</span>

          <h2>Conde Nast Traveller</h2>
          <a
            href="https://www.cntraveler.com/story/queering-the-map-collects-queer-sites-and-memories"
            title="This Mapping Tool Collects Queer Sites and Memories"
            rel="noopener noreferrer"
            target="_blank"
            >This Mapping Tool Collects Queer Sites and Memories</a
          >
          <span> By Melissa Kravitz Hoeffner</span>

          <h2>Concordia</h2>
          <a
            href="https://www.concordia.ca/news/stories/2019/07/09/queering-the-map-comes-to-concordia-s-4th-space.html"
            title="Queering The Map comes to Concordia’s 4TH SPACE"
            rel="noopener noreferrer"
            target="_blank">Queering The Map comes to Concordia’s 4TH SPACE</a
          >
          <span> By Mackenzie Lad and Tom Peacock</span>

          <h2>AIGA Eye On Design</h2>
          <a
            href="https://eyeondesign.aiga.org/no-184-a-map-of-queer-experience-art-and-design-in-the-gulf-jumpy-design-for-a-historic-playhouse-more/"
            title="A Map of Queer Experience, Art and Design in the Gulf, Jumpy Design for a Historic Playhouse + More"
            rel="noopener noreferrer"
            target="_blank"
            >A Map of Queer Experience, Art and Design in the Gulf, Jumpy Design
            for a Historic Playhouse + More</a
          >
          <span> By Meg Miller</span>

          <h2>Paper</h2>
          <a
            href="https://www.papermag.com/queering-the-map-lgbtq-history-2543546974.html"
            title="Queering The Map is a Living LGBTQ History"
            rel="noopener noreferrer"
            target="_blank">Queering The Map is a Living LGBTQ History</a
          >
          <span> By Jhoni Jackson</span>

          <h2>i-D</h2>
          <a
            href="https://i-d.vice.com/en_us/article/vbxkpb/queering-the-map-is-connecting-queer-moments-in-life"
            title="Queering The Map is connecting Queer Moments in Life"
            rel="noopener noreferrer"
            target="_blank"
            >Queering The Map is connecting Queer Moments in Life</a
          >
          <span> By Amelia Abraham</span>

          <h2>INTO</h2>
          <a
            href="https://www.intomore.com/culture/postcyberattack-queering-the-map-argues-that-anywhere-can-be-a-queer-space"
            title="Post Cyber Attack Queering The Map Argues That Anywhere Can Be a Queer Space"
            rel="noopener noreferrer"
            target="_blank"
            >Post Cyber Attack Queering The Map Argues That Anywhere Can Be a
            Queer Space</a
          >
          <span> By Matthew Rodriguez</span>

          <h2>LGBT Sentinel</h2>
          <a
            href="http://www.thelgbtsentinel.com/queering-the-map-interview-creator-lucas-larochelle/"
            title="Queering The Map: An Interview with Creator Lucas LaRochelle"
            rel="noopener noreferrer"
            target="_blank"
            >Queering The Map: An Interview with Creator Lucas LaRochelle</a
          >
          <span> By Jo Jackson</span>

          <h2>The Outline</h2>
          <a
            href="https://theoutline.com/post/4043/queering-the-map-is-back?zd=1&zi=lue4kna4"
            title="Queering The Map is back"
            rel="noopener noreferrer"
            target="_blank">Queering The Map is back</a
          >
          <span> By Anne-Derrick Gaillot</span>

          <h2>The Skinny</h2>
          <a
            href="https://www.theskinny.co.uk/sexuality/lgbt/queering-the-map-on-capturing-lgbtq-history"
            title="Queering The Map on Capturing LGBTQ+ History"
            rel="noopener noreferrer"
            target="_blank">Queering The Map on Capturing LGBTQ+ History</a
          >
          <span> By Katie Goh</span>

          <h2>Hornet</h2>
          <a
            href="https://hornet.com/stories/queering-the-map-website/"
            title="This Project Dedicated to Mapping Queer Spaces Is a Precious Tool for Our LGBTQ Community"
            rel="noopener noreferrer"
            target="_blank"
            >This Project Dedicated to Mapping Queer Spaces Is a Precious Tool
            for Our LGBTQ Community</a
          >
          <span> By Alexander Kacala</span>

          <h2>Autostraddle</h2>
          <a
            href="https://www.autostraddle.com/here-queer-everywhere-queering-the-map-gives-voice-to-queer-spaces-worldwide-419732/"
            title="Here, Queer, Everywhere: ‘Queering the Map’ Gives Voice to Queer Spaces Worldwide"
            rel="noopener noreferrer"
            target="_blank"
            >Here, Queer, Everywhere: ‘Queering the Map’ Gives Voice to Queer
            Spaces Worldwide</a
          >
          <span> By Vanessa Pamela</span>

          <h2>Fugues</h2>
          <a
            href="https://www.fugues.com/252198-7240-7276-article-geolocaliser-nos-souvenirs-queer.html"
            title="Géolocaliser nos souvenirs queer"
            rel="noopener noreferrer"
            target="_blank">Géolocaliser nos souvenirs queer</a
          >
          <span> By Michel Joanny-Furtin</span>

          <h2>Numerama</h2>
          <a
            href="https://www.numerama.com/pop-culture/367351-sur-cette-carte-interactive-des-personnes-queer-faconnent-leur-histoire-collective.html"
            title="Sur cette carte interactive, des personnes queer façonnent leur histoire collective"
            rel="noopener noreferrer"
            target="_blank"
            >Sur cette carte interactive, des personnes queer façonnent leur
            histoire collective</a
          >
          <span> By Nelly Lesage</span>

          <h2>ZETT</h2>
          <a
            href="https://ze.tt/landkarte-queerer-momente-hier-hatte-ich-meinen-ersten-blowjob-von-einem-anderen-mann/"
            title="Landkarte queerer Momente: Hier hatte ich meinen ersten Blowjob von einem anderen Mann"
            rel="noopener noreferrer"
            target="_blank"
            >Landkarte queerer Momente: Hier hatte ich meinen ersten Blowjob von
            einem anderen Mann</a
          >
          <span> By Eva Reisinger</span>

          <h2>Komitid</h2>
          <a
            href="https://www.komitid.fr/2018/06/11/queering-the-map-cartographie-interview/"
            title="« Queering the Map » ou comment repenser le territoire quand on est invisibilisé.e.s"
            rel="noopener noreferrer"
            target="_blank"
            >« Queering the Map » ou comment repenser le territoire quand on est
            invisibilisé.e.s</a
          >
          <span> By Anne-Laure Pineau</span>

          <h2>McGill Daily</h2>
          <a
            href="https://www.mcgilldaily.com/2018/01/archiving-queer-histories/"
            title="Archiving Queer Histories"
            rel="noopener noreferrer"
            target="_blank">Archiving Queer Histories</a
          >
          <span> By Panayot Gaidov</span>

          <h2>Concordia</h2>
          <a
            href="https://www.concordia.ca/news/stories/2018/12/11/a-digital-project-crowdsources-27-000-queer-memories-from-around-the-globe.html"
            title="A digital project crowdsources 27,000 queer memories from around the globe"
            rel="noopener noreferrer"
            target="_blank"
            >A digital project crowdsources 27,000 queer memories from around
            the globe</a
          >
          <span> By Mackenzie Lad</span>

          <h2>SRF</h2>
          <a
            href="https://www.srf.ch/kultur/netzwelt/webprojekt-gegen-homophobie-eine-weltkarte-der-queeren-liebe"
            title="Eine Weltkarte der queeren Liebe"
            rel="noopener noreferrer"
            target="_blank">Eine Weltkarte der queeren Liebe</a
          >
          <span> By Mirja Gabathuler</span>
        </div>
      </section>

      <section style={active_tab !== 6 ? 'display: none;' : ''}>
        <h2>Terms of Use</h2>
        <div class="privacy_policy overlay__section-text">
          <p><small>Last Updated on April 15, 2024</small></p>

          <h2>Summary</h2>

          <p>
            It is important to us that you understand our Terms of Use, which,
            simply put, are the conditions and rules of using Queering the Map.
            Because legal jargon is often intricate, lengthy and dull, we have
            created a summary of the key points to keep in mind while using this
            website.
          </p>
          <p>
            It's important to note that this summary is not intended to replace
            the complete Terms of Use, and we strongly recommend reviewing the
            full Terms of Use before engaging with our website.
          </p>
          <ul>
            <li>
              <p>
                By using the Queering the Map website, application or other
                services (“Services”), you agree to our Terms of Use and our
                Privacy Policy. If you don’t agree to our Terms of Use or
                Privacy Policy, do not use our Services.
              </p>
            </li>
            <li>
              <p>
                We can change the Terms of Use and Privacy Policy at any time,
                so please check them both often to ensure you are up to date on
                any changes.
              </p>
            </li>
            <li>
              <p>
                Our Services allow you to share User Content and you retain
                ownership of what you post, but by using the Services, you grant
                us and other users of the website permission to use, modify, and
                share your User Content, both on the website itself and beyond
                it. You confirm that you own or have permission to use the
                content you share and agree that Queering the Map and others can
                use it according to these terms.
              </p>
            </li>
            <li>
              <p>
                You retain the right to remove User Content that you have
                submitted to the Queering the Map website. If you want your User
                Content removed at any time, and for any reason, please contact
                us at <a href="mailto:hi@queeringthemap.com"
                  >hi@queeringthemap.com</a
                >.
              </p>
            </li>
            <li>
              <p>
                When using our Services, you can create, upload, and share User
                Content subject to specific guidelines. Your content must comply
                with all laws and be uploaded only if you have the rights to it
                or permission from the owner. Additionally, your content must
                not promote hate, violence, or discrimination, disclose personal
                contact information, infringe on intellectual property rights,
                impersonate others, contain harmful software, serve commercial
                purposes, or engage in spam or fraudulent activities.
              </p>
            </li>
            <li>
              <p>
                Our Services operates under the Creative Commons
                Attribution-NonCommercial-ShareAlike 4.0 International License,
                which allows you to share and adapt the material on the website
                as long as you give appropriate credit, use it for
                non-commercial purposes, and share any adaptations under the
                same license. By accessing or using the website, you agree to
                comply with these terms.
              </p>
            </li>
            <li>
              <p>Don't use our Services if you are under 13.</p>
            </li>
            <li>
              <p>
                While we try to keep our Services up and running, sometimes the
                site may go down, data may be lost, or other issues may arise.
                We will try to fix these issues, but we are not liable to you or
                any other users if such issues arise.
              </p>
            </li>
            <li>
              <p>
                Our Services may include links to third-party websites or
                technologies. We make no promises about the content of those
                third-party sites or the safety of those sites.
              </p>
            </li>
            <li>
              <p>
                Our Services are only for personal use, not for business or
                commercial purposes.
              </p>
            </li>
            <li>
              <p>
                If you have questions, please contact us: <a
                  href="mailto:hi@queeringthemap.com">hi@queeringthemap.com</a
                >.
              </p>
            </li>
          </ul>
          <h2>1. Introduction</h2>
          <p>
            The Queering the Map website, application and other services (the
            “Queering the Ma Services”) are made available to you in accordance
            with these Terms by Queering the Map (“Queering the Map”, “we”,
            “our”, “us”). These terms and conditions of use, together with our
            Privacy Policy and all supplemental terms (as amended from time to
            time), other documents and policies that are expressly referenced in
            these terms and conditions (the “Terms”), govern your use of the
            Services.
          </p>
          <p>
            Please read these Terms carefully. These Terms form a legally
            binding contract between you and us. By downloading, accessing or
            otherwise using any Queering the Map Services in any way, you agree
            to be bound by these Terms. If you do not agree to be bound by these
            Terms you should not access, post User Content on, or otherwise
            engage with any Queering the Map Services.
          </p>
          <p>
            Please keep a copy of these terms for future reference. You should
            check these terms every time you use any Queering the Map Services
            as we may change these terms at any time in accordance with the
            process set out at Section 2 below.
          </p>

          <h2>2. Changes To These Terms</h2>
          <p>
            We may change these Terms to reflect: (a) changes in applicable
            laws; (b) regulatory or security requirements; (c) relevant guidance
            or codes of practice; (d) technical alterations to Queering the Map
            Services; (e) improvements for clarity and consistency; or (f) any
            other reason within our sole discretion.
          </p>

          <p>
            Please check the Terms whenever you use any Queering the Map
            Services. We will treat your continued use of the Queering the Map
            Services as acceptance of any changes made to the Terms from the
            previous version. If you do not agree with the changes you should
            stop using our Services.
          </p>

          <h2>3. Your Right to Post User Content</h2>
          <p>
            Queering The Map (‘the Service’) allows you to post content. You
            retain any and all of your rights to any content you submit, post or
            display on or through Queering The Map and you are responsible for
            protecting those rights.
          </p>

          <p>
            By posting content through the Service, you grant the Service the
            unlimited and worldwide right and license, without any monetary
            compensation, to use, modify, publicly perform, publicly display,
            reproduce, and distribute such content on and through the Service,
            and its derivatives in any and all media and format, whether such
            Service and/or derivatives are distributed directly by us or through
            third parties under license by us. You agree that this license
            includes the right for the Service to make your content available to
            other users of the Service and its derivatives, who may also use,
            share, repost and/or display your content subject to these terms.
          </p>

          <p>
            You represent and warrant that: (i) the content you post is yours
            (you own it) or you have the right to use it and grant us the rights
            and license as provided in these terms, and (ii) the posting of your
            content on or through the Service and the exercise by the Service or
            any third-party licensee of any of the rights granted by you under
            these Terms does not and will not violate the privacy rights,
            publicity rights, copyrights, contract rights or any other rights of
            any person. You hereby release the Service and our third-party
            licensees from any claims of any kind or nature arising from the use
            of your content as permitted hereunder, including those based upon
            defamation, invasion of privacy, right of publicity, copyright,
            contract right or any other right of any person.
          </p>

          <h2>4. Removal Of User Content</h2>
          <p>
            You retain the right to remove User Content that you have submitted
            to the Queering the Map Services. If you want your User Content
            removed from the Queering the Map Services at any time, and for any
            reason, please contact us at <a href="mailto:hi@queeringthemap.com"
              >hi@queeringthemap.com</a
            >. We will remove your content from the Queering the Map Services in
            a reasonable and timely manner.
          </p>
          <p>
            We retain the right to remove User Content from Queering the Map
            Services at any time, and for any reason.
          </p>

          <h2>5. Content Standards Policy</h2>
          <p>
            You may have the opportunity to create, upload and/or share content
            when using the Queering the Map Services (“User Content”). You shall
            ensure that all User Content created or posted by you satisfies the
            requirements set out in this Section 5. These requirements apply in
            addition to any other policies or terms of use we provide or are
            published in the Queering the Map Services from time to time.
          </p>

          <h2>User Content:</h2>
          <ul>
            <li>
              <h2 style="padding-left: 0px;border-top: 0px;padding-top: 10px;">
                Must:
              </h2>
            </li>
          </ul>
          <ul class="voidcircle">
            <li>
              Be uploaded in good faith and compliant with all applicable laws,
              regulations and codes of conduct; and
            </li>
            <li>
              Only be uploaded if you own the rights in such content, have
              appropriate permission from the rights owner, or are otherwise
              authorized by law.
            </li>
          </ul>
          <ul>
            <li>
              <h2 style="padding-left: 0px;border-top: 0px;padding-top: 0px;">
                Must Not:
              </h2>
            </li>
          </ul>
          <ul class="voidcircle">
            <li>
              Be hateful, inflammatory, threatening, intentionally misleading,
              harassing, or fraudulent in any way;
            </li>
            <li>Promote violence or discrimination;</li>
            <li>
              Reveal details that enable you or anyone else to be identified or
              contacted outside of the Queering the Map Services (e.g. last
              name, postal address, email address, telephone number or social
              media handle);
            </li>
            <li>
              Be defamatory or an invasion of an individual’s right to privacy;
            </li>
            <li>
              Infringe the intellectual property or other rights of any third
              party, including copyrights, trademarks, database rights, any
              rights of confidentiality or any similar rights;
            </li>
            <li>
              Attempt to or purport to impersonate any person or misrepresent
              your identity, affiliation or connection to any other person;
            </li>
            <li>Include hyperlinks or connections to third party websites;</li>
            <li>
              Contain viruses, Trojans, worms, time-bombs, keystroke loggers,
              spyware, adware or any other harmful programs or similar computer
              code designed to affect the operation of any computer software,
              hardware or network;
            </li>
            <li>Have any commercial purpose;</li>
            <li>
              Involve junk mail, spam, pyramid selling or similar schemes; or
            </li>
            <li>
              Consist of any other content that, in our opinion breaches or may
              breach the spirit of or intention behind any of the above “must
              nots”.
            </li>
          </ul>

          <h2>6. Your License To Use Queering The Map Services</h2>

          <p>
            Queering the Map Services operates under the terms of the Creative
            Commons Attribution-NonCommercial-ShareAlike 4.0 International
            License ("License"). By accessing or using this website, you agree
            to comply with the terms of this License.The full text of the
            Creative Commons Attribution-NonCommercial-ShareAlike 4.0
            International License is available at the following URL:
            https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.en.
          </p>

          <p>In summary, this License allows you to:</p>

          <ul>
            <li>
              Share: Copy and redistribute the material in any medium or format.
            </li>
            <li>Adapt: Remix, transform, and build upon the material.</li>
          </ul>
          <p>Under the following conditions:</p>

          <ul>
            <li>
              Attribution: You must give appropriate credit, provide a link to
              the license, and indicate if changes were made. You may do so in
              any reasonable manner, but not in any way that suggests the
              licensor endorses you or your use.
            </li>
            <li>
              NonCommercial: You may not use the material for commercial
              purposes.
            </li>
            <li>
              ShareAlike: If you remix, transform, or build upon the material,
              you must distribute your contributions under the same license as
              the original.
            </li>
          </ul>
          <p>
            By using Queering the Map Services, you acknowledge that we offer
            the material of the website under the Creative Commons
            Attribution-NonCommercial-ShareAlike 4.0 International License, and
            you agree to comply with its terms.
          </p>

          <p>
            If you do not agree with the terms of this License, you are not
            authorized to use or access the Queering the Map Services. For any
            questions or clarifications regarding this License, please refer to
            the provided URL or contact us at <a
              href="mailto:hi@queeringthemap.com">hi@queeringthemap.com</a
            >.
          </p>

          <h2>7. Intellectual Property Rights, Ownership And Restrictions</h2>

          <p>
            The names, brands and logos in the Queering the Map Services,
            whether existing now or in the future, are either the registered
            and/or unregistered trademarks of Queering the Map or owned by
            third-parties and licensed for our use.
          </p>
          <p>
            Materials (including without limit all information, software, data,
            text, photographs, graphics, sound and video) placed on any Queering
            the Map Services by us, or on our behalf, are protected by our (or
            our business partners/suppliers/advertisers or licensors) copyright
            and other intellectual property rights. You may not use these
            materials or any Queering the Map Services except in accordance with
            these Terms and for personal and non-commercial use only.
          </p>
          <p>
            You acknowledge that all intellectual property and other rights in
            any Queering the Map Services, including without limitation any
            content, and virtual items in the Queering the Map Services are and
            will remain the property of Queering the Map and/or our licensors.
            As part of the license granted under these Terms, you are only
            granted limited non transferrable, non-sub-licensable permission
            (which can be revoked at any time) to use such content or Queering
            the Map Services, subject to and in accordance with these Terms and
            solely for your personal and non-commercial use.
          </p>

          <p>
            Notwithstanding anything to the contrary herein, you acknowledge and
            agree that you shall have no ownership, title, or other proprietary
            interest in any Queering the Map Services. We do not permit any
            sale, gift or trade outside of the Queering the Map Services of
            anything that appears or originates in the Queering the Map
            Services.
          </p>

          <p>
            We reserve the right to stop offering any Queering the Map Services
            at any time, either permanently or temporarily, at which point any
            license granted to you to use the Queering the Map Services or a
            part thereof will be automatically terminated or suspended. In such
            event, Queering the Map shall not be required to provide refunds,
            benefits or other compensation to users in connection with such
            discontinued elements of the Queering the Map Services unless
            required by law.
          </p>

          <h2>8. Preteens And Users Under 18</h2>
          <p>
            You may not use the Queering the Map Services if you are under the
            age of 13. For users between 13 and 18 years of age, subject to the
            laws of your country of residence and you obtaining your
            parents’/guardians’ prior consent, you will be entitled to use the
            Queering the Map Services. We do not knowingly collect or store any
            personally identifiable information from children under 13.
          </p>
          <p>
            If you are under 18, by using the Queering the Map Services you are
            representing that you have consent from your parents/guardian to use
            the Queering the Map Services in accordance with our Terms. You and
            your parent(s) or guardian(s) must review these Terms together.
            Parents and guardians are responsible for the acts of children under
            18 years of age when using the Queering the Map Services. We
            recommend that parents and guardians familiarize themselves with
            parental controls on devices they provide their child.
          </p>

          <h2>9. Functioning Of Queering The Map Services</h2>
          <p>
            We will use reasonable endeavors to maintain the operation of the
            Queering the Map Services and rectify faults as quickly as possible.
            We reserve the right to modify, including by way of regular updates,
            the Queering the Map Services and we may have to suspend operation
            of any Queering the Map Services without notice for repair,
            maintenance, improvement, security or any other reason. If so, we
            will do our best to ensure that the suspension is as short as
            possible. We cannot accept responsibility for such suspensions,
            interruptions or errors caused by circumstances outside our
            reasonable control.
          </p>
          <p>
            We cannot guarantee that any Queering the Map Services will work on
            or be compatible with or capable of being accessed on any particular
            devices, platforms, operating systems or equipment, or in
            conjunction with any particular non-Queering the Map approved
            software or connectivity services. We do not accept responsibility
            for such equipment, software or services. We also do not guarantee
            that the Queering the Map Services can be accessed in all geographic
            locations.
          </p>

          <h2>10. Third Party Sites And Technologies</h2>
          <p>
            Queering the Map Services may include links to internet sites or
            other technologies supplied by third parties. We make no promises
            about those third-party sites, technologies, or their content,
            products, or services as these are outside our reasonable control.
            Any third-party sites or technologies suggested are not endorsed,
            controlled, or verified by us. We do not guarantee that any
            suggested technologies will work on your computer or be virus free.
            Any suggestions made are not a warranty of any kind, and we are not
            responsible for any disruption, problem, damage, data loss, cost, or
            inconvenience caused by the suggested sites or technologies. We will
            not provide support for any sites or technologies which are not our
            own. We exercise no control over the copyright, patent, or trademark
            compliance or legality of the suggested sites or technologies.
          </p>

          <h2>11. Our And Your Legal Responsibility</h2>
          <p>
            The Queering the Map Services are provided on an “as is” and “as
            available’ basis. To the fullest extent permitted under applicable
            law, we provide no express, implied, or statutory warranties that
            you will be able to access or use any Queering the Map services at
            the times or locations of your choosing or that the Queering the Map
            services will be uninterrupted or free of errors, bugs, corruption,
            loss, interference, hacking, or viruses. Accordingly, we are not
            liable to you for any loss or damage that might arise, for example,
            from the inoperability, unavailability, or security vulnerabilities
            of the Queering the Map Services or from your reliance on the
            quality, accuracy, or reliability of the Queering the Map Services.
            We also make no guarantee that the Queering the Map services will
            work with or can be accessed on any particular devices, platforms,
            operating systems, or equipment, or in conjunction with any
            particular software or connectivity services. We do not accept
            responsibility for such equipment, software, or services.
          </p>
          <p>
            We expressly disclaim liability for any loss or damage caused by us
            or our employees or agents in circumstances where (a) there is no
            breach of a legal duty of care owed to you by us or by any of our
            employees or agents; (b) such loss or damage is not a reasonably
            foreseeable result of any such breach; or (c) such loss or damage
            relates to a business. By using the Queering the Map Services or
            other services offered by us, you agree to waive any legal duty of
            care owed to you by us, to the maximum extent allowed by law.
          </p>
          <p>
            To the maximum extent permissible by law, our total liability,
            whether arising in contract, tort, strict liability, or otherwise,
            including liability for any losses, costs, expenses, or damages that
            you suffer in connection with any Queering the Map services or these
            terms shall not exceed (in the aggregate) the fees paid to us by you
            for your use of the Queering the Map Services, if any.
            Notwithstanding the foregoing, nothing in these terms shall exclude
            or limit our liability for any loss or damage, to the extent that
            such liability cannot under any applicable law be excluded or
            limited.
          </p>
          <p>
            You will be liable for any loss or damage we suffer arising from
            your breach of these terms or misuse of the Queering the Map
            services.
          </p>

          <p>
            We do not exclude or limit in any way our liability to you where it
            would be unlawful to do so. This includes liability for death or
            personal injury caused by our negligence or the negligence of our
            employees, agents, or subcontractors and for fraud or fraudulent
            misrepresentation. Please note that we only provide Queering the Map
            Services for personal use. You agree not to use the Queering the Map
            Services for any commercial or business purposes, and we have no
            liability to you for any loss of profit, loss of business, business
            interruption, or loss of business opportunity or any indirect or
            consequential loss. Nothing in these terms affects your statutory
            rights as a consumer.
          </p>

          <h2>12. General</h2>
          <p>
            These Terms and any document incorporated by reference constitute
            the entire agreement between the parties with respect to its subject
            matter and supersede any previous terms between the parties in
            relation to such matters. The limitations, exclusions and
            restrictions in these Terms shall inure to the benefit of our
            licensors, successor and assigns.
          </p>
          <p>
            These Terms are drafted in the English language and may be
            translated into other languages. The English language version of
            these Terms shall prevail if there is a conflict or inconsistency or
            clarification required with other language versions. The headings in
            these Terms are for ease of reference only and shall be disregarded
            in construing or interpreting the Terms. If we fail to enforce any
            provision of these Terms, that failure will not preclude us from
            enforcing either that provision (or any similar provision) on a
            later occasion. If any provision of these Terms is found by a court
            to be invalid, we agree that the court should endeavor to give
            effect to the parties’ intentions as reflected in the provision and
            that other provisions remain in full force and effect. We may
            transfer all or part of our rights or duties under these Terms
            provided we take reasonable steps to ensure that your rights under
            these Terms are not prejudiced.
          </p>

          <p>
            As these Terms are personal to you, you may not transfer any of your
            rights or duties under it without our prior written consent. A
            person who is not a party to these Terms shall have no rights to
            enforce any its terms. These Terms are governed by the laws of the
            province of Ontario. You and we both agree to the exclusive
            jurisdiction and venue of the provincial and federal courts of
            Ontario and stipulate to the fairness and convenience of proceedings
            in such courts for all disputes arising out of or relating to use of
            the Queering the Map Services.
          </p>

          <h2>13. Force Majeure</h2>
          <p>
            Force majeure means any cause or event beyond the reasonable control
            of the affected party including without limitation war, civil war,
            armed conflict or terrorist attack, nuclear, chemical or biological
            contamination, pandemic, strikes, civil action, unavailability of
            the internet, unscheduled hosting and maintenance to systems, power
            and data losses and acts of God. We shall not be obliged to perform
            our obligations under these Terms to the extent that we are
            prevented from doing so by reason of an event of force majeure.
            Performance of these Terms may cease during the continuation of the
            force majeure event and for such time after that event ceases as is
            necessary for us to start satisfying our obligations again. For so
            long as such force majeure event is continuing, our corresponding
            obligations under these Terms shall be suspended to the same extent.
            If such force majeure continues for a continuous period in excess of
            four months, we may terminate access to the Queering the Map
            Services immediately on service of notice to you.
          </p>

          <h2>14. Contact Us</h2>
          <p>
            For answers to any questions you may have about our Terms of Use,
            email us at <a href="mailto:hi@queeringthemap.com"
              >hi@queeringthemap.com</a
            >.
          </p>
        </div>
      </section>
      <section style={active_tab !== 7 ? 'display: none;' : ''}>
        <h2>Privacy Policy</h2>
        <div class="privacy_policy overlay__section-text">
          <p><small>Last Updated on April 15, 2024</small></p>

          <p>
            This Privacy Policy outlines the collection, use, disclosure, and
            protection of your information when you access and use our platform.
            Your privacy is crucial to us, and we are committed to maintaining
            the confidentiality and security of the information you provide. By
            using Queering the Map, you acknowledge that you have read and
            understood this Privacy Policy. Your continued use of the platform
            constitutes acceptance of any updates or changes to this policy. If
            you do not agree to this Privacy Policy, do not use Queering the
            Map.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            User Content: Users may voluntarily provide User Content, such as
            personal stories, experiences, and other content, in text format.
          </p>
          <p>
            Location Data: Users may voluntarily select a location on the map
            where they would like their User Content to appear. We do not
            collect information about users' actual location.
          </p>
          <p>
            Time Data: We collect the time that a user's submission is made.
            This is so that we can organize submissions chronologically in our
            database.
          </p>

          <p>
            Email Addresses: We collect user’s email addresses if they directly
            contact us through email, or use the Request for Removal form. We do
            not collect email addresses when a user submits User Content. We do
            not share email addresses with any third parties.
          </p>
          <h2>2. Use of Information</h2>
          <p>
            Platform Functionality: We use the information collected to provide
            and improve the functionality of Queering the Map, allowing users to
            share and explore LGBTQ2IA+ experiences globally.
          </p>

          <p>
            Research and Dissemination: We may analyze and use aggregated,
            non-personal data for research and artistic purposes to enhance the
            platform's overall experience and mission.
          </p>

          <h2>3. Disclosure of Information</h2>
          <p>
            Anonymity: Users contribute anonymously if they choose not to
            associate their contributions with identifiable information. Users
            cannot create accounts, so no usernames, passwords, phone numbers,
            email addresses or social media handles are associated with
            contributions. We moderate all contributions for breaches of
            anonymity.
          </p>

          <p>
            Legal Compliance: We may disclose information in response to legal
            processes or when required to comply with applicable laws,
            regulations, or government requests.
          </p>

          <h2>4. Third-Party Services</h2>
          <p>
            Queering the Map may use third-party services for analytics,
            hosting, and other functionalities. These services may have their
            own privacy policies, and users are encouraged to review them.
          </p>

          <h2>5. Security</h2>
          <p>
            We implement reasonable measures to protect the information we
            collect from unauthorized access, disclosure, or alteration.
            However, no data transmission over the internet is entirely secure,
            and we cannot guarantee absolute security.
          </p>

          <h2>6. Children's Privacy</h2>
          <p>
            Queering the Map is intended for users aged 13 and older. We do not
            knowingly collect information from individuals under the age of 13.
          </p>

          <h2>7. Changes to This Privacy Policy</h2>

          <p>
            We reserve the right to update or change our Privacy Policy at any
            time. Any changes will be effective immediately upon posting the
            updated Privacy Policy on the platform.
          </p>

          <h2>8. Preteens And Users Under 18</h2>
          <p>
            For answers to any questions you may have about our Terms of Use,
            email us at <a href="mailto:hi@queeringthemap.com"
              >hi@queeringthemap.com</a
            >.
          </p>
        </div>
      </section>
      <section style={active_tab !== 8 ? 'display: none;' : ''}>
        <h2>Contact</h2>
        <div class="overlay__section-text">
          <p>
            Get in touch at <a href="mailto:hi@queeringthemap.com"
              >hi@queeringthemap.com</a
            >
          </p>
          <p>
            Stay connected with us on <a
              href="https://www.instagram.com/queeringthemap/"
              target="_blank"
              rel="noopener">Instagram</a
            >,
            <a
              href="https://twitter.com/queeringthemap_"
              target="_blank"
              rel="noopener">Twitter</a
            >
            and
            <a
              href="https://www.tiktok.com/@queering_the_map"
              target="_blank"
              rel="noopener">TikTok</a
            >.
          </p>
        </div>
      </section>
    </div>
    <div class="footer__menu__margin">
      <div class="info__tabs first__row">
        <button class:active={active_tab == 5} on:click={() => showTabState(5)}
          >FAQs
        </button>
        <button
          class:active={active_tab == 6}
          style="border-right: unset;"
          on:click={() => showTabState(6)}
          >Terms of Use
        </button>
      </div>
      <div class="info__tabs">
        <button class:active={active_tab == 7} on:click={() => showTabState(7)}
          >Privacy Policy
        </button>
        <button
          class:active={active_tab == 8}
          style="border-right: unset;"
          on:click={() => showTabState(8)}
          >Contact
        </button>
      </div>
    </div>
  </div>
</aside>

<style>
  a {
    cursor: pointer;
  }
  ul {
    list-style-type: disc;
    margin-top: -5px;

    padding-right: 1em;
  }
  ul.voidcircle li {
    margin-top: -5px;
    padding-bottom: 10px;
  }
  ul.voidcircle {
    padding-left: 3.5em;
    padding-right: 1.5em;
    list-style-type: circle;
  }
  .__press h2.divider {
    border-top: 1.01px solid var(--color-dark);
    padding-top: 1em;
    padding-left: 2.05rem;
    font-weight: bold !important;
  }
  .__press {
    display: flex;
    flex-direction: column;
  }
  .__press span {
    padding-left: 10px;
    margin-top: 10px;
    display: none;
    /* hides press names */
  }
  .__press a {
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 0px;
    font-size: 15px;
  }
  .__press h2 {
    font-size: 15.1px;
    border-top: 0px;
    padding-top: 4px;
    padding-left: 1em;
    padding-bottom: 0px;
    margin-bottom: 0px;
    font-weight: 400 !important;
  }
  .footer__menu__margin {
    margin-top: 20px;
    width: calc((40vw));
    position: sticky;
    bottom: 0px;
    background: var(--color-pink);
  }
  .header__menu__margin {
    width: calc((40% - 43px));
    left: 54px;
    position: fixed;
    background: var(--color-pink);
  }

  .info__tabs {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
  }
  .info__tabs button {
    width: 50%;
    border: 1.01px solid var(--color-dark);
    height: 22.5px;
    font-size: 0.9rem;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    color: var(--color-dark);
  }
  .info__tabs button.active {
    background-color: var(--color-dark);
    color: var(--color-pink);
  }
  .info__tabs button:hover {
    background-color: black;
    color: var(--color-pink);
    transition-duration: 300ms;
    transition-timing-function: ease;
  }
  .info__tabs button:nth-child(odd) {
    border-left: 0px solid black;
    border-right: unset;
  }

  .info__tabs.first__row button {
    border-bottom: 0px;
  }
  .partial_div-numbered {
    display: flex;
    gap: 8px;
  }
  .partial_div-numbered p {
    margin-top: 0px;
  }
  .partial_div-numbered span {
    border: 1.01px solid var(--color-dark);
    border-radius: 50%;
    min-width: 22px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .overlay {
    height: 100%;
    position: fixed;
    z-index: var(--overlay-z-index);
    top: 0;
    background-color: var(--color-pink);
    overflow-x: hidden;
  }

  .overlay__outer section p {
    padding-left: 1em;
    padding-right: 1em;
  }
  .overlay__outer section ul p {
    padding-left: 0em;
    padding-right: 0em;
  }

  .overlay__outer section .donate_button {
    width: calc(100% - 2em);
    margin: auto;
    display: flex;
    justify-content: center;
  }

  section {
    margin-top: 2em;
  }

  h2 {
    text-decoration: none;
    font-size: 15px;
    color: var(--color-dark);
    display: block;
    font-weight: 500;
    padding-bottom: 4px;
    border-top: 1px solid var(--color-dark);
    padding-left: 2.05rem;
  }
  .overlay__content h2 {
    font-weight: bold;
    font-size: 15px;
  }
  @media (min-width: 800px) {
    h2 {
      font-size: 15px;
      padding-top: 1em;
    }
  }

  .overlay__section-text {
    text-decoration: none;
    color: var(--color-dark);
    display: block;
    margin-top: 1em;
    font-size: 15px;
  }

  .overlay__section-text > *:first-child {
    margin-top: 0;
  }

  .overlay__section-text > *:last-child {
    margin-bottom: 0;
  }

  a {
    text-decoration: underline;
    text-decoration-color: var(--color-dark);
    color: var(--color-dark);
  }

  a:not(.closebtn):hover,
  a:not(.closebtn):focus {
    color: var(--color-pink-bright);
    text-decoration-color: var(--color-pink-bright);
  }

  .overlay--info {
    left: 0;
    z-index: 99999;
  }
  .overlay--info::-webkit-scrollbar {
    display: none;
  }

  .overlay--info {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .overlay__outer {
    padding-top: 11px;
  }
  @media (max-width: 800px) {
    h2 {
      padding-top: 1.05em;
      padding-bottom: 0px;
    }
    .overlay--info {
      margin-top: 9px;
      margin-left: 9px;
      margin-right: 9px;
      max-height: 98vh;
      background: transparent;
      width: calc(100vw - 18px);
    }
    .overlay__outer {
      background: var(--color-pink);
      border: 1.01px solid var(--color-dark);
      border-bottom: 0px;
    }
    .header__menu__margin {
      width: calc((100% - 63px));
      left: 54px;
    }
    .footer__menu__margin {
      width: 100%;
    }
  }

  @media (min-width: 800px) {
    .overlay__outer {
      width: calc(40vw);
      padding-top: 12px;
    }

    .overlay--info {
      left: 9px;
      top: 9px;
      border-right: var(--color-dark) solid 1px;
      border-left: var(--color-dark) solid 1px;
      box-shadow: 4px 0px 6px 0px rgba(0, 0, 0, 0.5);
      max-height: calc(100vh - 18px);
      height: unset;
    }

    .overlay__content {
      margin: 0;
      height: 125%;
    }
  }

  .donate_button {
    display: inline-block;
    border: 1.01px solid var(--color-dark);
    background: var(--color-pink);
    color: var(--color-dark);
    box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    padding: 10px 0px;
    text-align: center;
    font-size: 30px;
    text-transform: uppercase;
    text-decoration: none;
    transition-property: color, border-color, background-color;
    transition-duration: 300ms;
    transition-timing-function: ease;
    width: 100%;
    text-transform: uppercase;
    font-size: 20px;
    text-decoration: none !important;
    min-width: calc(100% - 1.5em);
  }

  .button__fadein .donate_button:hover {
    background: var(--color-dark);
    color: var(--color-pink) !important;
    transition-property: color, border-color, background-color;
    transition-duration: 300ms;
    transition-timing-function: ease;
    border: 1.01px solid var(--color-dark);
  }
</style>
