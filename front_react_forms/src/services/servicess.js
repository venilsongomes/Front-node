import OpenAI from "openai";

const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com/v1',
    apiKey: 'sk-909f5dc6675a46b382ca63c5216eb526'
});

async function main() {
    try {
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: "You are a helpful assistant." }],
            model: "deepseek-chat",
        });
        console.log(completion.choices[0].message.content);
    } catch (error) {
        if (error.status === 402 && error.error?.message === "Insufficient Balance") {
            console.error("Error: Insufficient balance. Please check your API account balance.");
        } else {
            console.error("An error occurred:", error);
        }
    }
}

main();