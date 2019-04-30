const helpers = require("../helpers");

describe("Project", () => {
  it("The ProductListComponent doesn't exist - have you run the `ng` command to generate it yet?", () => {
    helpers.readFile(
      "src/app/product-list/product-list.component.ts",
      "The ProductListComponent doesn't exist - have you run the `ng` command to generate it yet?"
    );
  });
});
