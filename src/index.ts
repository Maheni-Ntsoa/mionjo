import { App } from './app'

async function main() {
    const app = new App(3010);
    await app.listen();
}
main(); 