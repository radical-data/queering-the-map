<script lang="ts">
	import { infoOverlayVisible } from '../stores';
	import CloseButton from './CloseButton.svelte';
	import ActionButton from './ActionButton.svelte';

	function closeInfoOverlay() {
		infoOverlayVisible.update(() => false);
	}
</script>

<aside class="overlay overlay--info">
	<CloseButton functionOnClick={closeInfoOverlay}>close info overlay</CloseButton>
	<div class="overlay__outer">
		<div class="overlay__content">
			<section>
				<h2>About</h2>

				<div class="overlay__section-text">
					<p>
						<i>Queering the Map</i> is a community generated counter-mapping platform for digitally archiving
						LGBTQ2IA+ experience in relation to physical space.
					</p>
					<p>
						The platform provides an interface to collaboratively record the cartography of queer
						life—from park benches to the middle of the ocean—in order to preserve our histories and
						unfolding realities, which continue to be invalidated, contested, and erased. From
						collective action to stories of coming out, encounters with violence to moments of
						rapturous love, <i>Queering the Map</i> functions as a living archive of queer life. If
						it counts to you, then it counts for <i>Queering the Map</i>.
					</p>
					<p>
						Through mapping LGBTQ2IA+ experience in its intersectional permutations, the project
						works to generate affinities across difference and beyond borders—revealing the ways in
						which we are intimately connected.
					</p>
				</div>
			</section>

			<section>
				<h2>Support the project</h2>

				<div class="overlay__section-text">
					<p>
						<i>Queering the Map</i> is a grassroots endeavour, and relies on donations to cover the
						costs of keeping the site alive. Please consider supporting the future of
						<i>Queering The Map</i> by joining our Patreon community!
					</p>
					<ActionButton link="https://www.patreon.com/queeringthemap">Donate</ActionButton>
				</div>
			</section>

			<section>
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

			<section>
				<h2>Selected Press</h2>

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

			<section>
				<h2>Moderation</h2>

				<div class="overlay__section-text">
					<p>
						Posts to <i>Queering the Map</i> are moderated by a small group of volunteers before they
						appear publically on the map. This to ensure no hate speech, spam or breaches of anonymity
						are added to the site.
					</p>
					<p>
						Given the amount of posts that have been made over the past few months, we are at a
						significant moderation backlog, and are doing our best to publish posts as quickly as we
						can. If you see anything you feel should be removed, or would like something you posted
						to be deleted, please contact us!
					</p>
				</div>
			</section>

			<section>
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

			<section>
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
	</div>
</aside>

<style>
	.overlay {
		height: 100%;
		position: fixed;
		z-index: var(--overlay-z-index);
		top: 0;
		background-color: var(--color-pink);
		overflow-x: hidden;
	}

	.overlay__outer {
		width: 0;
		padding: 2em;
	}

	section {
		margin-top: 2em;
	}

	section:first-child {
		margin-top: -1.2em;
	}

	h2 {
		text-decoration: none;
		font-size: 1.2rem;
		color: var(--color-dark);
		display: block;
		font-weight: bold;
		text-transform: uppercase;
		padding-bottom: 4px;
		border-bottom: 2px solid var(--color-dark);
	}

	@media (min-width: 800px) {
		h2 {
			font-size: 1.4rem;
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
		text-decoration-color: var(--color-pink-bright);
		color: var(--color-dark);
	}

	a:not(.closebtn):hover,
	a:not(.closebtn):focus {
		color: var(--color-pink-bright);
	}

	.overlay--info {
		left: 0;
	}

	@media (min-width: 800px) {
		.overlay__outer {
			width: calc(40vw - 2px);
		}

		.overlay--info {
			left: -2px;
			border-right: var(--color-dark) solid 2px;
			box-shadow: 4px 0px 6px 0px rgba(0, 0, 0, 0.5);
		}

		.overlay__content {
			margin: 0;
			height: 125%;
		}
	}
</style>
