<script lang="ts">
  import {
    addOverlayVisible,
    infoOverlayVisible,
    infoOverlayActiveTab
  } from '../stores';
  import ActionButton from './ActionButton.svelte';
  import CloseButton from './CloseButton.svelte';
  import { activeMarkerCoords } from '../stores';
  import {
    turnstile,
    type TurnstileEventDetail
  } from '@svelte-put/cloudflare-turnstile';
  import { PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY } from '$env/static/public';
  import { SvelteToast, toast } from '@zerodevx/svelte-toast';

  let momentDescription = '';
  let captchaToken = '';

  function closeAddOverlay() {
    addOverlayVisible.update(() => false);
  }

  function openInfoOverlay(tabActive: number) {
    infoOverlayVisible.update(() => true);
    infoOverlayActiveTab(tabActive);
  }

  const showSubmissionSuccessNotification = () => {
    toast.push(
      'Your story was successfully submitted. It will appear publicly on the map once it has been approved by our moderators.',
      {
        theme: {
          '--toastBarHeight': 0
        },

        duration: 5000
      }
    );
  };

  async function handleAddMoment() {
    if (!captchaToken) {
      alert('Please complete the CAPTCHA.');
      return;
    }

    const payload = JSON.stringify({
      lng: $activeMarkerCoords?.lng,
      lat: $activeMarkerCoords?.lat,
      description: momentDescription,
      captchaToken
    });

    const response = await fetch('moments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: payload
    });

    if (response.status === 201) {
      closeAddOverlay();
      showSubmissionSuccessNotification();
    } else {
      const result = await response.json();
      alert(`Error: ${result.error}`);
    }
  }

  const handleTurnstile = (
    e: CustomEvent<TurnstileEventDetail<{ token: string }>>
  ) => {
    captchaToken = e.detail.token;
  };

  new SvelteToast({
    target: document.body
  });
</script>

<aside class="overlay overlay--add">
  <div class="action-button-container">
    <div>
      <div class="bordered"></div>
      <div class="bordered"></div>
    </div>
    <div>
      <div class="bordered" style="border-right: 0px;"></div>
      <div class="bordered" style="border-right: 0px;"></div>
    </div>

    <CloseButton functionOnClick={closeAddOverlay} position="right"
      >close add overlay</CloseButton
    >
  </div>
  <div class="overlay__outer">
    <div class="overlay__content">
      <section>
        <div class="overlay__section-title">Add Your Story</div>
        <div class="overlay__section-text">
          <div class="partial_div-numbered">
            <span>1</span>Click the location of your story on the map.
          </div>
          <div class="partial_div-numbered">
            <span>2</span>Share your story in the the text box below.
          </div>
          <div class="partial_div-numbered">
            <span>3</span>Click the Add button.
          </div>
          <form>
            <textarea
              bind:value={momentDescription}
              id="txt_contents"
              class="subform"
            ></textarea>

            <div
              style="margin-top: 16px"
              use:turnstile
              turnstile-sitekey={PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY}
              on:turnstile={handleTurnstile}
            ></div>
            <!-- <div class="recaptcha-text">
							This site is protected by Turnstile and Cloudflare
							<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener"
								>Privacy Policy</a
							>
							and
							<a href="https://www.cloudflare.com/website-terms/" target="_blank" rel="noopener"
								>Terms of Service</a
							>
							apply.
						</div> -->

            <div class="recaptcha-text">
              By submitting I agree to the <a
                href="/"
                on:click|preventDefault={() => openInfoOverlay(6)}
                target="_blank"
                rel="noopener">Terms of Use</a
              >
              and
              <a
                href="/"
                on:click|preventDefault={() => openInfoOverlay(7)}
                target="_blank"
                rel="noopener">Privacy Policy</a
              >.
            </div>
            <ActionButton functionOnClick={handleAddMoment}>Add</ActionButton>
          </form>
        </div>
      </section>
    </div>
  </div>
</aside>

<style>
  .partial_div-numbered span {
    border: 1.01px solid var(--color-dark);
    border-radius: 50%;
    min-width: 22px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    margin-top: 5px;
    margin-right: 10px;
  }

  .overlay__section-text .partial_div-numbered {
    min-height: 39px;
  }

  .overlay {
    position: fixed;
    z-index: var(--overlay-z-index);
    top: 0;
    background-color: var(--color-pink);
    overflow-x: hidden;
  }

  .overlay__outer {
    width: calc(40vw);
    padding: 0.8em;
  }

  .overlay__section-title {
    text-decoration: none;
    font-size: 15px;
    color: var(--color-dark);
    display: block;
    font-weight: 500;
    padding-bottom: 4px;
    padding-top: 1em;
    padding-left: 2.05rem;
    font-weight: bold;
  }

  .overlay__section-text {
    text-decoration: none;
    color: var(--color-dark);
    display: block;
    margin-top: 1em;
    font-size: 15px;
  }

  .overlay__section-text > div {
    display: flex;
    align-items: center;
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

  @media (max-width: 800px) {
    .overlay__section-title {
      padding-left: 1.05rem;
    }

    .partial_div-numbered {
      padding-left: 0.5em;
    }
    .overlay--add,
    .overlay__outer {
      width: 100%;
    }
    .overlay__outer {
      max-width: 100% !important;
      padding-top: 0px;
      box-sizing: border-box;
    }
    .overlay__content {
      max-width: 100%;
    }
    .overlay--add textarea {
      padding: 10px;
      width: 99%;
      height: 125px;
      margin-top: 10px;
    }
    .overlay--add {
      border: 1.01px solid var(--color-dark);
      position: fixed;
      top: unset;
      width: calc(100vw - 18px);
      left: 50%;
      bottom: 1%;
      transform: translateX(-50%);
      z-index: 999999;
    }
  }

  @media (min-width: 800px) {
    .overlay__outer {
      width: calc(40vw);
      padding: 0em;
    }

    .overlay__outer form {
      padding: 0.8em;
      margin-bottom: 0.8em;
    }

    .overlay--add {
      border-top: none;
      border-left: var(--color-dark) solid 1px;
      box-shadow: -4px 0px 6px 0px rgba(0, 0, 0, 0.5);
      top: 9px;
      right: 9px !important;
      border: 1.01px solid;
      z-index: 199;
    }

    .overlay__content {
      margin: 0;
      height: 125%;
      left: 9px;
      top: 9px;
      max-height: 97vh;
      height: unset;
    }
  }

  .recaptcha-text {
    margin-top: 0.5em;
    font-size: 0.75em;
  }

  .subform {
    margin: auto;
    text-align: left;
    padding-left: 0;
    padding-top: 0;
    padding-bottom: 0.4em;
    padding-right: 0.4em;
    width: 100%;
    font-size: 12pt;
    height: 12em;
    background-color: #f4b9d6;
    border: 1.01px solid var(--color-dark);
  }

  textarea {
    font-family: 'Apfel Grotezk', sans-serif;
    resize: vertical;
  }

  .action-button-container {
    right: 0;
  }
  .action-button-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .action-button-container > div {
    width: 50%;
  }
  .action-button-container .bordered {
    border-right: 1.01px solid var(--color-dark);
    border-bottom: 1.01px solid var(--color-dark);
    height: 21px;
  }
  .overlay--add textarea {
    box-sizing: border-box !important;
    padding: 10px !important;
  }
</style>
