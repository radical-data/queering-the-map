<script lang="ts">
	interface FAQ {
		question: string;
		answer: string;
	}

	const faqs: FAQ[] = [{
		question: 'Why can’t I see my post on the map?',
		answer: 'All posts are moderated by a small group of volunteers before appearing publicly. We lorem ipsum. '
	}, {
		question: 'Can I delete my post?',
		answer: 'Yes, of course! To delete a post, please fill out the Request Removal form in the Moderation tab. '
	}, {
		question: 'How can I become a moderator?',
		answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio dui, porta sit amet odio a, rutrum facilisis nulla. Proin id ante non magna gravida mattis.'
	}, {
		question: 'Who made Queering the Map?',
		answer: 'Queering the Map was created by Lucas LaRochelle. The platform is maintained by a network of volunteer moderators and developers.'
	}, {
		question: 'How does Queering the Map use my data?',
		answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio dui, porta sit amet odio a, rutrum facilisis nulla. Proin id ante non magna gravida mattis.'
	}, {
		question: 'Can I use content from Queering the Map?',
		answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio dui, porta sit amet odio a, rutrum facilisis nulla. Proin id ante non magna gravida mattis.'
	}];
</script>

<div class="copy-inner">
	{#each faqs as faq}
		<p class="copy-header">{ faq.question }</p>
		<p>{ faq.answer }</p>
		<div class="copy-separator"></div>
	{/each}
</div>
