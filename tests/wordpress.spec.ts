import{expect, test} from "@playwright/test"

test.describe("E2E WordP`ress PlayGround", ()=>{
    test.beforeEach(
        async({page})=>{
            await page.goto("http://sosfinance.joaoc.dev",
                {
                    timeout: 60000,
                }
            );
            await expect(
                page.getByRole('heading',{name:"Helo World", exact: true})
            ).toBeVisible({
                timeout:30000,
            });
        }
    );
    test("teste", async({page})=>{

    });
});