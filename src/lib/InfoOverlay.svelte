<script lang="ts">
	import { infoOverlayVisible } from '../stores';
	import CloseButton from './CloseButton.svelte';
	import ActionButton from './ActionButton.svelte';
	import { toast  } from '@zerodevx/svelte-toast'

	let active_tab = 1;

	function closeInfoOverlay() {
		infoOverlayVisible.update(() => false);
	}

	function showTabState(parameter: number) {
		active_tab = parameter;
	}
	async function submitAndShowToast(event: { currentTarget: HTMLFormElement | undefined; }) {
		const data = new FormData(event.currentTarget);

		const response = await fetch((event.currentTarget as HTMLFormElement).action, {
			method: 'POST',
			body: data
		});
		const result = (await response.text());

		toast.push('Your story was successfully submitted. It will appear publicly on the map once it has been approved by our moderators.');
	}
</script>

<aside class="overlay overlay--info">
	<CloseButton functionOnClick={closeInfoOverlay}>close info overlay</CloseButton>

	<div class="header__menu__margin">
		<div class="info__tabs first__row">
			<button class:active={active_tab == 1} on:click={() => showTabState(1)}>About </button>
			<button class:active={active_tab == 2} on:click={() => showTabState(2)}>Support Us </button>
		</div>
		<div class="info__tabs">
			<button class:active={active_tab == 3} on:click={() => showTabState(3)}>Moderation </button>
			<button class:active={active_tab == 4} on:click={() => showTabState(4)}>Press </button>
		</div>
	</div>
	<div class="overlay__outer">
		<div class="overlay__content">
			<section style={active_tab !== 1 ? 'display: none;' : ''}>
				<h2>About</h2>
				<div class="overlay__section-text">
					<p>
						Queering the Map is a community generated counter-mapping platform for digitally
						archiving LGBTQ2IA+ experience in relation to physical space.
					</p>

					<p>
						The platform provides an interface to collaboratively record the cartography of queer
						life—from park benches to the middle of the ocean—in order to preserve our histories and
						unfolding realities, which continue to be invalidated, contested, and erased. From
						collective action to stories of coming out, encounters with violence to moments of
						rapturous love, Queering the Map functions as a living archive of queer life.
					</p>

					<p>
						Through mapping LGBTQ2IA+ experience in its intersectional permutations, the project
						works to generate affinities across difference and beyond borders — revealing the ways
						in which we are intimately connected.
					</p>

					<h2>Territorial Acknowledgment</h2>
					<div class="overlay__section-text">
						<p>
							Queering the Map was initiated on the unceded traditional lands of the Kanien'kehá:ka
							Nation. The island currently called “Montreal” is known as Tiohtia:ke in the language
							of the Kanien'kehá:ka, and it has historically been a meeting place for other
							Indigenous nations.
						</p>

						<p>
							A queer approach to space points out the limitations of the ways in which the world
							around us is produced and normalized by and for certain bodies and not others. It is
							pertinent that we continuously reflect and act on the ways in which LGBTQIA+ life is
							complicit in ongoing processes of settler-colonialism. How does race, gender,
							sexuality, citizenship, ability, and class affect the ways in which we relate to, move
							through, and create space? As a pin on Queering the Map in Honolulu, Hawaii attests:
							“queer liberation must mean decolonization, and decolonization must mean queer
							liberation.”
						</p>

						<p>
							If you are not currently aware of the rightful keepers of the land on which you are
							located, you can learn more at <a
								href="https://www.native-land.ca/"
								target="_blank"
								rel="noopener">native-land.ca</a
							>. Beyond simply acknowledging the colonial histories of the land on which you are
							located, we encourage you to take concrete steps towards decolonization by learning
							more about the ways in which you can support Indigenous communities in the fight for
							sovereignty.
						</p>
					</div>
				</div>
			</section>

			<section style={active_tab !== 2 ? 'display: none;' : ''}>
				<h2>Donate</h2>
				<div class="overlay__section-text">
					<p>
						<i>Queering the Map</i> is a grassroots endeavour, and relies on donations to cover the
						costs of keeping the site alive. Please support the future of
						<i>Queering The Map</i> by making a donation through our Patreon!
					</p>
					<ActionButton link="https://www.patreon.com/queeringthemap">Donate</ActionButton>
				</div>

				<h2>Volunteer</h2>
				<div class="overlay__section-text">
					<p>
						We are always looking for moderators and developers to support the maintenance of the
						platform! If you would like to volunteer your time, please send us an email expressing
						your interest at <a href="mailto:hi@queeringthemap.com">hi@queeringthemap.com</a>.
					</p>
				</div>
			</section>

			<section style={active_tab !== 3 ? 'display: none;' : ''}>
				<h2>Moderation Guidelines</h2>
				<div class="overlay__section-text">
					<p>
						Posts to Queering the Map are moderated by a small group of volunteers before they
						appear publicly. This to ensure the following are not added to the platform:
					</p>

					<div class="partial_div-numbered">
						<span>1</span>
						<p>
							Breaches of Anonymity We do not approve posts that breach your or anyone else's
							anonymity. This means posts containing last names, phone numbers, email addresses,
							social media handles, or exact addresses will not be approved.
						</p>
					</div>

					<div class="partial_div-numbered">
						<span>2</span>
						<p>
							Hate Speech We do not approve posts that degrade or threaten a group of people based
							on race, ethnicity, citizenship, ability, sexuality, sex, gender, or class.
						</p>
					</div>
					<div class="partial_div-numbered">
						<span>3</span>
						<p>Spam/Advertising We do not approve spam posts, or advertisements of any kind.</p>
					</div>

					<div class="partial_div-numbered">
						<p>
							The moderation process is to ensure the safety of the map, and is not about policing
							expressions or identities.
						</p>
					</div>
					<div class="partial_div-numbered">
						<p>
							Given the amount of posts that have been made over the past few months, we are at a
							significant moderation backlog, and are doing our best to publish posts as quickly as
							we can. We appreciate your patience.
						</p>
					</div>
				</div>

				<h2>Request Removal</h2>
				<div class="overlay__section-text removal_textarea">
					<form action="https://bapol.com.br/queeringthemap/email.php" method="POST" on:submit|preventDefault={submitAndShowToast}>
						<p>
							If you would like something you posted to be removed, or see something on the map you
							feel shouldn't be there, please contact us through the form below.
						</p>
						<p>Content of Post</p>
						<p>
							Please copy and paste the text if it is visible on the map, or list a few keywords if
							the post has not yet been approved.
						</p>
						<textarea name="content" required></textarea>

						<p>Reason for Removal</p>
						<p>Please provide a brief explanation for the removal of the post.</p>
						<textarea name="reason" required></textarea>

						<p>Email</p>
						<p>
							Please provide your email so we can contact you to confirm the removal of the post.
						</p>

						<input name="email" type="email" required />
						<p>By submitting I agree to the <a>Terms of Use</a> and <a>Privacy Policy</a></p>

						<input type="submit" value="Submit" />
					</form>
				</div>
			</section>

			<section style={active_tab !== 5 ? 'display: none;' : ''}>
				<h2>Land Acknowledgment</h2>
				<div class="overlay__section-text">
					<p>
						<i>Queering the Map</i> was initiated on the unceded traditional lands of the Kanien’kehá:ka
						Nation. The island currently called “Montreal” is known as Tiohtia:ke in the language of
						the Kanien’kehá:ka, and it has historically been a meeting place for other Indigenous nations.
					</p>

					<p>
						A queer approach to space points out the limitations of the ways in which the world
						around us is produced and normalized by and for certain bodies and not others. It is
						pertinent that we continuously reflect and act on the ways in which LGBTQIA+ life is
						complicit in ongoing processes of settler-colonialism. How does race, gender, sexuality,
						citizenship, ability, and class affect the ways in which we relate to, move through, and
						create space? As a pin on <i>Queering the Map</i> in Honolulu, Hawaii attests:
						<i
							>“queer liberation must mean decolonization, and decolonization must mean queer
							liberation.”</i
						>
					</p>

					<p>
						If you are not currently aware of the rightful keepers of the land on which you are
						located, you can learn more at <a
							href="https://native-land.ca/"
							target="_blank"
							rel="noopener">www.native-land.ca</a
						>. Beyond simply acknowledging the colonial histories of the land on which you are
						located, we encourage you to take concrete steps towards decolonization by learning more
						about the ways in which you can support Indigenous communities in the fight for
						sovereignty. A good place to start is
						<a href="https://unistoten.camp/" target="_blank" rel="noopener">unistoten.camp</a>.
					</p>
				</div>
			</section>
			<section style={active_tab !== 4 ? 'display: none;' : ''}>
				<h2>Press</h2>
				<div class="overlay__section-text">
					<p>
						Immerse: <a
							href="https://immerse.news/co-creating-a-map-of-queer-experience-bece7a743ca7"
							target="_blank"
							rel="noopener">Co-Creating a Map of Queer Experience</a
						>
					</p>
					<p>
						Sissy Screens: <a
							href="https://www.sissyscreens.com/interview/queering-the-map-interview/"
							target="_blank"
							rel="noopener">Queering the Map: An Interview With Lucas LaRochelle</a
						>
					</p>
					<p>
						CityLab: <a
							href="https://www.citylab.com/life/2018/02/how-to-queer-the-mapand-fend-off-an-attack/552824/"
							target="_blank"
							rel="noopener">A Crowdsourced Map of the Queer World</a
						>
					</p>
					<p>
						VICE: <a
							href="https://www.vice.com/en_us/article/ne9kjx/queering-the-map-google-maps-lgtbq"
							target="_blank"
							rel="noopener">Find Yourself in The Queer Version of Google Maps</a
						>
					</p>
					<p>
						Ruthless: <a
							href="http://www.ruthlessmagazine.co.uk/queering-the-map"
							target="_blank"
							rel="noopener">Queering The Map: A Skype Call with Lucas LaRochelle</a
						>
					</p>
					<p>
						i-D: <a
							href="https://i-d.vice.com/en_us/article/vbxkpb/queering-the-map-is-connecting-queer-moments-in-life"
							target="_blank"
							rel="noopener">Queering The Map is connecting Queer Moments in Life</a
						>
					</p>
					<p>
						CBC Arts: <a
							href="https://www.cbc.ca/arts/queer-love-in-the-making-this-massive-interactive-map-holds-a-whole-world-of-heartfelt-moments-1.4722385"
							target="_blank"
							rel="noopener">Queer Love in the Making</a
						>
					</p>
					<p>
						<a
							href="https://docs.google.com/spreadsheets/d/1Th45pQQv4dRfKikt8ic7-TOhr9pxlDTXoPQ9G2aQxhk/edit?usp=sharing"
							target="_blank"
							rel="noopener">All Press</a
						>
					</p>
				</div>
			</section>

			<section style={active_tab !== 6 ? 'display: none;' : ''}>
				<h2>Terms of Use</h2>
				<div class="overlay__section-text">
					<p>
						The Terms of Use is a living document. You can access and annotate it <a
							href="https://docs.google.com/document/d/1hfAU6Y4H3f3Vjr7nXdrxGwF197zGUeZQPKYOVyM6XsI/edit?usp=sharing"
							target="_blank"
							rel="noopener">here</a
						>.
					</p>
				</div>
			</section>

			<section style={active_tab !== 7 ? 'display: none;' : ''}>
				<h2>Contact</h2>
				<div class="overlay__section-text">
					<p>
						Get in touch at <a href="mailto:hi.queeringthemap@gmail.com"
							>hi.queeringthemap@gmail.com</a
						>
					</p>
					<p>
						Stay connected with us on <a
							href="https://www.instagram.com/queeringthemap/"
							target="_blank"
							rel="noopener">Instagram</a
						>,
						<a href="https://www.facebook.com/queeringthemap" target="_blank" rel="noopener"
							>Facebook</a
						>
						and
						<a href="https://twitter.com/queeringthemap_" target="_blank" rel="noopener">Twitter</a
						>.
					</p>
				</div>
			</section>
		</div>
		<div class="footer__menu__margin">
			<div class="info__tabs first__row">
				<button class:active={active_tab == 5} on:click={() => showTabState(5)}>FAQs </button>
				<button class:active={active_tab == 6} on:click={() => showTabState(6)}
					>Terms of Use
				</button>
			</div>
			<div class="info__tabs">
				<button class:active={active_tab == 7} on:click={() => showTabState(7)}
					>Privacy Policy
				</button>
				<button class:active={active_tab == 8} on:click={() => showTabState(8)}>Contact </button>
			</div>
		</div>
	</div>
