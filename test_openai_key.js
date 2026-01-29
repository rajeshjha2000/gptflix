import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.VITE_OPENAI_KEY;

console.log("Testing OpenAI Key:", apiKey ? apiKey.slice(0, 10) + "..." : "undefined");

if (!apiKey) {
    console.error("ERROR: VITE_OPENAI_KEY not found in .env file.");
    process.exit(1);
}

const openai = new OpenAI({
    apiKey: apiKey,
});

async function testKey() {
    try {
        console.log("Sending request to OpenAI...");
        const completion = await openai.chat.completions.create({
            messages: [{ role: "user", content: "Say hello" }],
            model: "gpt-3.5-turbo",
        });
        console.log("SUCCESS! Response:", completion.choices[0].message.content);
    } catch (error) {
        console.error("\nFAILED. Detailed Error:");
        console.error("Status:", error.status);
        console.error("Code:", error.code);
        console.error("Type:", error.type);
        console.error("Message:", error.message);

        if (error.status === 429) {
            console.log("\nDIAGNOSIS: 429 specifically means 'Too Many Requests' or 'Quota Exceeded'.");
            console.log("1. Check your Credit Balance (not just 'Usage') at https://platform.openai.com/settings/organization/billing/overview");
            console.log("2. If you just added credits, it can take 10-20 minutes to activate.");
        }
    }
}

testKey();
