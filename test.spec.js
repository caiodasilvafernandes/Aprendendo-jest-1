const achaArq = require("./fs");

jest.mock("./fs", () => {
    return {
        findFile: jest.fn().mockReturnValue(true)
    }
})

describe("teste de funções", () => {
    test("Encontrar o arquivo,", () => {
        const pack = achaArq.findFile();
        
        expect(pack).toBeTruthy();
        expect(achaArq.findFile).toBeCalled();
    });
});