</aside>

<style>
	a {
		cursor: pointer;
	}
	.footer__menu__margin {
		margin-top: 15px;
		width: calc((40vw));
		position: sticky;
		bottom: 0px;
		background: var(--color-pink);
	}
	.header__menu__margin {
		/* width: calc(100% - 45px); */
		width: calc((40vw - 43px));
		left: 55px;
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
		border: 1px solid var(--color-dark);
		height: 22.5px;
		font-size: 0.9rem;
		font-weight: 500;
		background: transparent;
		cursor: pointer;
	}
	.info__tabs button:nth-child(odd) {
		border-left: 0px;
	}
	.info__tabs button:nth-child(odd) {
		border-right: 0px;
	}
	.info__tabs button.active {
		background-color: var(--color-dark);
		color: white;
	}
	.info__tabs button:hover {
		background-color: black;
		color: white;
	}

	.info__tabs.first__row button {
		border-bottom: 0px;
	}
	.partial_div-numbered {
		display: flex;
		gap: 8px;
		/* align-items: baseline; */
	}
	.partial_div-numbered p {
		margin-top: 0px;
	}
	.partial_div-numbered span {
		border: 1px solid var(--color-dark);
		border-radius: 50%;
		min-width: 22px;
		height: 22px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.removal_textarea textarea,
	.removal_textarea input {
		background-color: var(--color-pink);
		width: 100%;
		min-height: 76px;
		margin: 10px 0px;
		filter: drop-shadow(0px 3px 3px #1a1a1a78);
		padding: 10px;
		padding-right: 0px;
		box-sizing: border-box;
		font-size: 15px;
		border: 2px solid var(--color-dark);
	}
	.removal_textarea [type='submit'] {
		cursor: pointer;
		background-color: black;
		text-transform: uppercase;
		color: white;
		font-size: 30px;
		min-width: calc(100% - 1em);
	}

	.removal_textarea input {
		min-height: 26px;
		filter: drop-shadow(0px 3px 3px #1a1a1a78);
	}

	.overlay {
		height: 100%;
		position: fixed;
		z-index: var(--overlay-z-index);
		top: 0;
		background-color: var(--color-pink);
		overflow-x: hidden;
	}

	/* aqui */
	.overlay__outer section p {
		padding-left: 1em;
		padding-right: 1em;
	}
	.overlay__outer section textarea,
	.overlay__outer section input,
	.overlay__outer section input[type='submit'] {
		width: calc(100% - 2em);
		margin: auto;
		display: flex;
		justify-content: center;
	}
	.overlay__outer section .partial_div-numbered {
		padding-left: 1em;
	}
	.overlay__outer section .partial_div-numbered p {
		padding-left: 0em;
		padding-right: 1em;
	}
	/* .overlay__outer {
		width: 0;
		padding: 2em;
	} */

	section {
		margin-top: 2em;
	}

	/* section:first-child {
		margin-top: -1.2em;
	} */

	h2 {
		text-decoration: none;
		font-size: 1.2rem;
		color: var(--color-dark);
		display: block;
		font-weight: 500;
		/* text-transform: uppercase; */
		padding-bottom: 4px;
		border-top: 2px solid var(--color-dark);
	}

	@media (min-width: 800px) {
		h2 {
			font-size: 1.4rem;
			padding-left: 1.05rem;
			padding-top: 1em;
		}
	}

	.overlay__section-text {
		text-decoration: none;
		color: var(--color-dark);
		display: block;
		margin-top: 1em;
		font-size: 1.1rem;
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
	@media (min-width: 800px) {
		.overlay__outer {
			width: calc(40vw);
			padding-top: 12px;
		}

		.overlay--info {
			left: 9px;
			top: 9px;
			border-right: var(--color-dark) solid 2px;
			border-left: var(--color-dark) solid 2px;
			box-shadow: 4px 0px 6px 0px rgba(0, 0, 0, 0.5);
			max-height: 97vh;
			height: unset;
		}

		.overlay__content {
			margin: 0;
			height: 125%;
		}
	}
</style>
