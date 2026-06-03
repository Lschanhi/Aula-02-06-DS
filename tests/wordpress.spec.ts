import { expect, test } from "@playwright/test"
import { Auth } from "../src/Auth";

test.describe("E2E WordP`ress PlayGround", () => {
    test.beforeEach(
        async ({ page }) => {
            await page.goto("http://sosfinance.joaoc.dev",
                {
                    timeout: 60000,
                }
            );

        }
    );
    test("Abrir uma matéria", async ({ page }) => {

        const menuButton = page.getByRole('link',
            {
                name: "Educação Financeira"

            }

        );

        await menuButton.click();

        const articLeLink = page.locator('h2').getByRole('link',
            {
                name: 'Por que é importante guardar'
            }
        );

        await articLeLink.click();




        await expect(
            await page.innerText("article h1")

        ).toBe("Por que é importante guardar dinheiro?");
    });


    test("Fazer um comentario na matéria", async ({ page }) => {

        const menuButton = page.getByRole('link',
            {
                name: "Educação Financeira"

            }

        );

        await menuButton.click();

        const articLeLink = page.locator('h2').getByRole('link',
            {
                name: 'Por que é importante guardar'
            }
        );

        await articLeLink.click();

        const loginLink = page.getByRole('link',
            {
                name: 'login'
            }
        ).click();



        await page.fill("#user_login", "etec");
        await page.fill("#user_pass", "etec123@@");
        await page.click("#wp-submit");

        await page.fill("#comment", "Gostei da aula de hoje e hoje a aula fluiu by lucas");
        await page.click("#submit");



        
    });
    
    
    test("Fazer Logim e Acessar o painel de Admin", async({ page }) =>
            {
                const auth = new Auth(page);
                await auth.doLogin("etec", "etec123@@");

                await expect(
                    await page.getByRole("heading",
                        {
                            name:"Painel"
                        }
                    ),
                ).toBeVisible();
            }
        )


});