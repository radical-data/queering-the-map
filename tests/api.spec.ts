import { test, expect, type APIRequestContext } from "@playwright/test";

test.describe("Add Moment API with Turnstile captcha", () => {
	test("should add moment only if Turnstile verifies successfully", async ({
		request,
	}: { request: APIRequestContext }) => {
		const response = await request.post("moments", {
			data: {
				lng: 0,
				lat: 0,
				description: "test moment",
				captchaToken: "XXXX.DUMMY.TOKEN.XXXX",
			},
			headers: { Accept: "application/json" },
		});

		expect(response.status()).toBe(201);
		const responseBody = await response.json();

	test("should fail with empty token", async ({
		request,
	}: { request: APIRequestContext }) => {
		const response = await request.post("moments", {
			data: {
				lng: 0,
				lat: 0,
				description: "test moment",
				captchaToken: "",
			},
			headers: { Accept: "application/json" },
		});

		const responseBody = await response.json();

		expect(response.status()).toBe(400);
		expect(responseBody.error).toBe("CAPTCHA token is missing.");
	});

	// This test does not work with the test Turnstile keys in .env but should work with real keys
	// (https://developers.cloudflare.com/turnstile/troubleshooting/testing/)
	// test("should fail with invalid token", async ({
	// 	request,
	// }: { request: APIRequestContext }) => {
	// 	const response = await request.post("moments", {
	// 		data: {
	// 			lng: 0,
	// 			lat: 0,
	// 			description: "test moment",
	// 			captchaToken: "wrong token",
	// 		},
	// 		headers: { Accept: "application/json" },
	// 	});

	// 	const responseBody = await response.json();

	// 	expect(response.status()).toBe(400);
	// 	expect(responseBody.error).toBe("CAPTCHA verification failed.");
	// });
});
