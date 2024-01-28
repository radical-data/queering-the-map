<script lang="ts">
	interface PressArticle {
		title: string;
		link: string;
		author: string;
		publication: string;
	}

	const selectedPress: PressArticle[] = [
		{
			title: 'Just Made a Queer Memory? Drop a Pin',
			link: 'https://www.nytimes.com/2023/06/25/style/queering-the-map-lucas-larochelle.html',
			author: 'Katherine Oung',
			publication: 'The New York Times'
		},
		{
			title: "Queer Gazan's on Queering the Map",
			link: 'https://time.com/6326254/queering-the-map-gaza-lgbt-palestinians/',
			author: 'Chad De Guzman',
			publication: 'Time'
		},
		{
			title: 'Queering the Map, an Interview with Lucas LaRochelle',
			link: 'https://www.sissyscreens.com/queering-the-map-interview/',
			author: 'Tali Rozeman',
			publication: 'Sissy Screens'
		}
	];

	const allPress: PressArticle[] = [...selectedPress];
</script>

<div class="copy-inner">
	<p class="copy-header">Selected Press</p>
	<div class="press-items">
		{#each selectedPress as press}
			<div class="press-item">
				<p>{press.publication}</p>
				<a href={press.link} target="_blank">{press.title}</a>
				<p>By {press.author}</p>
			</div>
		{/each}
	</div>
	<div class="copy-separator"></div>
	<p class="copy-header">All Press</p>
	<div class="press-items">
		{#each allPress as press}
			<div class="press-item">
				<p>{press.publication}</p>
				<a href={press.link} target="_blank">{press.title}</a>
				<p>By {press.author}</p>
			</div>
		{/each}
	</div>
</div>
